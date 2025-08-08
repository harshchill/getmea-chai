import React from "react";
import Link from "next/link";
import connectDB from "@/db/connectDb";
import { User } from "@/models/user";
import payment from "@/models/payment";
import SpotlightCard from "@/components/SpotlightCard";

const formatINR = (paise = 0) => {
  const rupees = (paise || 0) / 100;
  try {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    }).format(rupees);
  } catch {
    return `₹${rupees.toFixed(2)}`;
  }
};

export default async function ExplorePage() {
  await connectDB();

  // Aggregate total raised per user (only completed payments)
  const totals = await payment.aggregate([
    { $match: { done: true } },
    { $group: { _id: "$to_user", totalAmount: { $sum: "$amount" }, count: { $sum: 1 } } },
  ]);

  const usernameToTotals = new Map(
    totals.map((t) => [t._id, { totalAmount: t.totalAmount || 0, count: t.count || 0 }])
  );

  // Fetch users
  const users = await User.find({}, "username name profilepic coverpic").lean();

  // Build display list
  const creators = users
    .map((u) => {
      const stats = usernameToTotals.get(u.username) || { totalAmount: 0, count: 0 };
      return {
        username: u.username,
        name: u.name || u.username,
        profilepic: u.profilepic || "/profile.gif",
        totalAmount: stats.totalAmount,
        count: stats.count,
      };
    })
    .sort((a, b) => b.totalAmount - a.totalAmount);

  return (
    <main className="text-white">
      <section className="container mx-auto px-4 md:px-8 mt-20">
        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold">Explore creators</h1>
          <p className="text-slate-300">Discover and support amazing creators—one chai at a time.</p>
        </div>

        <div className="mt-10 mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          {creators.length === 0 && (
            <div className="text-slate-400">No creators yet. Be the first to set up your page!</div>
          )}

          {creators.map((c) => (
            <SpotlightCard key={c.username} className="w-full h-full max-w-sm flex flex-col items-center text-center gap-4" spotlightColor="rgba(0, 229, 255, 0.2)">
              <img
                src={c.profilepic}
                alt={`${c.name} avatar`}
                className="w-24 h-24 object-cover rounded-full ring-2 ring-slate-600"
              />
              <div className="space-y-1">
                <div className="text-lg font-semibold">@{c.username}</div>
                <div className="text-slate-400 text-sm">Total Raised: <span className="text-white font-semibold">{formatINR(c.totalAmount)}</span></div>
                {c.count > 0 && (
                  <div className="text-slate-500 text-xs">{c.count} {c.count === 1 ? "support" : "supports"}</div>
                )}
              </div>
              <div className="mt-2">
                <Link href={`/${c.username}`}>
                  <button className="group relative h-10 overflow-hidden rounded-md bg-slate-900 px-4 py-1 text-neutral-50 border border-slate-700">
                    <span className="relative z-10 font-semibold">View page</span>
                    <span className="absolute inset-0 overflow-hidden rounded-md">
                      <span className="absolute left-0 aspect-square w-full origin-center translate-x-full rounded-full bg-emerald-400 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                    </span>
                  </button>
                </Link>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </section>
    </main>
  );
}


