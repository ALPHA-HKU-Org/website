
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Us - Alpha HKU",
  description: "Become a member of the Alpha Chapter at the University of Hong Kong.",
  openGraph: {
    title: "Join Us - Alpha HKU",
    description: "Become a member of the Alpha Chapter at the University of Hong Kong.",
  },
};

export default function JoinUsPage() {
  return (
    <main className="container py-12">
      <h1 className="text-4xl font-bold">Join Us</h1>
      <p className="mt-4 text-lg">
        We are excited to have you join our community. Please fill out the form below to get started.
      </p>
      {/* Placeholder for a form */}
    </main>
  );
}
