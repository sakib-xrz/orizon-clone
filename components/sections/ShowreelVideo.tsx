"use client";

import { useCallback, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const POSTER =
  "https://cdn.prod.website-files.com/5d27763c46ba9e561dc5b972/66d846fd37b73ccec033efaa_ezgif-frame-001.webp";

const VIDEO_SRC =
  "https://dl.dropboxusercontent.com/scl/fi/b2a4ezw5fhjout10inue2/Orizon-Showreel-Final-1080p-1.mp4?rlkey=7rbodj2f1ibcw4580uq345dbu&st=3wg9drkv&dl=0";

export function ShowreelVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const mainVideoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  const maskScale = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const handlePlay = useCallback(() => {
    const video = mainVideoRef.current;
    if (!video) return;

    setIsPlaying(true);
    video.muted = false;
    video.loop = false;
    video.currentTime = 0;
    void video.play();
  }, []);

  return (
    <section className="relative z-10 pb-12 md:pb-20">
      <div ref={containerRef} className="mx-auto w-full max-w-[1440px] px-5">
        <div className="relative aspect-video overflow-hidden rounded-[20px] bg-ink">
          <video
            ref={mainVideoRef}
            className="h-[102%] w-full -translate-y-[1%] scale-[1.03] object-cover"
            poster={POSTER}
            playsInline
            preload="true"
            onEnded={() => setIsPlaying(false)}
          >
            <source src={VIDEO_SRC} type="video/mp4" />
          </video>

          {!isPlaying && (
            <button
              type="button"
              onClick={handlePlay}
              aria-label="Play MaxVerse showreel"
              className="absolute inset-0 z-[2] cursor-pointer border-0 bg-transparent p-0"
            >
              <video
                className="pointer-events-none h-[102%] w-full -translate-y-[1%] scale-[1.03] object-cover"
                poster={POSTER}
                autoPlay
                loop
                muted
                playsInline
                preload="true"
              >
                <source src={VIDEO_SRC} type="video/mp4" />
              </video>
            </button>
          )}

          {/* <motion.div
            aria-hidden
            className="pointer-events-none absolute -bottom-[10%] -left-[5%] z-[3] h-[150%] w-[110%] origin-bottom bg-white"
            style={{ scaleY: maskScale }}
          /> */}
        </div>
      </div>
    </section>
  );
}
