import { fetchPosts } from "@/lib/api";
import css from "./page.module.css";
import Link from "next/link";
import { getDictionary } from "@/lib/getDictionary";
import { notFound } from "next/navigation";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: "en" | "uk" }>;
}) {
  const { locale } = await params;
  let dict;
  let resp;
  try {
    dict = await getDictionary(locale);
    resp = await fetchPosts();
    if (!resp || resp.length === 0) notFound();
  } catch (error) {
    console.log(error);
    throw new Error("Cant fetch posts.");
  }

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
