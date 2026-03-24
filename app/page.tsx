import Link from "next/link";

const features = [
  {
    title: "Campaign Management",
    description:
      "Plan, launch, and track all your marketing campaigns from a single, unified dashboard.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Asset Library",
    description:
      "Store, organise, and share marketing assets — images, videos, copy, and more — with your whole team.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Team Collaboration",
    description:
      "Comment, assign tasks, and keep everyone aligned with real-time collaboration tools built for marketers.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Analytics & Insights",
    description:
      "Measure what matters. Get actionable insights on campaign performance and audience engagement.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Content Calendar",
    description:
      "Never miss a deadline. Schedule and visualise your content pipeline with an intuitive drag-and-drop calendar.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Integrations",
    description:
      "Connect to the tools you already love — Slack, HubSpot, Salesforce, Google Analytics, and dozens more.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    quote:
      "MediaHub transformed how our team collaborates. We cut campaign setup time by 60% in the first month alone.",
    author: "Sarah Chen",
    role: "Head of Marketing, Apex Corp",
  },
  {
    quote:
      "Finally, one place for every asset, every campaign, every conversation. Our team can't imagine working without it.",
    author: "James Okafor",
    role: "CMO, Bright Digital",
  },
  {
    quote:
      "The analytics dashboard alone is worth it. We now make data-driven decisions faster than ever before.",
    author: "Maria Lopez",
    role: "Marketing Director, Wavefront",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block bg-indigo-100 text-indigo-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            🚀 Now live on Netlify
          </span>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
            Your Marketing Team&apos;s
            <span className="text-indigo-600"> New Command Centre</span>
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            MediaHub brings campaigns, assets, analytics, and collaboration into one
            beautifully simple platform. Built for modern marketing teams.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
            >
              Get Started Free
            </Link>
            <Link
              href="/about"
              className="border border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-indigo-400 hover:text-indigo-600 transition-colors"
            >
              Learn More
            </Link>
          </div>
          <p className="mt-4 text-sm text-gray-400">No credit card required · Free 14-day trial</p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900">Everything your team needs</h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
              From first idea to final publish, MediaHub has every tool to keep your marketing
              machine running smoothly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-2xl border border-gray-100 hover:border-indigo-200 hover:shadow-md transition-all group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100 transition-colors mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-gray-500 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-14">
            Loved by marketing teams
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.author}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
              >
                <p className="text-gray-600 italic leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6">
                  <p className="font-semibold text-gray-900">{t.author}</p>
                  <p className="text-sm text-gray-400">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-4 bg-indigo-600 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold">Ready to supercharge your marketing?</h2>
          <p className="mt-4 text-lg text-indigo-100">
            Join hundreds of marketing teams already using MediaHub. Start your free trial today.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-50 transition-colors shadow-lg"
          >
            Start Your Free Trial
          </Link>
        </div>
      </section>
    </>
  );
}
