"use server";

import { client } from "./sanityClient";

export async function getAll() {
  try {
    const POSTS_QUERY = "*";
    const posts = await client.fetch(POSTS_QUERY);
    console.log(posts);
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw new Error("Failed to fetch posts");
  }
}
