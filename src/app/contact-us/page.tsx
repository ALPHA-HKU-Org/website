
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Alpha HKU",
  description: "Get in touch with the Alpha Chapter at the University of Hong Kong.",
  openGraph: {
    title: "Contact Us - Alpha HKU",
    description: "Get in touch with the Alpha Chapter at the University of Hong Kong.",
  },
};

export default function ContactUsPage() {
  return (
    <main className="container py-12">
      <h1 className="text-4xl font-bold">Contact Us</h1>
      <p className="mt-4 text-lg">
        If you have any questions, please don&apos;t hesitate to contact us.
      </p>
      <p className="mt-2">
        Email: <a href="mailto:alphahku1213@gmail.com" className="text-blue-500 hover:underline">alphahku1213@gmail.com</a>
      </p>
    </main>
  );
}
