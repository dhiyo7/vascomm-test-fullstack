import { baseResponse } from "@/utils/general";
import { PrismaClient } from "@prisma/client";
import { HttpStatusCode } from "axios";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export const POST = async (req) => {
  try {
    const body = await req.json();

    const { email, password } = body;

    const user = await prisma.user.findFirstOrThrow({
      where: {
        email,
      },
    });

    const isValidPassword = bcrypt.compareSync(password, user.password);

    if (isValidPassword) {
      delete user.password;
      return baseResponse({
        status: HttpStatusCode.Ok,
        message: "Berhasil",
        data: user,
      });
    } else {
      return baseResponse({
        status: HttpStatusCode.Ok,
        message: "Password salah",
      });
    }
  } catch (error) {
    return baseResponse({
      status:
        error.code === "P2025"
          ? HttpStatusCode.NotFound
          : HttpStatusCode.InternalServerError,
      message:
        error.code === "P2025" ? "Akun tidak ditemukan" : "Terjadi Kesalahan",
    });
  }
};
