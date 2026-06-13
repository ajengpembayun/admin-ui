function Logo({ variant = "primary" }) {
  return (
    <div className={`flex justify-center font-poppins tracking-wide text-[#299d91] text-2xl ${variant === "primary" ? "mb-8" : ""}`}>
      <span className="font-bold">FINE</span>
      bank
      <span className="font-bold">.IO</span>
    </div>
  );
}

export default Logo;