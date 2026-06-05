import React from 'react';

export function Particles() {
  return (
    <div className="particles" aria-hidden="true">
      {Array.from({ length: 90 }).map((_, index) => (
        <span
          key={index}
          style={{
            '--x': `${(index * 37) % 100}%`,
            '--y': `${(index * 61) % 92}%`,
            '--s': `${2 + (index % 5)}px`,
            '--d': `${3 + (index % 7)}s`,
            '--delay': `${(index % 13) * -0.4}s`,
          }}
        />
      ))}
    </div>
  );
}

export function Sparkles() {
  return (
    <div className="sparkles" aria-hidden="true">
      <span className="star star-one" />
      <span className="star star-two" />
      <span className="star star-three" />
      <span className="star star-four" />
      <span className="star star-five" />
    </div>
  );
}
