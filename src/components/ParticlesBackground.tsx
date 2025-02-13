import { loadFull } from "tsparticles";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine"; // Asegúrate de importar el tipo correcto

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (main: Engine) => {
    await loadFull(main);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.7,
          },
          size: {
            value: 4,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            out_mode: "out",
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;
