"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import CTAWithVerticalMarquee from "@/components/ui/cta-with-text-marquee";
import TiltedCard from "@/components/ui/TiltedCard";

const HalideLanding: React.FC = () => {
  return (
    <>
      <style>{`
        :root {
          --bg: #0a0a0a;
          --silver: #e0e0e0;
          --accent: #ff3c00;
          --grain-opacity: 0.15;
        }

        .halide-body {
          background-color: var(--bg);
          color: var(--silver);
          font-family: 'Syncopate', sans-serif;
          overflow: hidden;
          height: 100vh;
          width: 100vw;
          margin: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .halide-body {
            height: 100vh;
            width: 100vw;
            overflow-x: hidden;
          }
        }

        .halide-grain {
          position: fixed;
          top: 0; left: 0; width: 100%; height: 100%;
          pointer-events: none;
          z-index: 100;
          opacity: var(--grain-opacity);
        }

        .viewport {
          perspective: 2000px;
          width: 100vw; height: 100vh;
          display: flex; align-items: center; justify-content: center;
          overflow: hidden;
        }

        .interface-grid {
          position: fixed;
          inset: 0;
          padding: 4rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto 1fr auto;
          z-index: 10;
          pointer-events: none;
        }

        @media (max-width: 768px) {
          .interface-grid {
            padding: 2rem;
            grid-template-columns: 1fr;
            grid-template-rows: auto auto 1fr auto;
          }
        }

        @media (max-width: 480px) {
          .interface-grid {
            padding: 1rem;
          }
        }

        .hero-title {
          grid-column: 1 / 2;
          grid-row: 2 / 3;
          align-self: center;
          justify-self: flex-start;
          font-size: clamp(2rem, 8vw, 8rem);
          line-height: 0.85;
          letter-spacing: -0.04em;
          text-align: left;
          mix-blend-mode: difference;
        }

        @media (max-width: 768px) {
          .hero-title {
            grid-column: 1 / -1;
            grid-row: 3 / 4;
            font-size: clamp(1.5rem, 6vw, 4rem);
            text-align: center;
            justify-self: center;
          }
        }

        .cta-button {
          pointer-events: auto;
          background: var(--silver);
          color: var(--bg);
          padding: 1rem 2rem;
          text-decoration: none;
          font-weight: 700;
          clip-path: polygon(0 0, 100% 0, 100% 70%, 85% 100%, 0 100%);
          transition: 0.3s;
        }

        .cta-button:hover { background: var(--accent); transform: translateY(-5px); }

        .scroll-hint {
          position: absolute;
          bottom: 2rem; left: 50%;
          width: 1px; height: 60px;
          background: linear-gradient(to bottom, var(--silver), transparent);
          animation: flow 2s infinite ease-in-out;
        }

        @keyframes flow {
          0%, 100% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          51% { transform: scaleY(1); transform-origin: bottom; }
        }
      `}</style>

      <div className="halide-body">
        <svg style={{ position: 'absolute', width: 0, height: 0 }}>
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
        </svg>

        <div className="halide-grain" style={{ filter: 'url(#grain)' }}></div>

        <div className="interface-grid">
          <div style={{ fontWeight: 700 }}>@NV</div>
          <div style={{ textAlign: 'right', fontFamily: 'monospace', color: 'var(--accent)', fontSize: '0.7rem' }}>
            <div>LATITUDE: 34.0522° N</div>
            <div>FOCAL DEPTH: 80MM</div>
          </div>

          <h1 className="hero-title" style={{ fontSize: 'clamp(2rem, 6vw, 6rem)' }}>
            Nandha<br/>&emsp;&emsp;&emsp;Vinayak A P
          </h1>
          
          <CTAWithVerticalMarquee />
          
          <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
          
            <div style={{ fontFamily: 'monospace', fontSize: '0.6rem' }}>
              <p>[ ARCHIVE 2024 ]</p>
              <p>SURFACE TENSION & TOPOGRAPHICAL LIGHT</p>
            </div>
            
            <div
              style={{
                display: 'flex',
                gap: '0.5rem',
                flexWrap: 'wrap',
                position: 'relative',
                zIndex: 200,
              }}
            >
              
              <div
                className="inline-block group relative bg-gradient-to-b from-white/20 to-white/5 p-px rounded-xl backdrop-blur-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 pointer-events-auto"
              >
                <Button
                  variant="default"
                  className="rounded-[0.9rem] px-6 py-4 text-sm font-semibold backdrop-blur-md bg-white/90 hover:bg-white text-black transition-all duration-300 group-hover:-translate-y-0.5 border border-white/30 hover:border-white/50"
                  onClick={() => window.open('https://www.instagram.com/nandha_vinayak/', '_blank')}
                >
                  <span className="opacity-90 group-hover:opacity-100 transition-opacity">Instagram</span>
                  <span className="ml-2 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">→</span>
                </Button>
              </div>
              
              <div
                className="inline-block group relative bg-gradient-to-b from-white/20 to-white/5 p-px rounded-xl backdrop-blur-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 pointer-events-auto"
              >
                <Button
                  variant="default"
                  className="rounded-[0.9rem] px-6 py-4 text-sm font-semibold backdrop-blur-md bg-white/90 hover:bg-white text-black transition-all duration-300 group-hover:-translate-y-0.5 border border-white/30 hover:border-white/50"
                  onClick={() => window.open('https://www.linkedin.com/in/nandha-vinayak-a-p-9874a41b3/', '_blank')}
                >
                  <span className="opacity-90 group-hover:opacity-100 transition-opacity">LinkedIn</span>
                  <span className="ml-2 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">→</span>
                </Button>
              </div>
              
              <div
                className="inline-block group relative bg-gradient-to-b from-white/20 to-white/5 p-px rounded-xl backdrop-blur-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 pointer-events-auto"
              >
                <Button
                  variant="default"
                  className="rounded-[0.9rem] px-6 py-4 text-sm font-semibold backdrop-blur-md bg-white/90 hover:bg-white text-black transition-all duration-300 group-hover:-translate-y-0.5 border border-white/30 hover:border-white/50"
                  onClick={() => window.open('https://in.pinterest.com/Nandhz_vinayxk/', '_blank')}
                >
                  <span className="opacity-90 group-hover:opacity-100 transition-opacity">Pinterest</span>
                  <span className="ml-2 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">→</span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center py-12">
          <TiltedCard
            imageSrc="/profile-image.png"
            altText="Nandha Vinayak A P- Portfolio"
            captionText="Nandha Vinayak A P"
            containerHeight="800px"
            containerWidth="800px"
            imageHeight="800px"
            imageWidth="800px"
            rotateAmplitude={12}
            scaleOnHover={1.05}
            showMobileWarning={false}
            
            
          />
        </div>

      </div>
    </>
  );
};

export default HalideLanding;
