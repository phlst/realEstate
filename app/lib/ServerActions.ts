"use server";

import { client } from "./sanityClient";

export async function getAll(): Promise<Apartment[]> {
  try {
    const POSTS_QUERY = `*[_type == "apartment"]`;
    const posts = await client.fetch(POSTS_QUERY);

    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw new Error("Failed to fetch posts");
  }
}

export async function getById(id: string): Promise<Apartment> {
  try {
    const query = `*[_type == "apartment" && _id == $id][0]`;
    const params = { id };

    const apartment = await client.fetch(query, params);

    if (!apartment) {
      throw new Error(`Apartment with ID ${id} not found`);
    }

    return apartment;
  } catch (error) {
    console.error(`Error fetching apartment with ID ${id}:`, error);
    throw new Error(`Failed to fetch apartment with ID ${id}`);
  }
}
