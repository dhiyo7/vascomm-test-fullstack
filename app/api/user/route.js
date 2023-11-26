import { baseResponse, sendEmailPassword } from "@/utils/general";
import { PrismaClient } from "@prisma/client";
import { HttpStatusCode } from "axios";

import bcrypt from "bcrypt";

const DEFAULT_TAKE = 10;

const prisma = new PrismaClient();

export const GET = async (req) => {
  try {
    const url = new URL(req.url);
    const skip = parseInt(url.searchParams.get("skip") || 0);
    const take = parseInt(url.searchParams.get("take") || DEFAULT_TAKE);

    const data = await prisma.user.findMany({
      skip,
      take,
      select: {
        id: true,
        name: true,
        email: true,
        no_telepon: true,
        role: true,
        status: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    return baseResponse({
      status: HttpStatusCode.Ok,
      message: "Berhasil",
      data,
    });
  } catch (error) {
    return baseResponse({
      status: HttpStatusCode.InternalServerError,
      message: "Terjadi Kesalahan",
      error
    });
  }
};

export const POST = async (req) => {
  try {
    const password = (Math.random() + 1).toString(36).substring(2);
    const hashedPassword = await bcrypt.hash(password, 12);

    const body = await req.json();
    const { email, name, no_telepon } = body;

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
        message: "Data berhasil disimpan",
        data,
      });
    } else {
      return baseResponse({
        status: HttpStatusCode.BadRequest,
        message: "Email tidak terkirim",
      });
    }
  } catch (_) {
    return baseResponse({
      status: HttpStatusCode.InternalServerError,
      message: "Terjadi Kesalahan",
    });
  }
};
