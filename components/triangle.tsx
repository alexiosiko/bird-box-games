
export default function Triangle({ className }: { className?: string }) {
  const style = {
    width: 0,
    height: 0,
    borderLeft: '10px solid transparent',
    borderRight: '10px solid transparent',
    borderBottom: '20px solid var(--accent)'
  };

  return <div className={className} style={style}></div>;
}
