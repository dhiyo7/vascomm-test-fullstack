import { baseResponse } from "@/utils/general";
import { PrismaClient } from "@prisma/client";
import { HttpStatusCode } from "axios";

const prisma = new PrismaClient();

const DEFAULT_TAKE = 10

export const GET = async (req) => {
  try {
    const url = new URL(req.url);
    const skip = parseInt(url.searchParams.get("skip") || 0);
    const take = parseInt(url.searchParams.get("take") || DEFAULT_TAKE);

    const data = await prisma.product.findMany({
      take,
      skip,
      where: {
        status: false,
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
    const body = await req.json();
    const { name, price, image } = body;

    const data = await prisma.product.create({
      data: {
        name,
        price,
        image,
      },
    });

    return baseResponse({
      status: HttpStatusCode.Created,
      message: "Data berhasil disimpan",
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
