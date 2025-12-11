import React from "react";

const issues = [
  { title: "Issue 05 — Monsoon 2025", tag: "New" },
  { title: "Issue 04 — Spring 2025" },
  { title: "Issue 03 — Winter 2024" },
];

export default function Magazine() {
  return (
    <div className="w-full flex flex-col gap-6">
      <div className="rounded-2xl p-6 bg-gradient-to-br from-sky-900/30 via-slate-900/30 to-slate-950/40 ring-1 ring-white/10">
        <h3 className="text-xl font-bold">CEF Magazine</h3>
        <p className="text-white/70 mt-1">
          Insights, interviews, and research spotlights from the CEF community.
        </p>
        <div className="mt-4">
          <button className="px-4 py-2 text-sm rounded-full bg-gradient-to-r from-yellow-700 to-brown-500 text-black font-semibold shadow hover:brightness-95">
            Read Latest
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {issues.map((i, idx) => (
          <div
            key={idx}
            className="rounded-xl p-4 bg-white/5 ring-1 ring-white/10 backdrop-blur-md"
          >
            <div className="flex items-center justify-between">
              <h4 className="text-white/90 font-medium">{i.title}</h4>
              {i.tag && (
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-400/20 text-cyan-200 ring-1 ring-cyan-400/30">
                  {i.tag}
                </span>
              )}
            </div>
            <div className="mt-3">
              <a
                href="#"
                className="text-sm text-yellow-700 hover:text-yellow-400 underline underline-offset-4"
              >
                Open
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
