"use client";
import { useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import { fetchPostById } from "@/lib/api";
import css from "./PostDetails.module.css";

export default function PostDetailsClient() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const { data } = useQuery({
    queryKey: ["post", id],
    queryFn: () => fetchPostById(+id),
    refetchOnMount: false,
  });
  return (
    <div className={css.postContainer}>
      <div className={css.postItem}>
        <h2>{data?.title}</h2>
        <p>{data?.body}</p>
        <button
          type="button"
          onClick={() => router.push("/")}
          className={css.postButton}
        >
          <span className={css.postButton_top}>Go Back</span>
        </button>
      </div>
    </div>
  );
}
