const SectionDivider = ({ light = false }: { light?: boolean }) => (
  <div
    className="w-full"
    style={{
      height: "1px",
      background: light
        ? "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.06) 25%, rgba(0,0,0,0.06) 75%, transparent 100%)"
        : "linear-gradient(to right, transparent 0%, rgba(255,255,255,0.04) 25%, rgba(255,255,255,0.04) 75%, transparent 100%)",
    }}
  />
);

export default SectionDivider;
