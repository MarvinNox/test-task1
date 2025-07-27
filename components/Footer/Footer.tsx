import css from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.footerContainer}>
        <p>&#169; 2025 Mini Blog.</p>
        <p>
          Contact me: &nbsp;
          <a className="footerLink" href="mailto:sinedtex@gmail.com">
            sinedtex@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
}
