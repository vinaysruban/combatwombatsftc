"use client";

import { useEffect, useRef } from 'react';
import webGLFluidEnhanced from 'webgl-fluid-enhanced';
import { useTheme } from "next-themes";


export default function CTA() {
    const canvasRef = useRef(null);
    const {setTheme, resolvedTheme} = useTheme();

    useEffect(() => {
      webGLFluidEnhanced.simulation(canvasRef.current!, {
        PRESSURE: 0.8,
        PRESSURE_ITERATIONS: 20,
        SUNRAYS: false,
        DENSITY_DISSIPATION: 1,
        VELOCITY_DISSIPATION: 0.2,
        CURL: 30,
        BLOOM: true,
        BLOOM_ITERATIONS: 8,
        BLOOM_RESOLUTION: 256,
        BLOOM_INTENSITY: 0.8,
        BLOOM_THRESHOLD: 0.6,
        BLOOM_SOFT_KNEE: 0.7,
        SUNRAYS_RESOLUTION: 196,
        SUNRAYS_WEIGHT: 1,
        COLOR_PALETTE: [],
        COLOR_UPDATE_SPEED: 10,
        BRIGHTNESS: 0.5,
        BACK_COLOR: resolvedTheme == "light" ? '#EBE2D3' : "#171717",
      });
    }, []);

    useEffect(() => {
        webGLFluidEnhanced.simulation(canvasRef.current!, {
            BACK_COLOR: resolvedTheme == "light" ? '#EBE2D3' : "#171717",
        });
    }, [resolvedTheme]);

  return (
    <canvas ref={canvasRef} className="w-full h-full" />
  );
}
