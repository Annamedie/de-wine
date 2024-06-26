"use server";

import { db } from "@/prisma/db";

export async function getProductsByCategory(categoryId: string) {
  const products = await db.product.findMany({
    where: { categories: { some: { id: categoryId } } },
    include: { categories: true },
  });
  return products;
}

export async function getCategoryByTitle(title: string) {
  const category = await db.category.findUnique({ where: { title } });
  return category;
}

//hämtar kategorins id från databasen baserat på dess titel och returnerar en array med id:n, används i createProduct
export async function getCategoryIds(categoryTitles: string[]) {
  const categories = await db.category.findMany({
    where: {
      title: {
        in: categoryTitles,
      },
    },
    select: {
      id: true,
    },
  });
  return categories.map((category) => category.id);
}

export async function getCategories() {
  const categories = await db.category.findMany();
  return categories;
}
