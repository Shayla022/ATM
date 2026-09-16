import { useState } from "react";

function BalanceCard({ balance }) {
  const [showBalance, setShowBalance] = useState(true);

  return (
    <div className="flex min-h-75 flex-col justify-between rounded-3xl bg-linear-to-br from-violet-950 to-violet-600 p-8 text-white shadow-xl">
      <div className="flex items-center justify-between">
        <span className="text-xs tracking-widest text-white/70">
          AVAILABLE BALANCE
        </span>

        <button
          onClick={() => setShowBalance(!showBalance)}
          className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-lg transition hover:bg-white/25"
          title={showBalance ? "Hide balance" : "Show balance"}
        >
          {showBalance ? "◉" : "◌"}
        </button>
      </div>

      <div>
        <p className="mb-2 text-sm text-white/60">Current Balance</p>

        <h2 className="text-4xl font-bold">
          {showBalance ? `₹${balance.toLocaleString("en-IN")}` : "₹••••••"}
        </h2>
      </div>

      <div className="flex justify-between text-xs text-white/60">
        <span>Account Balance</span>
        <span>•••• 1259</span>
      </div>
    </div>
  );
}

export default BalanceCard;
