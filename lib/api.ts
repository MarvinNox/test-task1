import type { Post } from "@/types/post";

export interface FetchPostsHTTPResponse {
  posts: Post[];
}
export async function fetchPosts(page = 1): Promise<Post[]> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=20&_page=${page}`
  );
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

export async function fetchPostById(id: number): Promise<Post> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) throw new Error("Failed to fetch post");
  return res.json();
}
