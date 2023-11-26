import { baseResponse } from "@/utils/general";
import { PrismaClient } from "@prisma/client";
import { HttpStatusCode } from "axios";

const prisma = new PrismaClient();

export const GET = async () => {
  try {
    const countUser = await prisma.user.findMany();
    const countUserActive = await prisma.user.findMany({
      where: { status: false },
    });

    const countProduct = await prisma.product.findMany();
    const countProductActive = await prisma.product.findMany({
      where: { status: false },
    });

    const data = {
      user: countUser.length,
      userActive: countUserActive.length,
      product: countProduct.length,
      productActive: countProductActive.length,
    };

    return baseResponse({
      status: HttpStatusCode.Ok,
      message: "Berhasil",
      data,
    });
  } catch (error) {
    return baseResponse({
      status: HttpStatusCode.InternalServerError,
      message: "Terjadi Kesalahan",
    });
  }
};
