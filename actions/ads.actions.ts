"use server";

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
