export default function NodeNetwork() {
  const nodes = [
    {x:200,y:80,r:3},{x:100,y:180,r:2.5},{x:300,y:160,r:2},{x:160,y:280,r:3.5},{x:280,y:300,r:2.5},
    {x:60,y:320,r:2},{x:340,y:250,r:2.5},{x:120,y:100,r:2},{x:320,y:100,r:3},{x:240,y:200,r:2}
  ];
  const edges = [
    [0,1],[0,2],[0,8],[1,3],[1,7],[2,4],[2,9],[3,5],[3,6],[4,6],[4,9],[7,0],[8,9]
  ];
  return (
    <svg viewBox="0 0 400 400" style={{ width: '80%', height: '80%', opacity: 0.4 }}>
      {edges.map(([a,b],i) => (
        <line key={i} x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y}
              stroke="var(--accent)" strokeWidth="0.5" opacity="0.25" />
      ))}
      {nodes.map((n,i) => (
        <circle key={i} cx={n.x} cy={n.y} r={n.r} fill="var(--accent)" opacity="0.5" />
      ))}
    </svg>
  );
}
