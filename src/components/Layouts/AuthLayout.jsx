import Logo from "../Logo";

function AuthLayout({ children }) {
  return (
    <main className="min-h-screen bg-special-mainBg flex items-center justify-center">
      <div className="w-full max-w-sm">

        {/* logo */}
        <Logo />

        {/* children */}
        {children}

      </div>
    </main>
  );
}

export default AuthLayout;