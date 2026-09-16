import { useState } from "react";

import Navbar from "./components/Navbar";
import BalanceCard from "./components/BalanceCard";
import WithdrawCard from "./components/WithdrawCard";
import Rules from "./components/Rules";
import Footer from "./components/Footer";
import QuickActions from "./components/QuickActions";
import TransactionHistory from "./components/TransactionHistory";

function App() {
  const [balance, setBalance] = useState(50000);

  const [transactions, setTransactions] = useState([]);

  const [dailyWithdrawn, setDailyWithdrawn] = useState(0);

  const dailyLimit = 20000;

  function addTransaction(type, amount) {
    const newTransaction = {
      id: Date.now() + Math.random(),
      type,
      amount,
      date: new Date().toLocaleString("en-IN", {
        day: "2-digit",
        month: "short",
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setTransactions((prev) => [
      newTransaction,
      prev,
    ]);
  }

  function handleWithdraw(amount) {
    setDailyWithdrawn((prev) => prev + amount);

    addTransaction("withdraw", amount);
  }

  function handleDeposit(amount) {
    setBalance((prev) => prev + amount);

    addTransaction("deposit", amount);
  }

  function handleTransfer(amount) {
    setBalance((prev) => prev - amount);

    addTransaction("transfer", amount);
  }

  const remainingLimit = Math.max(
    dailyLimit - dailyWithdrawn,
    0
  );

  const progress = Math.min(
    (dailyWithdrawn / dailyLimit) * 100,
    100
  );

  return (
    <div className="min-h-screen bg-slate-50">

      <Navbar />

      <main className="mx-auto max-w-6xl px-5 py-12">

        {/* Welcome */}
        <div className="mb-8">
          <p className="text-sm font-semibold tracking-[0.2em] text-violet-600">
            WELCOME BACK
          </p>

          <h1 className="mt-2 text-4xl font-bold text-slate-900">
            Banking Dashboard
          </h1>

          <p className="mt-2 text-slate-500">
            Manage your account, make transactions and track your activity.
          </p>
        </div>

        {/* Balance + Withdraw */}
        <div className="grid gap-6 md:grid-cols-2">

          <BalanceCard balance={balance} />

          <WithdrawCard
            balance={balance}
            setBalance={setBalance}
            onWithdraw={handleWithdraw}
            dailyWithdrawn={dailyWithdrawn}
            dailyLimit={dailyLimit}
          />

        </div>

        {/* Quick Actions */}
        <QuickActions
          balance={balance}
          setBalance={setBalance}
          onDeposit={handleDeposit}
          onTransfer={handleTransfer}
        />

        {/* Daily Withdrawal Limit */}
        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-xs font-semibold tracking-widest text-violet-600">
                DAILY LIMIT
              </p>

              <h2 className="mt-1 text-2xl font-bold text-slate-900">
                Withdrawal Limit
              </h2>
            </div>

            <div className="text-right">
              <p className="text-sm text-slate-400">
                Remaining
              </p>

              <p className="font-bold text-slate-900">
                ₹{remainingLimit.toLocaleString("en-IN")}
              </p>
            </div>

          </div>

          <div className="mt-6">

            <div className="mb-2 flex justify-between text-xs">
              <span className="text-slate-500">
                Used today
              </span>

              <span className="font-semibold text-slate-700">
                ₹{dailyWithdrawn.toLocaleString("en-IN")} / ₹
                {dailyLimit.toLocaleString("en-IN")}
              </span>
            </div>

            <div className="h-3 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-violet-600 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>

            <p className="mt-3 text-xs text-slate-400">
              Your daily withdrawal limit resets every day.
            </p>

          </div>
        </div>

        {/* Transaction History */}
        <TransactionHistory
          transactions={transactions}
        />

        <Rules />

      </main>

      <Footer />

    </div>
  );
}

export default App;



