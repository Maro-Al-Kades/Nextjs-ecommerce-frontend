"use server";

import { revalidatePath } from "next/cache";

/**
 @desc Get Categories Count 
*/
export async function getCategoriesCount() {
  try {
    const url = new URL(`${process.env.API_URI}/categories/count`);

    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) throw new Error("Failed to fetch categories");

    const categories = await res.json();

    return categories;
  } catch (error) {
    console.error("Error fetching categories:", error);

    return [];
  }
}

export async function getCategories({ page = 1, limit = 10 }) {
  try {
    const url = new URL(`${process.env.API_URI}/categories`);

    url.searchParams.append("page", String(page));
    url.searchParams.append("limit", String(limit));

    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) throw new Error("Failed to fetch products");

    const products = await res.json();

    return products.data;
  } catch (error) {
    console.error("Error fetching products:", error);

    return [];
  }
}

/**
 @desc Create New Category 
*/
export async function createCategory(prevState: any, formData: FormData) {
  try {
    const res = await fetch(`${process.env.API_URI}/categories`, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (!res.ok) throw new Error("فشل في إضافة التصنيف!");

    revalidatePath("/admin/manage-categories");

    return { success: true, message: "تم إضافة التصنيف بنجاح!" };
  } catch (error) {
    console.error("Error creating brand:", error);
    return { success: false, message: "حدث خطأ أثناء إضافة التصنيف!" };
  }
}
