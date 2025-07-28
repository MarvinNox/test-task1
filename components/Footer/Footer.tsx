import { getDictionary } from "@/lib/getDictionary";
import css from "./Footer.module.css";

export default async function Footer({
  params,
}: {
  params: Promise<{ locale: "en" | "uk" }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <footer className={css.footer}>
      <div className={css.footerContainer}>
        <p>&#169; 2025 Mini Blog.</p>
        <p>
          {dict.footer.contacts} &nbsp;
          <a className="footerLink" href="mailto:sinedtex@gmail.com">
            sinedtex@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
}
