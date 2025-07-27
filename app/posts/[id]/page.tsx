import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from "@tanstack/react-query";
import { fetchPostById } from "@/lib/api";
import PostDetailsClient from "./PostDetails.client";

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
export default PageDetails;
