import { getDictionary } from "@/lib/getDictionary";
import css from "./page.module.css";

export default async function about({
  params,
}: {
  params: Promise<{ locale: "en" | "uk" }>;
}) {
  const { locale } = await params;

  const dict = await getDictionary(locale);
  return (
    <div className={css.aboutContainer}>
      <h1 className={css.aboutTitle}>{dict.about.title}</h1>
      <p className={css.aboutBody}>{dict.about.body}</p>
    </div>
  );
}
