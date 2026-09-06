interface VisitCardProps {
  visitName: string
  visitType: string
  active?: boolean
}

export default function VisitCard({ visitName, visitType, active = true }: VisitCardProps) {
  return (
    <div className="rounded-xl bg-[#0047BB] p-4 text-white">
      <div className="flex items-center justify-between">
        <p className="text-lg font-bold">{visitName}</p>
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            active ? 'bg-white text-[#0047BB]' : 'bg-white/20 text-white'
          }`}
        >
          {active ? 'Active' : 'Inactive'}
        </span>
      </div>
      <p className="mt-1 text-sm text-white/70">{visitType}</p>
    </div>
  )
}
