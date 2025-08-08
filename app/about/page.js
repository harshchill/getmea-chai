import React from 'react';
import Link from 'next/link';
import BlurText from '@/components/BlurText';
import SpotlightCard from '@/components/SpotlightCard';

const About = () => {
  return (
    <main className="text-white">
      {/* Hero */}
      <section className="container mx-auto px-4 md:px-8 mt-20">
        <div className="flex flex-col  md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 space-y-4">
            <BlurText
              text="About Get Me a Chai"
              delay={200}
              animateBy="words"
              direction="top"
              className="text-4xl md:text-5xl font-bold"
            />
            <p className="text-slate-300 max-w-2xl">
              A modern, lightweight platform where fans fuel creators—one cup of chai at a time.
              Simple pages, secure payments, and a delightful supporter experience.
            </p>
            <div className="flex gap-3 mt-4">
              <Link href="/login">
                <button className="group relative z-0 h-11 overflow-hidden rounded-md bg-slate-900 px-4 py-1 text-neutral-50">
                  <span className="relative z-10 font-semibold">Get started</span>
                  <span className="absolute inset-0 overflow-hidden rounded-md">
                    <span className="absolute left-0 aspect-square w-full origin-center translate-x-full rounded-full bg-emerald-400 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                  </span>
                </button>
              </Link>
              <Link href="/">
                <button className="group h-11 overflow-hidden rounded-md bg-slate-800 px-4 py-1 text-neutral-100 border border-slate-600">
                  <span className="relative z-10 font-semibold">Back to Home</span>
                </button>
              </Link>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <img src="/tea.gif" alt="Chai" className="w-52 md:w-64 invert" />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="container mx-auto px-4 md:px-8 mt-16">
        <h2 className="text-2xl font-semibold mb-6">How it works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <SpotlightCard className="h-full" spotlightColor="rgba(0, 229, 255, 0.2)">
            <div className="flex flex-col items-center text-center gap-3">
              <img src="/profile.gif" alt="Create" className="w-20 invert" />
              <div className="text-lg font-semibold">Create your page</div>
              <p className="text-slate-300 text-sm max-w-xs">Set your username, add a profile and cover, and connect Razorpay—done in minutes.</p>
            </div>
          </SpotlightCard>
          <SpotlightCard className="h-full" spotlightColor="rgba(0, 229, 255, 0.2)">
            <div className="flex flex-col items-center text-center gap-3">
              <img src="/connect.gif" alt="Share" className="w-20 invert" />
              <div className="text-lg font-semibold">Share your link</div>
              <p className="text-slate-300 text-sm max-w-xs">Post your page anywhere—fans can support you without login friction.</p>
            </div>
          </SpotlightCard>
          <SpotlightCard className="h-full" spotlightColor="rgba(0, 229, 255, 0.2)">
            <div className="flex flex-col items-center text-center gap-3">
              <img src="/fund.gif" alt="Fund" className="w-20 invert" />
              <div className="text-lg font-semibold">Get funded</div>
              <p className="text-slate-300 text-sm max-w-xs">Fast, secure checkout via Razorpay. Every chai helps you create more.</p>
            </div>
          </SpotlightCard>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 md:px-8 mt-16">
        <h2 className="text-2xl font-semibold mb-6">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <SpotlightCard className="h-full" spotlightColor="rgba(0, 229, 255, 0.2)">
            <div className="flex flex-col items-center text-center gap-3">
              <img src="/fans.gif" alt="Fans" className="w-20 invert" />
              <div className="text-lg font-semibold">Fans to backers</div>
              <p className="text-slate-300 text-sm max-w-xs">Turn appreciation into action with one-tap support.</p>
            </div>
          </SpotlightCard>
          <SpotlightCard className="h-full" spotlightColor="rgba(0, 229, 255, 0.2)">
            <div className="flex flex-col items-center text-center gap-3">
              <img src="/dollar.gif" alt="Checkout" className="w-20 invert" />
              <div className="text-lg font-semibold">Instant checkout</div>
              <p className="text-slate-300 text-sm max-w-xs">Seamless Razorpay integration for quick, reliable payments.</p>
            </div>
          </SpotlightCard>
          <SpotlightCard className="h-full" spotlightColor="rgba(0, 229, 255, 0.2)">
            <div className="flex flex-col items-center text-center gap-3">
              <img src="/secured.gif" alt="Secure" className="w-20 invert" />
              <div className="text-lg font-semibold">Secure by design</div>
              <p className="text-slate-300 text-sm max-w-xs">Encrypted payments and server-side verification for peace of mind.</p>
            </div>
          </SpotlightCard>
          <SpotlightCard className="h-full" spotlightColor="rgba(0, 229, 255, 0.2)">
            <div className="flex flex-col items-center text-center gap-3">
              <img src="/monetize.gif" alt="Monetize" className="w-20 invert" />
              <div className="text-lg font-semibold">Monetize with ease</div>
              <p className="text-slate-300 text-sm max-w-xs">No paywalls. No complexity. Just support that works.</p>
            </div>
          </SpotlightCard>
          <SpotlightCard className="h-full" spotlightColor="rgba(0, 229, 255, 0.2)">
            <div className="flex flex-col items-center text-center gap-3">
              <img src="/support.gif" alt="Community" className="w-20 invert" />
              <div className="text-lg font-semibold">Community-first</div>
              <p className="text-slate-300 text-sm max-w-xs">Celebrate every contribution with friendly UI and notifications.</p>
            </div>
          </SpotlightCard>
          <SpotlightCard className="h-full" spotlightColor="rgba(0, 229, 255, 0.2)">
            <div className="flex flex-col items-center text-center gap-3">
              <img src="/coffee.gif" alt="Presets" className="w-20 invert" />
              <div className="text-lg font-semibold">Quick presets</div>
              <p className="text-slate-300 text-sm max-w-xs">One-click chai amounts make it effortless to support.</p>
            </div>
          </SpotlightCard>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="container mx-auto px-4 md:px-8 mt-16 mb-20">
        <h2 className="text-2xl font-semibold mb-6">Tech stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6">
            <h3 className="font-semibold mb-2">Frontend</h3>
            <ul className="list-disc list-inside text-slate-300 space-y-1">
              <li>Next.js 15 (App Router)</li>
              <li>React 19</li>
              <li>Tailwind CSS 4 for styling</li>
              <li>Framer Motion animations (`BlurText`)</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6">
            <h3 className="font-semibold mb-2">Backend & Auth</h3>
            <ul className="list-disc list-inside text-slate-300 space-y-1">
              <li>Next.js Route Handlers under `app/api/*`</li>
              <li>NextAuth (GitHub provider) for authentication</li>
              <li>MongoDB with Mongoose models (`models/user.js`, `models/payment.js`)</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6">
            <h3 className="font-semibold mb-2">Payments</h3>
            <ul className="list-disc list-inside text-slate-300 space-y-1">
              <li>Razorpay Checkout for client-side payments</li>
              <li>Server-side verification in `app/api/razorpay/route.js`</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6">
            <h3 className="font-semibold mb-2">DX & Feedback</h3>
            <ul className="list-disc list-inside text-slate-300 space-y-1">
              <li>React Toastify for success notifications</li>
              <li>Reusable UI like `SpotlightCard` for consistent theming</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
