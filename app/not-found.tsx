import { Metadata } from "next";
import NotFound from "@/components/NotFound/NotFound";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFoundPage() {
  return <NotFound />;
}
