import { fetchPosts } from "@/lib/api";
import css from "./page.module.css";
import Link from "next/link";

export default async function Home() {
  const resp = await fetchPosts();

  return (
    <div>
      <ul className={css.postsContainer}>
        {resp.map((post) => {
          return (
            <li key={post.id} className={css.postsItem}>
              <h2 className={css.postTitle}>{post.title}</h2>
              <Link href={`/posts/${post.id}`} className={css.postButton}>
                <span className={css.postButton_top}>See More</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
