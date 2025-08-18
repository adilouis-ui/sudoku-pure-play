import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
  color: string;
  size: number;
}

interface ConfettiAnimationProps {
  isVisible: boolean;
  onComplete?: () => void;
}

const colors = [
  'hsl(45, 85%, 65%)',   // warm-up yellow
  'hsl(25, 85%, 60%)',   // challenge orange
  'hsl(5, 85%, 60%)',    // brain-fire red
  'hsl(120, 50%, 60%)',  // success green
  'hsl(220, 50%, 55%)',  // primary blue
  'hsl(280, 60%, 65%)',  // purple
];

export const ConfettiAnimation: React.FC<ConfettiAnimationProps> = ({
  isVisible,
  onComplete
}) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (!isVisible) {
      setParticles([]);
      return;
    }

    // Create initial particles
    const newParticles: Particle[] = [];
    for (let i = 0; i < 150; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: -10,
        vx: (Math.random() - 0.5) * 10,
        vy: Math.random() * 3 + 2,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 8 + 4,
      });
    }
    setParticles(newParticles);

    // Animation loop
    let animationId: number;
    const animate = () => {
      setParticles(prevParticles => {
        const updated = prevParticles
          .map(particle => ({
            ...particle,
            x: particle.x + particle.vx,
            y: particle.y + particle.vy,
            vy: particle.vy + 0.1, // gravity
            rotation: particle.rotation + particle.rotationSpeed,
          }))
          .filter(particle => particle.y < window.innerHeight + 50);

        if (updated.length === 0 && onComplete) {
          onComplete();
        }

        return updated;
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isVisible, onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {particles.map(particle => (
        <div
          key={particle.id}
          style={{
            position: 'absolute',
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            transform: `rotate(${particle.rotation}deg)`,
            borderRadius: '2px',
          }}
        />
      ))}
    </div>
  );
};