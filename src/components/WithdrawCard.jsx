import { useState } from "react";

function WithdrawCard({
  balance,
  setBalance,
  onWithdraw,
  dailyWithdrawn,
  dailyLimit,
}) {
  const [withdrawal, setWithdrawal] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  function handleWithdraw() {
    const amount = Number(withdrawal);

    // Empty or invalid amount
    if (!amount || amount <= 0) {
      setMessage("Please enter a valid amount.");
      setSuccess(false);
      return;
    }

    // Check balance
    if (amount > balance) {
      setMessage("Insufficient balance!");
      setSuccess(false);
      return;
    }

    // Check multiple of 100
    if (amount % 100 !== 0) {
      setMessage("Amount must be a multiple of ₹100.");
      setSuccess(false);
      return;
    }

    // Check daily limit
    if (dailyWithdrawn + amount > dailyLimit) {
      const remaining = dailyLimit - dailyWithdrawn;

      setMessage(
        `Daily limit exceeded! You can withdraw only ₹${remaining.toLocaleString(
          "en-IN"
        )} more today.`
      );

      setSuccess(false);
      return;
    }

    // Deduct amount
    setBalance(balance - amount);

    // Add transaction
    onWithdraw(amount);

    setMessage(
      `₹${amount.toLocaleString("en-IN")} withdrawn successfully!`
    );

    setSuccess(true);
    setWithdrawal("");
  }

  return (
    <div
      id="withdraw"
      className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
    >
      <div className="mb-8 flex items-center justify-between">

        <div>
          <p className="text-xs font-semibold tracking-widest text-violet-600">
            TRANSACTION
          </p>

          <h2 className="mt-1 text-2xl font-bold text-slate-900">
            Withdraw Money
          </h2>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-2xl text-violet-600">
          ↓
        </div>

      </div>

      <label className="mb-2 block text-sm font-semibold text-slate-700">
        Withdrawal Amount
      </label>

      <div className="flex h-15 items-center rounded-xl border border-slate-300 px-4 focus-within:border-violet-500 focus-within:ring-4 focus-within:ring-violet-100">

        <span className="mr-2 text-xl font-semibold text-slate-500">
          ₹
        </span>

        <input
          type="number"
          value={withdrawal}
          onChange={(e) => setWithdrawal(e.target.value)}
          placeholder="Enter amount"
          className="w-full bg-transparent text-lg font-semibold outline-none"
        />

      </div>

      <div className="mt-2 flex justify-between text-xs text-slate-400">
        <span>Multiple of ₹100</span>

        <span>
          ₹{Math.max(dailyLimit - dailyWithdrawn, 0).toLocaleString("en-IN")} left
        </span>
      </div>

      <button
        onClick={handleWithdraw}
        className="mt-5 flex h-13 w-full items-center justify-center gap-2 rounded-xl bg-violet-600 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-violet-700 hover:shadow-lg"
      >
        Withdraw Money
        <span>→</span>
      </button>

      {message && (
        <div
          className={`mt-4 rounded-xl p-3 text-sm font-medium ${
            success
              ? "bg-green-50 text-green-600"
              : "bg-red-50 text-red-600"
          }`}
        >
          {success ? "✓ " : "! "}
          {message}
        </div>
      )}

    </div>
  );
}

export default WithdrawCard;
