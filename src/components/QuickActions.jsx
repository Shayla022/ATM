import { useState } from "react";

function QuickActions({
balance,
onDeposit,
onTransfer,
}) {
const [depositAmount, setDepositAmount] = useState("");
const [transferAmount, setTransferAmount] = useState("");
const [accountNumber, setAccountNumber] = useState("");

const [depositMessage, setDepositMessage] = useState("");
const [transferMessage, setTransferMessage] = useState("");

function handleDeposit() {
const amount = Number(depositAmount);


if (!amount || amount <= 0) {
  setDepositMessage("Please enter a valid amount.");
  return;
}

if (amount % 100 !== 0) {
  setDepositMessage("Deposit amount must be a multiple of ₹100.");
  return;
}

onDeposit(amount);

setDepositMessage(
  `₹${amount.toLocaleString("en-IN")} deposited successfully!`
);

setDepositAmount("");


}

function handleTransfer() {
const amount = Number(transferAmount);


if (!accountNumber.trim()) {
  setTransferMessage("Please enter the receiver account number.");
  return;
}

if (!amount || amount <= 0) {
  setTransferMessage("Please enter a valid amount.");
  return;
}

if (amount % 100 !== 0) {
  setTransferMessage("Transfer amount must be a multiple of ₹100.");
  return;
}

if (amount > balance) {
  setTransferMessage("Insufficient balance!");
  return;
}

onTransfer(amount);

setTransferMessage(
  `₹${amount.toLocaleString("en-IN")} transferred successfully!`
);

setTransferAmount("");
setAccountNumber("");


}

return ( <div className="mt-8">

```
  <div className="mb-6">
    <p className="text-xs font-semibold tracking-widest text-violet-600">
      MONEY MANAGEMENT
    </p>

    <h2 className="mt-1 text-2xl font-bold text-slate-900">
      Deposit & Transfer
    </h2>

    <p className="mt-1 text-sm text-slate-500">
      Manage money directly from your banking dashboard.
    </p>
  </div>

  <div className="grid gap-6 md:grid-cols-2">

    {/* Deposit */}
    <div
      id="deposit"
      className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
    >
      <div className="mb-6 flex items-center justify-between">

        <div>
          <p className="text-xs font-semibold tracking-widest text-green-600">
            ADD MONEY
          </p>

          <h3 className="mt-1 text-xl font-bold text-slate-900">
            Deposit Money
          </h3>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-xl text-green-600">
          +
        </div>

      </div>

      <label className="mb-2 block text-sm font-semibold text-slate-700">
        Deposit Amount
      </label>

      <div className="flex h-14 items-center rounded-xl border border-slate-300 px-4 focus-within:border-green-500 focus-within:ring-4 focus-within:ring-green-100">

        <span className="mr-2 text-xl font-semibold text-slate-500">
          ₹
        </span>

        <input
          type="number"
          value={depositAmount}
          onChange={(e) => setDepositAmount(e.target.value)}
          placeholder="Enter amount"
          className="w-full bg-transparent text-lg font-semibold outline-none"
        />

      </div>

      <p className="mt-2 text-xs text-slate-400">
        Amount should be a multiple of ₹100
      </p>

      <button
        onClick={handleDeposit}
        className="mt-5 h-13 w-full rounded-xl bg-green-600 font-semibold text-white transition hover:bg-green-700 hover:shadow-lg"
      >
        Deposit Money
      </button>

      {depositMessage && (
        <div className="mt-4 rounded-xl bg-green-50 p-3 text-sm font-medium text-green-600">
          ✓ {depositMessage}
        </div>
      )}
    </div>

    {/* Transfer */}
    <div
      id="transfer"
      className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
    >
      <div className="mb-6 flex items-center justify-between">

        <div>
          <p className="text-xs font-semibold tracking-widest text-orange-600">
            SEND MONEY
          </p>

          <h3 className="mt-1 text-xl font-bold text-slate-900">
            Transfer Money
          </h3>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-xl text-orange-600">
          →
        </div>

      </div>

      <label className="mb-2 block text-sm font-semibold text-slate-700">
        Receiver Account Number
      </label>

      <input
        type="text"
        value={accountNumber}
        onChange={(e) => setAccountNumber(e.target.value)}
        placeholder="Enter account number"
        className="h-14 w-full rounded-xl border border-slate-300 px-4 font-semibold outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
      />

      <label className="mb-2 mt-4 block text-sm font-semibold text-slate-700">
        Transfer Amount
      </label>

      <div className="flex h-14 items-center rounded-xl border border-slate-300 px-4 focus-within:border-orange-500 focus-within:ring-4 focus-within:ring-orange-100">

        <span className="mr-2 text-xl font-semibold text-slate-500">
          ₹
        </span>

        <input
          type="number"
          value={transferAmount}
          onChange={(e) => setTransferAmount(e.target.value)}
          placeholder="Enter amount"
          className="w-full bg-transparent text-lg font-semibold outline-none"
        />

      </div>

      <p className="mt-2 text-xs text-slate-400">
        Available balance: ₹{balance.toLocaleString("en-IN")}
      </p>

      <button
        onClick={handleTransfer}
        className="mt-5 h-13 w-full rounded-xl bg-orange-500 font-semibold text-white transition hover:bg-orange-600 hover:shadow-lg"
      >
        Transfer Money
      </button>

      {transferMessage && (
        <div
          className={`mt-4 rounded-xl p-3 text-sm font-medium ${
            transferMessage.includes("successfully")
              ? "bg-green-50 text-green-600"
              : "bg-red-50 text-red-600"
          }`}
        >
          {transferMessage.includes("successfully") ? "✓ " : "! "}
          {transferMessage}
        </div>
      )}

    </div>

  </div>
</div>


);
}

export default QuickActions;
