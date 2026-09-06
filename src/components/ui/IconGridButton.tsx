import Icon, { type IconName } from '../icons/Icon'

interface IconGridButtonProps {
  icon: IconName
  label: string
  iconColor?: string
  onClick?: () => void
}

export default function IconGridButton({ icon, label, iconColor, onClick }: IconGridButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex flex-col items-center gap-1.5 rounded-[4px] p-1.5 text-center hover:bg-rose-50 active:bg-rose-100 transition-colors"
    >
      <span
        className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F6F6F6] text-rose-600"
        style={iconColor ? { color: iconColor } : undefined}
      >
        <Icon name={icon} className="h-5 w-5" />
      </span>
      <span className="text-[11px] leading-tight text-gray-600 line-clamp-2">{label}</span>
    </button>
  )
}
