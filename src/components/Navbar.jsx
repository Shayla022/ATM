function Navbar() {
  return (
    <nav className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5">

        <div className="text-xl font-extrabold tracking-wide">
          <span className="text-violet-600">ATM</span> BANK
        </div>

        <div className="flex items-center gap-2 text-sm text-slate-500">
          <span className="h-2.5 w-2.5 rounded-full bg-green-500"></span>
          Account Active
        </div>

      </div>
    </nav>
  );
}

export default Navbar;