interface StatCardProps {
  value: string
  label: string
}

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="rounded-[4px] bg-[#F6F6F6] px-3 py-4 text-center hover:bg-gray-100 transition-colors">
      <p className="text-xl font-bold text-rose-600">{value}</p>
      <p className="mt-0.5 text-xs text-slate-800">{label}</p>
    </div>
  )
}
