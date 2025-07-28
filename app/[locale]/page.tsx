import { fetchPosts } from "@/lib/api";
import css from "./page.module.css";
import Link from "next/link";
import { getDictionary } from "@/lib/getDictionary";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: "en" | "uk" }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const resp = await fetchPosts();

  return (
    <div>
      <ul className={css.postsContainer}>
        {resp.map((post) => {
          return (
            <li key={post.id} className={css.postsItem}>
              <h2 className={css.postTitle}>{post.title}</h2>
              <Link
                href={`${locale}/posts/${post.id}`}
                className={css.postButton}
              >
                <span className={css.postButton_top}>{dict.button.more}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
