import Icon from '../icons/Icon'

interface ProfileHeaderProps {
  name: string
  id: string
  hasNotification?: boolean
  onNotificationClick?: () => void
  onProfileClick?: () => void
}

export default function ProfileHeader({
  name,
  id,
  hasNotification = true,
  onNotificationClick,
  onProfileClick,
}: ProfileHeaderProps) {
  return (
    <header className="flex items-center justify-between bg-white px-4 py-3">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onProfileClick}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 active:bg-gray-300 transition-colors"
          aria-label="Open profile"
        >
          <Icon name="user" className="h-5 w-5" />
        </button>
        <div>
          <p className="text-base font-semibold text-gray-900">Hello, {name}</p>
          <p className="text-xs text-gray-400">{id}</p>
        </div>
      </div>
      <button
        type="button"
        onClick={onNotificationClick}
        className="relative flex h-10 w-10 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 active:bg-gray-200 transition-colors"
        aria-label="Notifications"
      >
        <Icon name="bell" className="h-5 w-5" />
        {hasNotification && (
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-rose-600" />
        )}
      </button>
    </header>
  )
}
