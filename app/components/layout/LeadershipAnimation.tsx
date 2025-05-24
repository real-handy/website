import { useEffect, useState, useRef } from "react";

interface Waveform {
  points: { x: number; y: number }[];
  amplitude: number;
  frequency: number;
  phase: number;
  opacity: number; // Added opacity to waveform interface
}

interface SnowParticle {
  id: number;
  x: number;
  y: number;
  radius: number;
  speed: number;
  opacity: number;
}

type Phase = 'waveform'; // Only waveform phase

export function AnimatedBackground() {
  const numLines = 30;
  const numPoints = 100;
  const width = 1440;
  const height = 800;
  const baseStart = 150;
  const lineGap = 20;

  const [phase, setPhase] = useState<Phase>('waveform');
  const waveforms = useRef<Waveform[]>([]);
  const snowParticlesRef = useRef<SnowParticle[]>([]);
  const numSnowParticles = 100;

  const regenerateWaveforms = () => {
    waveforms.current = Array.from({ length: numLines }, (_, i) => {
      const amplitude = 20 + Math.random() * 30;
      const frequency = 0.05 + Math.random() * 0.1;
      const wavePhase = Math.random() * Math.PI * 2;
      let opacity = 0.6; // Default opacity
      if (i % 3 === 2) {
        opacity = 0.1; 
      } else if (i % 2 === 1) {
        opacity = 0.4; 
      }
      return {
        points: Array.from({ length: numPoints }, (_, j) => ({
          x: j * (width / (numPoints - 1)),
          y: baseStart + i * lineGap,
        })),
        amplitude,
        frequency,
        phase: wavePhase,
        opacity, // Store opacity with waveform data
      };
    });
  };

  // On mount, generate initial waveforms and snow particles
  useEffect(() => {
    regenerateWaveforms();
    // Initialize snow particles
    snowParticlesRef.current = Array.from({ length: numSnowParticles }, (_, i) => ({
      id: i,
      x: Math.random() * width,
      y: Math.random() * height, // Start at random positions
      radius: Math.random() * 1.5 + 0.5, // Radius between 0.5 and 2
      speed: Math.random() * 1 + 0.2,   // Speed between 0.2 and 1.2
      opacity: Math.random() * 0.4 + 0.3, // Opacity between 0.3 and 0.7
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Animation state
  const [, setTick] = useState(0);

  // Animate the waveforms and snow particles
  useEffect(() => {
    let running = true;
    function animate() {
      if (!running) return;
      // Only waveform animation logic is needed
      waveforms.current.forEach((wf, i) => {
        const t = Date.now() / 900 + i * 0.2;
        wf.points = wf.points.map((pt, j) => {
          const y =
            baseStart +
            i * lineGap +
            Math.sin(j * wf.frequency + t + wf.phase) * wf.amplitude +
            Math.sin(j * wf.frequency * 2.3 + t * 1.2 + wf.phase) * (wf.amplitude * 0.4) +
            Math.sin(j * wf.frequency * 4.7 + t * 0.7 + wf.phase) * (wf.amplitude * 0.2);
          return { x: pt.x, y };
        });
      });

      // Animate snow particles
      snowParticlesRef.current.forEach(p => {
        p.y += p.speed;
        if (p.y > height + p.radius * 2) { // If particle is below the screen
          p.y = -p.radius * 2; // Reset to top
          p.x = Math.random() * width; // New random x position
          p.speed = Math.random() * 1 + 0.2; // New random speed
          p.opacity = Math.random() * 0.4 + 0.3; // New random opacity
        }
      });

      setTick((tick) => tick + 1); // force re-render
      requestAnimationFrame(animate);
    }
    animate();
    return () => {
      running = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // phase and wadPos are no longer dependencies

  // Timer to trigger wadding phase and reset for new cycle - No longer needed
  useEffect(() => {
    // On entering waveform, regenerate waveforms
    regenerateWaveforms();
    // The rest of the logic for phase changes is removed.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Runs once on mount to initialize waveforms

  return (
    <>
      {/* Radial Gradient Background */}
      <svg
        className="absolute inset-0 z-0 h-full w-full opacity-20 dark:opacity-90"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        viewBox={`0 0 ${width} ${height}`}
      >
        <defs>
          <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" style={{ stopColor: "var(--primary)", stopOpacity: "0.9" }} />
            <stop offset="100%" style={{ stopColor: "var(--muted)", stopOpacity: "0" }} />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grad1)" opacity="0.3" />
      </svg>

      {/* Waveforms and Snow Particles Container */}
      <div className="absolute inset-0 z-0 overflow-hidden" >
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${width} ${height}`}>
          {/* Render Waveforms */}
          {waveforms.current.map((wf, i) => {
            const pathData = wf.points.map((pt, idx) => `${idx === 0 ? 'M' : 'L'} ${pt.x} ${pt.y}`).join(' ');
            const baseClasses = 'stroke-[var(--primary)] stroke-[1] fill-none';
            return (
              <path
                key={`waveform-${i}`}
                className={`${baseClasses}`}
                d={pathData}
                style={{ opacity: wf.opacity }} // Use stored opacity
              />
            );
          })}

          {/* Render Snow Particles */}
          {snowParticlesRef.current.map(p => (
            <circle
              key={`snow-${p.id}`}
              cx={p.x}
              cy={p.y}
              r={p.radius}
              // Using a light color that will be visible against our background
              fill="var(--color-alum-400)" 
              style={{ opacity: p.opacity }}
            />
          ))}
        </svg>
      </div>
    </>
  );
}
// now contains all the animation logic.