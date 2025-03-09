"use server";

/**
 @desc Get Users Count 
*/
export async function getUsersCount() {
  try {
    const url = new URL(`${process.env.API_URI}/users/count`);

    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) throw new Error("Failed to fetch users");

    const users = await res.json();

    return users;
  } catch (error) {
    console.error("Error fetching users:", error);

    return [];
  }
}

/**
 @desc Get Users Data
*/
export async function getUsers({ page = 1, limit = 10 }) {
  try {
    const url = new URL(`${process.env.API_URI}/users`);

    url.searchParams.append("page", String(page));
    url.searchParams.append("limit", String(limit));

    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) throw new Error("Failed to fetch users");

    const users = await res.json();

    return users.data;
  } catch (error) {
    console.error("Error fetching users:", error);

    return [];
  }
}
