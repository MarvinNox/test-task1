import axios from "axios";
import type { Post } from "@/types/post";

export interface FetchPostsHTTPResponse {
  posts: Post[];
}

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";

export async function fetchPosts(page = 1) {
  const resp = await axios.get<Post[]>("/posts", {
    params: { _limit: 20, _page: page },
  });
  return resp.data;
}

export async function fetchPostById(id: number) {
  const resp = await axios.get<Post>(`/posts/${id}`);
  return resp.data;
}
