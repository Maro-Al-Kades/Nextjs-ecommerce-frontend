"use server";

export async function getLogo({ page = 1, limit = 10 }) {
  try {
    const url = new URL(`${process.env.API_URI}/logo`);

    url.searchParams.append("page", String(page));
    url.searchParams.append("limit", String(limit));

    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) throw new Error("Failed to fetch logo");

    const logo = await res.json();

    return logo.data;
  } catch (error) {
    console.error("Error fetching logo:", error);

    return [];
  }
}
