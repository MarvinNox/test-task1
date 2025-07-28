import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from "@tanstack/react-query";
import { fetchPostById, fetchPosts } from "@/lib/api";
import PostDetailsClient from "./PostDetails.client";
import { Post } from "@/types/post";
import { getDictionary } from "@/lib/getDictionary";

type Props = {
  params: Promise<{ locale: "en" | "uk"; id: string }>;
};

const PageDetails = async ({ params }: Props) => {
  const { id, locale } = await params;
  const dict = await getDictionary(locale);

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["post", id],
    queryFn: () => fetchPostById(+id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PostDetailsClient dict={dict} />
    </HydrationBoundary>
  );
};

export const dynamicParams = false;

export async function generateStaticParams() {
  const res = await fetchPosts();
  const locales = ["en", "uk"];

  return locales.flatMap((locale) =>
    res.map((post: Post) => ({
      locale,
      id: post.id.toString(),
    }))
  );
}

export default PageDetails;
