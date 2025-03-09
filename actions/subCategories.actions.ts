"use server";

import { revalidatePath } from "next/cache";

/**
 @desc Get SubCategories Count 
*/
export async function getSubCategoriesCount() {
  try {
    const url = new URL(`${process.env.API_URI}/subcategories/count`);

    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) throw new Error("Failed to fetch subcategories");

    const subcategories = await res.json();

    return subcategories;
  } catch (error) {
    console.error("Error fetching subcategories:", error);

    return [];
  }
}

export async function getSubCategories({ page = 1, limit = 10 }) {
  try {
    const url = new URL(`${process.env.API_URI}/subcategories`);

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
 @desc Create New SubCategory 
*/
export async function createSubCategory(prevState: any, formData: FormData) {
  try {
    const res = await fetch(`${process.env.API_URI}/subcategories`, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (!res.ok) throw new Error("فشل في إضافة التصنيف الفرعي!");

    revalidatePath("/admin/manage-subcategories");

    return { success: true, message: "تم إضافة  التصنيف الفرعي بنجاح!" };
  } catch (error) {
    console.error("Error creating brand:", error);
    return { success: false, message: "حدث خطأ أثناء إضافة التصنيف الفرعي!" };
  }
}
