function Rules() {
  const rules = [
    {
      icon: "✓",
      title: "Sufficient Balance",
      text: "Withdrawal cannot exceed your available balance.",
    },
    {
      icon: "100",
      title: "Multiple of ₹100",
      text: "Only amounts divisible by ₹100 can be withdrawn.",
    },
    {
      icon: "🔒",
      title: "Secure Transaction",
      text: "Your transaction is processed safely.",
    },
  ];

  return (
    <div className="mt-8 grid gap-5 md:grid-cols-3">

      {rules.map((rule) => (
        <div
          key={rule.title}
          className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5"
        >

          <div className="flex h-10 min-w-10 items-center justify-center rounded-xl bg-violet-100 text-xs font-bold text-violet-600">
            {rule.icon}
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">
              {rule.title}
            </h3>

            <p className="mt-1 text-xs leading-5 text-slate-500">
              {rule.text}
            </p>
          </div>

        </div>
      ))}

    </div>
  );
}

export default Rules;