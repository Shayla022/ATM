function TransactionHistory({ transactions }) {
return ( <div
   id="history"
   className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
 > <div className="mb-6 flex items-center justify-between">


    <div>
      <p className="text-xs font-semibold tracking-widest text-violet-600">
        ACTIVITY
      </p>

      <h2 className="mt-1 text-2xl font-bold text-slate-900">
        Recent Transactions
      </h2>
    </div>

    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-xl text-violet-600">
      ↕
    </div>

  </div>

  {transactions.length === 0 ? (
    <div className="rounded-2xl bg-slate-50 p-6 text-center">

      <p className="font-medium text-slate-600">
        No transactions yet
      </p>

      <p className="mt-1 text-sm text-slate-400">
        Your recent activity will appear here.
      </p>

    </div>
  ) : (
    <div className="space-y-3">

      {transactions.map((transaction) => {

        const isDeposit = transaction.type === "deposit";
        const isTransfer = transaction.type === "transfer";

        const title = isDeposit
          ? "Cash Deposit"
          : isTransfer
          ? "Money Transfer"
          : "Cash Withdrawal";

        const icon = isDeposit
          ? "+"
          : isTransfer
          ? "→"
          : "↓";

        const amountPrefix = isDeposit ? "+" : "-";

        return (
          <div
            key={transaction.id}
            className="flex items-center justify-between rounded-2xl border border-slate-100 p-4 transition hover:bg-slate-50"
          >

            <div className="flex items-center gap-4">

              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl text-xl ${
                  isDeposit
                    ? "bg-green-50 text-green-600"
                    : isTransfer
                    ? "bg-orange-50 text-orange-500"
                    : "bg-red-50 text-red-500"
                }`}
              >
                {icon}
              </div>

              <div>
                <p className="font-semibold text-slate-800">
                  {title}
                </p>

                <p className="text-xs text-slate-400">
                  {transaction.date}
                </p>
              </div>

            </div>

            <p
              className={`font-bold ${
                isDeposit
                  ? "text-green-600"
                  : isTransfer
                  ? "text-orange-500"
                  : "text-red-500"
              }`}
            >
              {amountPrefix} ₹
              {transaction.amount.toLocaleString("en-IN")}
            </p>

          </div>
        );
      })}

    </div>
  )}

</div>


);
}

export default TransactionHistory;
