interface SectionHeaderProps {
  title: string
  actionLabel?: string
  onAction?: () => void
}

export default function SectionHeader({ title, actionLabel, onAction }: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-3">
      <h2 className="text-base font-semibold text-gray-900">{title}</h2>
      {actionLabel && (
        <button
          type="button"
          onClick={onAction}
          className="text-sm font-medium text-rose-600 hover:text-rose-700 active:text-rose-800 transition-colors"
        >
          {actionLabel}
        </button>
      )}
    </div>
  )
}
