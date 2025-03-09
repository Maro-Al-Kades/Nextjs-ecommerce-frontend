"use server";

import { revalidatePath } from "next/cache";

/**
 @desc Get Brands Count 
*/
export async function getBrandsCount() {
  try {
    const url = new URL(`${process.env.API_URI}/brands/count`);

    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) throw new Error("Failed to fetch brands");

    const brands = await res.json();

    return brands;
  } catch (error) {
    console.error("Error fetching brands:", error);

    return [];
  }
}

/**
 @desc Get All Brands 
*/
export async function getBrands({
  page,
  limit,
}: {
  page: Number;
  limit: Number;
}) {
  try {
    const url = new URL(`${process.env.API_URI}/brands`);

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
 @desc Create New Brand 
*/
export async function createBrand(prevState: any, formData: FormData) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/brands`, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (!res.ok) throw new Error("فشل في إضافة الماركة!");

    revalidatePath("/admin/brands");

    return { success: true, message: "تم إضافة الماركة بنجاح!" };
  } catch (error) {
    console.error("Error creating brand:", error);
    return { success: false, message: "حدث خطأ أثناء إضافة الماركة!" };
  }
}

/**
 @desc Update specific Brand 
*/
export async function updateBrand(brandId: string, formData: FormData) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URI}/brands/${brandId}`,
      {
        method: "PUT",
        body: formData,
        headers: { Accept: "application/json" },
      }
    );

    if (!res.ok) throw new Error("فشل في تحديث الماركة!");

    revalidatePath("/admin/brands");

    return { success: true, message: "تم تحديث الماركة بنجاح!" };
  } catch (error) {
    console.error("Error updating brand:", error);
    return { success: false, message: "حدث خطأ أثناء تحديث الماركة!" };
  }
}

/**
 @desc Delete Specific Brand 
*/
export async function deleteBrand(brandId: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URI}/brands/${brandId}`,
      {
        method: "DELETE",
        headers: { Accept: "application/json" },
      }
    );

    if (!res.ok) throw new Error("فشل في حذف الماركة!");

    revalidatePath("/admin/brands");

    return { success: true, message: "تم حذف الماركة بنجاح!" };
  } catch (error) {
    console.error("Error deleting brand:", error);
    return { success: false, message: "حدث خطأ أثناء حذف الماركة!" };
  }
}
