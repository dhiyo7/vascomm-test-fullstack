import { baseResponse } from "@/utils/general";
import { PrismaClient } from "@prisma/client";
import { HttpStatusCode } from "axios";

const prisma = new PrismaClient();

export const GET = async (_, { params }) => {
  try {
    const { id } = params;
    const data = await prisma.user.findUniqueOrThrow({
      where: {
        id,
      },
    });

    delete data.password;

    if (id) {
      return baseResponse({
        status: HttpStatusCode.Ok,
        message: "Berhasil",
        data: data,
      });
    }
  } catch (error) {
    return baseResponse({
      status:
        error.code === "P2025"
          ? HttpStatusCode.NotFound
          : HttpStatusCode.InternalServerError,
      message:
        error.code === "P2025" ? "User tidak ditemukan" : "Terjadi kesalahan",
    });
  }
};

export const PUT = async (req, { params }) => {
  try {
    const { id } = params;

    const body = await req.json();

    const data = await prisma.user.update({
      data: body,
      where: { id },
    });

    delete data.password;

    return baseResponse({
      status: HttpStatusCode.Ok,
      message: "Data berhasil diubah",
      data,
    });
  } catch (error) {
    return baseResponse({
      status:
        error.code === "P2025"
          ? HttpStatusCode.NotFound
          : HttpStatusCode.InternalServerError,
      message:
        error.code === "P2025" ? "Akun tidak ditemukan" : "Terjadi Kesalahan",
      error,
    });
  }
};

export const DELETE = async (_, { params }) => {
  try {
    const { id } = params;

    await prisma.user.update({
      data: {
        status: true,
      },
      where: { id },
    });

    return baseResponse({
      status: HttpStatusCode.Ok,
      message: "Data berhasil dihapus",
    });
  } catch (error) {
    return baseResponse({
      status:
        error.code === "P2025"
          ? HttpStatusCode.NotFound
          : HttpStatusCode.InternalServerError,
      message:
        error.code === "P2025" ? "Akun tidak ditemukan" : "Terjadi Kesalahan",
      error,
    });
  }
};
