"use client";

import { useCallback, useState } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { tsParticles } from "tsparticles-engine";
import { loadRoundedRectShape } from "tsparticles-shape-rounded-rect";
import { useStateContext } from "@/contexts/ContextProvider";

const AnimatedBackground = () => {
  const { currentMode, currentColor } = useStateContext();

  const mode = currentMode === "Dark" ? "#292929" : "#fffffc";

  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    loadRoundedRectShape(tsParticles);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );
  return (
    <Particles
      className="absolute"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: mode,
          },
        },
        fullScreen: {
          zIndex: -1,
        },
        fpsLimit: 120,

        particles: {
          color: {
            value: currentColor,
          },
          move: {
            direction: "top",
            enable: true,

            random: true,
            speed: { min: 0.2, max: 2 },
            straight: true,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 20,
          },
          opacity: {
            value: 0.1,
          },
          rotate: {
            value: 0,
            random: true,
            direction: "clockwise",
            animation: {
              enable: true,
              speed: { min: 0.5, max: 2 },
              sync: false,
            },
          },
          shape: {
            type: "rounded-rect",
            options: {
              "rounded-rect": {
                radius: 20,
              },
            },
          },
          size: {
            value: { min: 15, max: 200 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default AnimatedBackground;
