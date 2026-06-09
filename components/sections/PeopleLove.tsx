"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

const BUBBLES = [
  { size: 96, top: "8%", left: "44%", from: "#0d0d12", to: "#222", delay: 0 },
  { size: 64, top: "0%", left: "70%", from: "#3a5", to: "#173", delay: 0.4 },
  { size: 58, top: "40%", left: "20%", from: "#f6a6c1", to: "#c46f9b", delay: 0.8 },
  { size: 70, top: "44%", left: "78%", from: "#3aa0ff", to: "#1746b0", delay: 0.2 },
  { size: 48, top: "62%", left: "58%", from: "#ffd29a", to: "#e08a4f", delay: 0.6 },
];

const COLS = [
  {
    title: "“Meeting with Orizon was our favorite part of the week!”",
    body: "We do hear that a lot. And we can't wait to make you feel the same way.",
  },
  {
    title: "4.9 ★ That's what we call a stellar reputation",
    body: "No one's perfect and that's okay. With 400+ projects under our belt, we've worked with incredible teams and built fantastic relationships.",
  },
  {
    title: "Committed to putting a smile on people's faces",
    body: "This is our mission. We put our all into every project because knowing we've made a positive impact is the best feeling in the world.",
  },
];

export function PeopleLove() {
  return (
    <section className="container-x py-12 lg:py-16">
      <Reveal>
        <div className="overflow-hidden rounded-card-lg bg-[linear-gradient(135deg,#1d6f78,#16585f)] p-8 text-white sm:p-12 lg:p-16">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <h2 className="max-w-sm text-4xl font-bold text-white sm:text-5xl">
              People love working with us
            </h2>
            <div className="relative h-48 w-full sm:h-56" aria-hidden="true">
              {BUBBLES.map((b, i) => (
                <motion.span
                  key={i}
                  className="absolute rounded-full shadow-lg"
                  style={{
                    width: b.size,
                    height: b.size,
                    top: b.top,
                    left: b.left,
                    backgroundImage: `linear-gradient(160deg,${b.from},${b.to})`,
                  }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: b.delay,
                  }}
                />
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-10 border-t border-white/15 pt-10 lg:grid-cols-3">
            {COLS.map((c) => (
              <div key={c.title}>
                <h3 className="text-lg font-bold leading-snug text-white">
                  {c.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/70">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
