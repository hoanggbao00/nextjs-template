export default function GradientBackground() {
  return (
    <div className="absolute inset-0 bg-white dark:bg-gray-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(66,153,225,0.15),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_20%_30%,rgba(66,153,225,0.08),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_70%,rgba(236,72,153,0.15),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_80%_70%,rgba(236,72,153,0.08),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_40%_60%,rgba(245,158,11,0.1),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_40%_60%,rgba(245,158,11,0.05),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_20%,rgba(16,185,129,0.1),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_60%_20%,rgba(16,185,129,0.05),transparent_70%)]" />
      <div
        className="absolute inset-0 opacity-[0.07] dark:opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.005' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
