import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faTableCellsLarge, faBell } from '@fortawesome/free-solid-svg-icons'
import ooredooLogo from '../../../Vector.svg'

interface TopBarProps {
  onProfileClick?: () => void
  onNotificationClick?: () => void
}

export default function TopBar({ onProfileClick, onNotificationClick }: TopBarProps) {
  return (
    <div className="bg-[#E4002B]">
      <div className="flex items-center justify-between px-4 pb-1 pt-2 text-sm font-semibold text-white">
        <span>19:02</span>
        <div className="flex items-center gap-1.5">
          <svg viewBox="0 0 20 14" className="h-3.5 w-5" fill="currentColor">
            <rect x="0" y="9" width="3" height="5" rx="0.5" />
            <rect x="5" y="6" width="3" height="8" rx="0.5" />
            <rect x="10" y="3" width="3" height="11" rx="0.5" />
            <rect x="15" y="0" width="3" height="14" rx="0.5" />
          </svg>
          <span className="text-xs font-bold">LTE</span>
          <svg viewBox="0 0 25 13" className="h-3 w-6">
            <rect x="0.5" y="0.5" width="20" height="12" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1" />
            <rect x="2" y="2" width="17" height="9" rx="1.2" fill="currentColor" />
            <rect x="21.5" y="4" width="2" height="5" rx="1" fill="currentColor" />
          </svg>
        </div>
      </div>
      <div className="flex items-center justify-between px-4 py-3">
        <button
          type="button"
          onClick={onProfileClick}
          className="flex h-6 w-6 items-center justify-center text-white hover:opacity-80 transition-opacity"
          aria-label="Open profile"
        >
          <FontAwesomeIcon icon={faCircleUser} className="text-xl" />
        </button>
        <img src={ooredooLogo} alt="ooredoo" className="h-[18px] w-auto" />
        <div className="flex items-center gap-4">
          <button type="button" className="flex text-white hover:opacity-80 transition-opacity" aria-label="Scan">
            <FontAwesomeIcon icon={faTableCellsLarge} className="text-lg" />
          </button>
          <button
            type="button"
            onClick={onNotificationClick}
            className="relative flex text-white hover:opacity-80 transition-opacity"
            aria-label="Notifications"
          >
            <FontAwesomeIcon icon={faBell} className="text-lg" />
            <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-amber-400" />
          </button>
        </div>
      </div>
    </div>
  )
}
