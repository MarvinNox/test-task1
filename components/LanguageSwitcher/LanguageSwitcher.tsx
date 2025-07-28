"use client";

import { useRouter, usePathname } from "next/navigation";
import css from "./LanguageSwitcher.module.css";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const currentLocale = pathname.split("/")[1] as "uk" | "en";

  const switchLocale = (locale: "uk" | "en") => {
    const segments = pathname.split("/");
    segments[1] = locale;
    const newPath = segments.join("/") || "/";
    router.replace(newPath);
  };

  return (
    <div>
      {currentLocale === "en" && (
        <button
          className={css.langSwitcherButtn}
          onClick={() => switchLocale("uk")}
        >
          🇺🇦 Українська
        </button>
      )}
      {currentLocale === "uk" && (
        <button
          className={css.langSwitcherButtn}
          onClick={() => switchLocale("en")}
        >
          🇬🇧 English
        </button>
      )}
    </div>
  );
}
