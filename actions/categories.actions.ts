"use server";

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
