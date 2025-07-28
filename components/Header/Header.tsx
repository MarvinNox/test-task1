import Link from "next/link";
import css from "./Header.module.css";
import { getDictionary } from "@/lib/getDictionary";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

export default async function Header({
  params,
}: {
  params: Promise<{ locale: "en" | "uk" }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <header className={css.header}>
      <Link href="/" className={css.headerLogo}>
        MiniBlog
      </Link>
      <nav aria-label="Main Navigation" className={css.headerList}>
        <Link href={`/${locale}`} className={css.headerLink} aria-label="Home">
          {dict.header.home}
        </Link>
        <Link
          href={`/${locale}/about`}
          className={css.headerLink}
          aria-label="About"
        >
          {dict.header.about}
        </Link>
      </nav>
      <LanguageSwitcher />
    </header>
  );
}
