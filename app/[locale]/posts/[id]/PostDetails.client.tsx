"use client";
import { useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import { fetchPostById } from "@/lib/api";
import css from "./PostDetails.module.css";
import { Dictionary } from "@/types/dict";

type Props = {
  dict: Dictionary;
};

export default function PostDetailsClient({ dict }: Props) {
  const { id } = useParams() as { id: string };
  const router = useRouter();
  const time = 1000 * 60 * 5;
  const { data, isLoading, isError } = useQuery({
    queryKey: ["post", id],
    queryFn: () => fetchPostById(+id),
    refetchOnMount: false,
    staleTime: time,
  });
  if (!id) return <p>Invalid post ID</p>;
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading post</p>;

  return (
    <div className={css.postContainer}>
      <div className={css.postItem}>
        <h2>{data?.title}</h2>
        <p>{data?.body}</p>
        <button
          type="button"
          onClick={() => router.back()}
          className={css.postButton}
        >
          <span className={css.postButton_top}>{dict.button.back}</span>
        </button>
      </div>
    </div>
  );
}
