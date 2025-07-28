import "server-only";

const dictionaries = {
  en: () => import("../dictionaries/en.json").then((m) => m.default),
  uk: () => import("../dictionaries/uk.json").then((m) => m.default),
};

export async function getDictionary(locale: "en" | "uk") {
  if (!dictionaries[locale]) throw new Error(`Unsupported locale: ${locale}`);
  return dictionaries[locale]();
}
