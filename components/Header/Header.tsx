import Link from "next/link";
import css from "./Header.module.css";

export default function Header() {
  return (
    <header className={css.header}>
      <nav aria-label="Main Navigation" className={css.headerList}>
        <Link href="/" className={css.headerLink} aria-label="Home">
          Home
        </Link>
        <Link href="/about" className={css.headerLink} aria-label="About">
          About
        </Link>
      </nav>
    </header>
  );
}
