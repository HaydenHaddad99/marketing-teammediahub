import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — MediaHub",
  description: "Get in touch with the MediaHub team. We're here to help.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

