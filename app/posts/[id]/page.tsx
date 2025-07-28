import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from "@tanstack/react-query";
import { fetchPostById, fetchPosts } from "@/lib/api";
import PostDetailsClient from "./PostDetails.client";
import { Post } from "@/types/post";

type Props = {
  params: Promise<{ id: string }>;
};

const PageDetails = async ({ params }: Props) => {
  const { id } = await params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["post", id],
    queryFn: () => fetchPostById(+id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PostDetailsClient />
    </HydrationBoundary>
  );
};
export const dynamicParams = false;
export async function generateStaticParams() {
  const res = await fetchPosts();
  return res.map((post: Post) => ({ id: post.id.toString() }));
}

export default PageDetails;
