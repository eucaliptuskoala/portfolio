import { useMemo } from 'react';
import NodeNetworkStatic from './NodeNetworkStatic';

function mulberry32(a) {
  return function () {
    a |= 0; a = a + 0x6D2B79F5 | 0;
    var t = Math.imul(a ^ a >>> 15, 1 | a);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

export default function NodeNetwork({ seed = 42, nodeCount = 14, static: useStatic = false }) {
  const { nodes, edges } = useMemo(() => {
    if (useStatic) return { nodes: [], edges: [] };
    const rng = mulberry32(seed);
    const generated = Array.from({ length: nodeCount }, () => ({
      x: 40 + rng() * 320,
      y: 40 + rng() * 320,
      r: 1.5 + rng() * 2.5
    }));
    const connections = [];
    for (let i = 0; i < generated.length; i++) {
      for (let j = i + 1; j < generated.length; j++) {
        const dx = generated[i].x - generated[j].x;
        const dy = generated[i].y - generated[j].y;
        if (Math.sqrt(dx * dx + dy * dy) < 140) {
          connections.push([i, j]);
        }
      }
    }
    return { nodes: generated, edges: connections };
  }, [seed, nodeCount, useStatic]);

  if (useStatic) {
    return <NodeNetworkStatic />;
  }

  return (
    <svg viewBox="0 0 400 400" style={{ width: '80%', height: '80%', opacity: 0.4 }}>
      <defs>
        <style>{`
          .nn-node { animation: nnPulse 3s ease-in-out infinite; }
          .nn-node:nth-child(odd) { animation-delay: -1.5s; }
          @keyframes nnPulse {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.7; }
          }
        `}</style>
      </defs>
      {edges.map(([a, b], i) => (
        <line key={`e${i}`} x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y}
              stroke="var(--accent)" strokeWidth="0.5" opacity="0.25" />
      ))}
      {nodes.map((n, i) => (
        <circle key={`n${i}`} cx={n.x} cy={n.y} r={n.r} fill="var(--accent)" className="nn-node" />
      ))}
    </svg>
  );
}
