"use server";

import { revalidatePath } from "next/cache";

export async function getCoversCount() {
  try {
    const url = new URL(`${process.env.API_URI}/covers/count`);

    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) throw new Error("Failed to fetch covers");

    const covers = await res.json();

    return covers;
  } catch (error) {
    console.error("Error fetching covers:", error);

    return [];
  }
}

export async function getCovers({ page = 1, limit = 10 }) {
  try {
    const url = new URL(`${process.env.API_URI}/covers`);

    url.searchParams.append("page", String(page));
    url.searchParams.append("limit", String(limit));

    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) throw new Error("Failed to fetch covers");

    const covers = await res.json();

    return covers.data;
  } catch (error) {
    console.error("Error fetching covers:", error);

    return [];
  }
}

/**
 @desc Create New Cover 
*/
export async function createCover(prevState: any, formData: FormData) {
  try {
    const res = await fetch(`${process.env.API_URI}/covers`, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (!res.ok) throw new Error("فشل في إضافة الغلاف!");

    revalidatePath("/admin/manage-covers");

    return { success: true, message: "تم إضافة الغلاف بنجاح!" };
  } catch (error) {
    console.error("Error creating brand:", error);
    return { success: false, message: "حدث خطأ أثناء إضافة الغلاف!" };
  }
}

/**
 @desc Update Existing Cover
*/
export async function updateCover(coverId: string, formData: FormData) {
  try {
    const res = await fetch(`${process.env.API_URI}/covers/${coverId}`, {
      method: "PUT", // استخدام PUT بدلاً من POST
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (!res.ok) throw new Error("فشل في تعديل الغلاف!");

    revalidatePath("/admin/manage-covers"); // تحديث البيانات في الواجهة

    return { success: true, message: "تم تعديل الغلاف بنجاح!" };
  } catch (error) {
    console.error("Error updating cover:", error);
    return { success: false, message: "حدث خطأ أثناء تعديل الغلاف!" };
  }
}

/**
 @desc Delete Cover
*/
export async function deleteCover(coverId: string) {
  try {
    const res = await fetch(`${process.env.API_URI}/covers/${coverId}`, {
      method: "DELETE",
      headers: { Accept: "application/json" },
    });

    if (!res.ok) throw new Error("فشل في حذف الغلاف!");

    revalidatePath("/admin/manage-covers");

    return { success: true, message: "تم حذف الغلاف بنجاح!" };
  } catch (error) {
    console.error("Error deleting cover:", error);
    return { success: false, message: "حدث خطأ أثناء حذف الغلاف!" };
  }
}
