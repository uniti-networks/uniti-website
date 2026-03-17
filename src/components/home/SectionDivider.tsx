const SectionDivider = () => (
  <div className="flex justify-center py-[80px]">
    <div
      className="w-[70%] md:w-[70%] max-sm:w-[90%]"
      style={{
        height: "0.5px",
        background:
          "linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 30%, rgba(255,255,255,0.3) 70%, rgba(255,255,255,0) 100%)",
        boxShadow: "0 0 8px rgba(82, 90, 166, 0.4)",
      }}
    />
  </div>
);

export default SectionDivider;
