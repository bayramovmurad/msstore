'use server';


import { prisma } from "@/db/prisma";
import { LATEST_PRODUCTS_LIMIT } from "../constant";


export async function getLatestProducts() {
    const data = await prisma.product.findMany({
        take: LATEST_PRODUCTS_LIMIT,
        orderBy: {
            createdAt: 'desc'
        }
    });
    return data
}

export async function getProductBySlug (slug: string) {
    return await prisma.product.findFirst({where: {slug}})
};