import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — MediaHub",
  description:
    "Learn about MediaHub and the team behind the all-in-one marketing platform built for modern teams.",
};

const values = [
  {
    title: "Transparency",
    description:
      "We believe great marketing starts with honest communication — inside your team and with your audience.",
  },
  {
    title: "Simplicity",
    description:
      "Powerful features shouldn't mean complicated workflows. We obsess over keeping things intuitive.",
  },
  {
    title: "Collaboration",
    description:
      "The best ideas come from teams working together. We design every feature with collaboration at its core.",
  },
  {
    title: "Results",
    description:
      "Everything we build is measured by one thing: does it help your marketing perform better?",
  },
];

const team = [
  { name: "Alex Rivera", role: "Co-Founder & CEO" },
  { name: "Jordan Kim", role: "Co-Founder & CTO" },
  { name: "Priya Patel", role: "Head of Product" },
  { name: "Marcus Williams", role: "Head of Design" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight">
            We&apos;re on a mission to make{" "}
            <span className="text-indigo-600">marketing simpler</span>
          </h1>
          <p className="mt-6 text-xl text-gray-600 leading-relaxed">
            MediaHub was born out of frustration with fragmented tools, missed deadlines, and
            siloed teams. We set out to build the platform we always wished existed.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="space-y-5 text-gray-600 leading-relaxed text-lg">
            <p>
              Founded in 2023, MediaHub started as an internal tool built by a small marketing
              team tired of juggling spreadsheets, Slack threads, and half a dozen disconnected
              apps. Within weeks, the tool had spread to other teams inside the company —
              because it just worked.
            </p>
            <p>
              We spun it out as a standalone product and launched publicly in early 2024. Today,
              MediaHub is trusted by hundreds of marketing teams around the world, from scrappy
              start-ups to enterprise brands.
            </p>
            <p>
              Our team is fully remote, async-first, and deeply passionate about helping
              marketers do their best work. We ship fast, listen to our customers, and never
              stop improving the product.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-14">What we stand for</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <h3 className="text-xl font-semibold text-indigo-600 mb-3">{v.title}</h3>
                <p className="text-gray-600 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-14">Meet the team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-20 h-20 rounded-full bg-indigo-100 flex items-center justify-center mx-auto mb-4">
                  <span className="text-indigo-600 font-bold text-2xl">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <p className="font-semibold text-gray-900">{member.name}</p>
                <p className="text-sm text-gray-500 mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-indigo-600 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold">Join us on our mission</h2>
          <p className="mt-4 text-indigo-100">
            Whether you&apos;re a marketer looking for a better way to work, or someone who wants to
            build with us — we&apos;d love to hear from you.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-50 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
