export type IconName =
  | 'voucher'
  | 'history'
  | 'report'
  | 'bundle'
  | 'creditTransfer'
  | 'billPayment'
  | 'wallet'
  | 'merge'
  | 'snowflake'
  | 'gift'
  | 'sim'
  | 'refresh'
  | 'handshake'
  | 'server'
  | 'arrowSwap'
  | 'resubmit'
  | 'clipboard'
  | 'userForm'
  | 'box'
  | 'router'
  | 'esim'
  | 'cart'
  | 'undo'
  | 'hierarchy'
  | 'checkIn'
  | 'hash'
  | 'ticket'
  | 'onboarding'
  | 'bell'
  | 'user'
  | 'mapPin'
  | 'chevronRight'
  | 'home'
  | 'grid'
  | 'target'
  | 'coin'
  | 'gauge'
  | 'calendar'
  | 'settings'
  | 'logout'
  | 'globe'
  | 'shield'
  | 'help'
  | 'more'
  | 'smiley'
  | 'barChart'
  | 'printer'
  | 'ban'
  | 'send'
  | 'download'
  | 'upload'
  | 'arrowRight'
  | 'arrowLeft'
  | 'close'
  | 'search'
  | 'filter'
  | 'plus'
  | 'info'
  | 'checkCircle'
  | 'flame'

interface IconProps {
  name: IconName
  className?: string
}

const strokeProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export default function Icon({ name, className = 'w-5 h-5' }: IconProps) {
  switch (name) {
    case 'voucher':
      return (
        <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
          <path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1a2 2 0 0 0 0 6v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1a2 2 0 0 0 0-6V8Z" />
          <path d="M10 6v12" strokeDasharray="2 2" />
        </svg>
      )
    case 'history':
      return (
        <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
          <path d="M3 12a9 9 0 1 0 3-6.7" />
          <path d="M3 4v4h4" />
          <path d="M12 8v4l3 2" />
        </svg>
      )
    case 'report':
    case 'clipboard':
      return (
        <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
          <rect x="5" y="4" width="14" height="17" rx="2" />
          <path d="M9 3h6v3H9z" />
          <path d="M8 11h8M8 15h8M8 19h5" />
        </svg>
      )
    case 'bundle':
    case 'gift':
      return (
        <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
          <rect x="3" y="9" width="18" height="11" rx="1.5" />
          <path d="M3 13h18" />
          <path d="M12 9v11" />
          <path d="M12 9C9 9 8 6.5 9.5 5.2 11 4 12 6 12 9Z" />
          <path d="M12 9c3 0 4-2.5 2.5-3.8C13 4 12 6 12 9Z" />
        </svg>
      )
    case 'creditTransfer':
    case 'arrowSwap':
      return (
        <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
          <path d="M4 8h14" />
          <path d="M14 4l4 4-4 4" />
          <path d="M20 16H6" />
          <path d="M10 12l-4 4 4 4" />
        </svg>
      )
    case 'billPayment':
      return (
        <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 10h18" />
          <path d="M7 15h4" />
        </svg>
      )
    case 'wallet':
      return (
        <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
          <path d="M3 7a2 2 0 0 1 2-2h13a1 1 0 0 1 1 1v2" />
          <rect x="3" y="7" width="18" height="12" rx="2" />
          <circle cx="16.5" cy="13.5" r="1.3" />
        </svg>
      )
    case 'merge':
      return (
        <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
          <circle cx="6" cy="6" r="2.3" />
          <circle cx="6" cy="18" r="2.3" />
          <circle cx="18" cy="12" r="2.3" />
          <path d="M8 6h4a4 4 0 0 1 4 4M8 18h4a4 4 0 0 0 4-4" />
        </svg>
      )
    case 'snowflake':
      return (
        <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
          <path d="M12 2v20M4.2 6.5l15.6 11M4.2 17.5l15.6-11" />
        </svg>
      )
    case 'sim':
      return (
        <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
          <path d="M8 3h9a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7l2-4Z" />
          <path d="M9 11h6v5H9z" />
        </svg>
      )
    case 'refresh':
      return (
        <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
          <path d="M4 12a8 8 0 0 1 14-5.3L20 8" />
          <path d="M20 4v4h-4" />
          <path d="M20 12a8 8 0 0 1-14 5.3L4 16" />
          <path d="M4 20v-4h4" />
        </svg>
      )
    case 'handshake':
      return (
        <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
          <path d="M3 11l4-3 4 2 3-2 4 3" />
          <path d="M3 11v4l4 3 3-2 2 2 3-2 4 2v-4" />
        </svg>
      )
    case 'server':
      return (
        <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
          <rect x="4" y="4" width="16" height="6" rx="1.2" />
          <rect x="4" y="14" width="16" height="6" rx="1.2" />
          <circle cx="8" cy="7" r="0.6" fill="currentColor" />
          <circle cx="8" cy="17" r="0.6" fill="currentColor" />
        </svg>
      )
    case 'resubmit':
      return (
        <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
          <path d="M4 4v6h6" />
          <path d="M20 20v-6h-6" />
          <path d="M5.5 15a7 7 0 0 0 12.8 2.5M18.5 9A7 7 0 0 0 5.7 6.5" />
        </svg>
      )
    case 'userForm':
      return (
        <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
          <circle cx="12" cy="8" r="3" />
          <path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" />
        </svg>
      )
    case 'box':
      return (
        <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
          <path d="M3 8l9-4 9 4-9 4-9-4Z" />
          <path d="M3 8v8l9 4 9-4V8" />
          <path d="M12 12v8" />
        </svg>
      )
    case 'router':
      return (
        <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
          <rect x="3" y="12" width="18" height="6" rx="1.5" />
          <path d="M7 12V8M12 12V6M17 12V8" />
          <circle cx="7" cy="15" r="0.6" fill="currentColor" />
        </svg>
      )
    case 'esim':
      return (
        <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
          <rect x="5" y="3" width="14" height="18" rx="2" />
          <path d="M9 8h6M9 12h6M9 16h3" />
        </svg>
      )
    case 'cart':
      return (
        <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
          <circle cx="9" cy="20" r="1" />
          <circle cx="17" cy="20" r="1" />
          <path d="M3 4h2l2.2 11.4A2 2 0 0 0 9.2 17h7.6a2 2 0 0 0 2-1.6L20 8H6" />
        </svg>
      )
    case 'undo':
      return (
        <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
          <path d="M9 14l-4-4 4-4" />
          <path d="M5 10h9a5 5 0 0 1 0 10h-2" />
        </svg>
      )
    case 'hierarchy':
      return (
        <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
          <circle cx="12" cy="5" r="2" />
          <circle cx="6" cy="19" r="2" />
          <circle cx="18" cy="19" r="2" />
          <path d="M12 7v5M12 12l-6 5M12 12l6 5" />
        </svg>
      )
    case 'checkIn':
      return (
        <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
          <rect x="3" y="4" width="18" height="17" rx="2" />
          <path d="M3 9h18" />
          <path d="M8 13l2 2 4-4" />
        </svg>
      )
    case 'hash':
      return (
        <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
          <path d="M9 4L7 20M17 4l-2 16M4 9h16M3.5 15h16" />
        </svg>
      )
    case 'ticket':
      return (
        <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
          <path d="M3 9a2 2 0 0 1 0-4h18a2 2 0 0 1 0 4 2 2 0 0 0 0 6 2 2 0 0 1 0 4H3a2 2 0 0 1 0-4 2 2 0 0 0 0-6Z" />
        </svg>
      )
    case 'onboarding':
      return (
        <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
          <circle cx="9" cy="8" r="3" />
          <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
          <path d="M17 8h4M19 6v4" />
        </svg>
      )
    case 'bell':
      return (
        <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
          <path d="M6 9a6 6 0 1 1 12 0c0 4 1.5 5.5 1.5 5.5H4.5S6 13 6 9Z" />
          <path d="M10 19a2 2 0 0 0 4 0" />
        </svg>
      )
    case 'user':
      return (
        <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
          <circle cx="12" cy="8" r="3.5" />
          <path d="M4.5 20c1-4 4-6 7.5-6s6.5 2 7.5 6" />
        </svg>
      )
    case 'mapPin':
      return (
        <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
          <path d="M12 21s7-6.4 7-11.5A7 7 0 0 0 5 9.5C5 14.6 12 21 12 21Z" />
          <circle cx="12" cy="9.5" r="2.3" />
        </svg>
      )
    case 'chevronRight':
      return (
        <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
          <path d="M9 5l7 7-7 7" />
        </svg>
      )
    case 'home':
      return (
        <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
          <path d="M4 11l8-7 8 7" />
          <path d="M6 10v9h12v-9" />
        </svg>
      )
    case 'grid':
      return (
        <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
          <rect x="4" y="4" width="7" height="7" rx="1" />
          <rect x="13" y="4" width="7" height="7" rx="1" />
          <rect x="4" y="13" width="7" height="7" rx="1" />
          <rect x="13" y="13" width="7" height="7" rx="1" />
        </svg>
      )
    case 'target':
      return (
        <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="12" cy="12" r="0.6" fill="currentColor" />
        </svg>
      )
    case 'coin':
      return (
        <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v8M9.5 10a2.5 2 0 0 1 2.5-1.5c1.5 0 2.5.8 2.5 2s-1 1.5-2.5 1.5-2.5.5-2.5 1.7 1 2 2.5 2a2.6 2 0 0 0 2.5-1.5" />
        </svg>
      )
    case 'gauge':
      return (
        <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
          <path d="M4 15a8 8 0 1 1 16 0" />
          <path d="M12 15l4-5" />
          <circle cx="12" cy="15" r="1" fill="currentColor" />
        </svg>
      )
    case 'calendar':
      return (
        <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M3 10h18M8 3v4M16 3v4" />
        </svg>
      )
    case 'settings':
      return (
        <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1.04 1.56V21a2 2 0 1 1-4 0v-.09A1.7 1.7 0 0 0 8.96 19.4a1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.7 1.7 0 0 0 .34-1.87 1.7 1.7 0 0 0-1.56-1.04H3a2 2 0 1 1 0-4h.09A1.7 1.7 0 0 0 4.6 8.96a1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.7 1.7 0 0 0 1.87.34H9a1.7 1.7 0 0 0 1.04-1.56V3a2 2 0 1 1 4 0v.09a1.7 1.7 0 0 0 1.04 1.56 1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.7 1.7 0 0 0-.34 1.87V9a1.7 1.7 0 0 0 1.56 1.04H21a2 2 0 1 1 0 4h-.09a1.7 1.7 0 0 0-1.56 1.04Z" />
        </svg>
      )
    case 'logout':
      return (
        <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
          <path d="M16 17l5-5-5-5" />
          <path d="M21 12H9" />
        </svg>
      )
    case 'globe':
      return (
        <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z" />
        </svg>
      )
    case 'shield':
      return (
        <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
          <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6Z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      )
    case 'help':
      return (
        <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
          <circle cx="12" cy="12" r="9" />
          <path d="M9.5 9a2.5 2.5 0 0 1 4.9.8c0 1.7-2.4 1.9-2.4 3.5" />
          <circle cx="12" cy="17" r="0.6" fill="currentColor" />
        </svg>
      )
    case 'smiley':
      return (
        <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="9" cy="10" r="0.6" fill="currentColor" />
          <circle cx="15" cy="10" r="0.6" fill="currentColor" />
          <path d="M8 14.5c1 1.5 2.5 2.2 4 2.2s3-.7 4-2.2" />
        </svg>
      )
    case 'barChart':
      return (
        <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
          <path d="M4 20V10M10 20V4M16 20v-7M4 20h16" />
        </svg>
      )
    case 'printer':
      return (
        <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
          <path d="M6 9V4h12v5" />
          <rect x="4" y="9" width="16" height="7" rx="1.5" />
          <rect x="7" y="14" width="10" height="6" rx="1" />
        </svg>
      )
    case 'ban':
      return (
        <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
          <circle cx="12" cy="12" r="9" />
          <path d="M5.5 5.5l13 13" />
        </svg>
      )
    case 'send':
      return (
        <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
          <path d="M3 11l18-8-8 18-2.5-7.5L3 11Z" />
        </svg>
      )
    case 'download':
      return (
        <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
          <path d="M12 4v10" />
          <path d="M8 10l4 4 4-4" />
          <path d="M4 18h16" />
        </svg>
      )
    case 'upload':
      return (
        <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
          <path d="M12 18V8" />
          <path d="M8 12l4-4 4 4" />
          <path d="M4 18h16" />
        </svg>
      )
    case 'arrowRight':
      return (
        <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
          <path d="M4 12h16M14 6l6 6-6 6" />
        </svg>
      )
    case 'arrowLeft':
      return (
        <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
          <path d="M20 12H4M10 6l-6 6 6 6" />
        </svg>
      )
    case 'close':
      return (
        <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      )
    case 'search':
      return (
        <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
          <circle cx="11" cy="11" r="7" />
          <path d="M20 20l-4.35-4.35" />
        </svg>
      )
    case 'filter':
      return (
        <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
          <path d="M4 5h16l-6 7.5V19l-4 2v-8.5L4 5Z" />
        </svg>
      )
    case 'plus':
      return (
        <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
          <path d="M12 5v14M5 12h14" />
        </svg>
      )
    case 'info':
      return (
        <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 11v5" />
          <circle cx="12" cy="8" r="0.6" fill="currentColor" />
        </svg>
      )
    case 'checkCircle':
      return (
        <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
          <circle cx="12" cy="12" r="9" />
          <path d="M8 12.5l2.5 2.5L16 9.5" />
        </svg>
      )
    case 'flame':
      return (
        <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
          <path d="M12 3s-5 4.5-5 9a5 5 0 0 0 10 0c0-1.5-.7-2.5-1.3-3.3.2 1.3-.4 2-1 2.3.4-2-1-3.5-1-5.5-.5 1-1.7 1.8-1.7 2.5Z" />
        </svg>
      )
    case 'more':
    default:
      return (
        <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
          <circle cx="5" cy="12" r="1.2" fill="currentColor" />
          <circle cx="12" cy="12" r="1.2" fill="currentColor" />
          <circle cx="19" cy="12" r="1.2" fill="currentColor" />
        </svg>
      )
  }
}
