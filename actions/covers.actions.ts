"use server";

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
