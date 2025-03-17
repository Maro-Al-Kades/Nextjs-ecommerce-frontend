"use server";

import { revalidatePath } from "next/cache";

/**
 @desc Get Ads Count 
*/
export async function getAdsCount() {
  try {
    const url = new URL(`${process.env.API_URI}/ads/count`);

    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) throw new Error("Failed to fetch ads");

    const ads = await res.json();

    return ads;
  } catch (error) {
    console.error("Error fetching ads:", error);

    return [];
  }
}

export async function getAds({ page = 1, limit = 10 }) {
  try {
    const url = new URL(`${process.env.API_URI}/ads`);

    url.searchParams.append("page", String(page));
    url.searchParams.append("limit", String(limit));

    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) throw new Error("Failed to fetch ads");

    const ads = await res.json();

    return ads.data;
  } catch (error) {
    console.error("Error fetching ads:", error);

    return [];
  }
}

/**
 @desc Create New Brand 
*/
export async function createAd(prevState: any, formData: FormData) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/ads`, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (!res.ok) throw new Error("فشل في إضافة الاعلان!");

    revalidatePath("/admin/manage-ads");

    return { success: true, message: "تم إضافة الاعلان بنجاح!" };
  } catch (error) {
    console.error("Error creating brand:", error);
    return { success: false, message: "حدث خطأ أثناء إضافة الاعلان!" };
  }
}
