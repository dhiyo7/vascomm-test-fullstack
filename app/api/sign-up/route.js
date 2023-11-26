import { baseResponse, sendEmailPassword } from "@/utils/general";
import { PrismaClient } from "@prisma/client";
import { HttpStatusCode } from "axios";
import bcrypt from 'bcrypt'

const prisma = new PrismaClient();

export const POST = async (req) => {
  try {
    const body = await req.json();
    const { email, name, no_telepon } = body;
    const password = (Math.random() + 1).toString(36).substring(2);
    const hashedPassword = await bcrypt.hash(password, 12);

    const exists = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (exists) {
      return baseResponse({
        status: HttpStatusCode.Conflict,
        message: "Email sudah terdaftar!",
      });
    }

    const data = await prisma.user.create({
      data: {
        email,
        name,
        no_telepon,
        password: hashedPassword,
      },
    });

    const resEmail = await sendEmailPassword(
      "Vascom",
      email,
      `Password baru anda: ${password}`
    );
    delete data.password;

    if (resEmail) {
      return baseResponse({
        status: HttpStatusCode.Created,
        message: "Berhasil registrasi",
        data,
      });
    } else {
      return baseResponse({
        status: HttpStatusCode.BadRequest,
        message: "Gagal registrasi",
      });
    }
  } catch (error) {
    return baseResponse({
      status: HttpStatusCode.InternalServerError,
      message: "Terjadi Kesalahan",
    });
  }
};
