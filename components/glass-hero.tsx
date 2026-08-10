"use client";

import { useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";

const DESKTOP_RADIUS = 235;
const MOBILE_RADIUS = 150;
const LERP_POS = 0.14;
const LERP_RAD = 0.12;

export default function GlassHero() {
  const frameRef = useRef<HTMLDivElement>(null);

  const rawX = useRef(-999);
  const rawY = useRef(-999);
  const smoothX = useRef(-999);
  const smoothY = useRef(-999);
  const currentRadius = useRef(0);
  const targetRadius = useRef(0);
  const isTouching = useRef(false);
  const frameId = useRef(0);
  const reducedMotion = useRef(false);

  const tick = useCallback(() => {
    const el = frameRef.current;
    if (!el) {
      frameId.current = requestAnimationFrame(tick);
      return;
    }

    const pFactor = reducedMotion.current ? 1 : LERP_POS;
    const rFactor = reducedMotion.current ? 1 : LERP_RAD;

    smoothX.current += (rawX.current - smoothX.current) * pFactor;
    smoothY.current += (rawY.current - smoothY.current) * pFactor;
    currentRadius.current +=
      (targetRadius.current - currentRadius.current) * rFactor;

    el.style.setProperty("--reveal-x", `${smoothX.current}px`);
    el.style.setProperty("--reveal-y", `${smoothY.current}px`);
    el.style.setProperty("--reveal-radius", `${currentRadius.current}px`);

    frameId.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotion.current = mq.matches;
    const handleMQ = (e: MediaQueryListEvent) => {
      reducedMotion.current = e.matches;
    };
    mq.addEventListener("change", handleMQ);

    frameId.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frameId.current);
      mq.removeEventListener("change", handleMQ);
    };
  }, [tick]);

  const onPointerEnter = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "mouse") {
      const rect = frameRef.current?.getBoundingClientRect();
      if (!rect) return;
      rawX.current = e.clientX - rect.left;
      rawY.current = e.clientY - rect.top;
      smoothX.current = rawX.current;
      smoothY.current = rawY.current;
      targetRadius.current = DESKTOP_RADIUS;
    }
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const rect = frameRef.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.current = e.clientX - rect.left;
    rawY.current = e.clientY - rect.top;

    if (e.pointerType === "touch") {
      if (!isTouching.current) {
        smoothX.current = rawX.current;
        smoothY.current = rawY.current;
        isTouching.current = true;
      }
      targetRadius.current = MOBILE_RADIUS;
    } else {
      targetRadius.current = DESKTOP_RADIUS;
    }
  }, []);

  const onPointerLeave = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "mouse") {
      targetRadius.current = 0;
    }
  }, []);

  const onTouchEnd = useCallback(() => {
    isTouching.current = false;
    targetRadius.current = 0;
  }, []);

  return (
    <>
      <Navbar />
      <section className="hero-wrapper">
        <div className="hero-container">
          {/* Left Column (Text & Actions) */}
          <div className="hero-left">
            <h1 className="hero__heading">
              Python Full Stack <br />
              <span className="hero__heading-highlight">Developer</span>
            </h1>

            <p className="hero__subtitle">
              AI &amp; Software Developer
            </p>

            <p className="hero__body">
              Building scalable web applications, AI-powered solutions, and modern software with precision and clean architecture.
            </p>

            <div className="hero__actions">
              <Link href="/projects" className="btn-primary">
                <span>View Portfolio</span>
                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>

              <a
                href="/Vishal_Bhavar_Resume.pdf"
                download="Vishal_Bhavar_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                <span>Download Resume</span>
                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column (Portrait Frame) */}
          <div className="hero-right">
            <div
              ref={frameRef}
              className="portrait-frame hero"
              style={
                {
                  "--reveal-x": "-999px",
                  "--reveal-y": "-999px",
                  "--reveal-radius": "0px",
                } as React.CSSProperties
              }
              onPointerEnter={onPointerEnter}
              onPointerMove={onPointerMove}
              onPointerLeave={onPointerLeave}
              onTouchEnd={onTouchEnd}
            >
              {/* Layer 1: Base portrait */}
              <div className="hero__base" aria-hidden="true" />

              {/* Layer 2: Reveal portrait (masked) */}
              <div className="hero__reveal" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
