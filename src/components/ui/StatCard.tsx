interface StatCardProps {
  value: string
  label: string
}

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="rounded-xl bg-gray-50 px-3 py-3 hover:bg-gray-100 transition-colors">
      <p className="text-xl font-bold text-gray-900">{value}</p>
      <p className="mt-0.5 text-xs text-gray-500">{label}</p>
    </div>
  )
}
