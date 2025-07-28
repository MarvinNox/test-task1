import { getDictionary } from "@/lib/getDictionary";

export default async function about({
  params,
}: {
  params: Promise<{ locale: "en" | "uk" }>;
}) {
  const { locale } = await params;

  const dict = await getDictionary(locale);
  return (
    <div>
      <h1>{dict.about.title}</h1>
      <p>{dict.about.body}</p>
    </div>
  );
}
