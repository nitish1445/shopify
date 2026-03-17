import React from "react";
import { FiArrowRight, FiCheckCircle, FiTruck, FiShield } from "react-icons/fi";

const Home = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden">
        <div className="absolute -left-16 top-8 h-52 w-52 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute right-0 top-24 h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl" />

        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 pb-20 pt-14 md:grid-cols-2 md:px-10 md:pt-20">
          <div className="space-y-6">
            <span className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-1 text-xs font-semibold tracking-wider text-cyan-200 uppercase">
              New Season Collection
            </span>

            <h1 className="text-4xl leading-tight font-black md:text-6xl">
              Build your style story with premium picks.
            </h1>

            <p className="max-w-xl text-base text-slate-300 md:text-lg">
              Explore handpicked fashion, lifestyle, and essentials designed for
              modern living. Clean quality, bold personality, and all-day
              comfort in one store.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button className="flex items-center gap-2 rounded-full bg-linear-to-r from-cyan-400 to-emerald-400 px-6 py-3 text-sm font-bold text-slate-950 transition hover:brightness-110">
                Shop New Arrivals <FiArrowRight size={16} />
              </button>
              <button className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200">
                View Catalog
              </button>
            </div>

            <div className="grid max-w-xl gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-extrabold text-cyan-300">120K+</p>
                <p className="text-xs text-slate-300">Happy Customers</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-extrabold text-emerald-300">500+</p>
                <p className="text-xs text-slate-300">Curated Brands</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-extrabold text-fuchsia-300">4.9</p>
                <p className="text-xs text-slate-300">Average Rating</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-4 -top-4 rounded-2xl bg-emerald-400 px-4 py-2 text-xs font-extrabold text-slate-950 shadow-xl shadow-emerald-500/30">
              35% OFF TODAY
            </div>
            <div className="rounded-3xl border border-white/10 bg-linear-to-b from-slate-900 to-slate-800 p-6 shadow-2xl">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-900 p-4">
                  <p className="text-sm text-slate-300">Trending Product</p>
                  <p className="mt-2 text-lg font-bold">Urban Flex Jacket</p>
                  <p className="mt-1 text-cyan-300">$89.00</p>
                </div>
                <div className="rounded-2xl bg-slate-900 p-4">
                  <p className="text-sm text-slate-300">Limited Edition</p>
                  <p className="mt-2 text-lg font-bold">Street Runner Set</p>
                  <p className="mt-1 text-emerald-300">$129.00</p>
                </div>
              </div>

              <div className="mt-5 space-y-3 rounded-2xl bg-slate-900 p-4">
                <div className="flex items-center gap-2 text-sm text-slate-200">
                  <FiCheckCircle className="text-cyan-300" />
                  Fresh arrivals every week
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-200">
                  <FiTruck className="text-emerald-300" />
                  Free shipping for orders over $99
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-200">
                  <FiShield className="text-fuchsia-300" />
                  Secure checkout and easy returns
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;