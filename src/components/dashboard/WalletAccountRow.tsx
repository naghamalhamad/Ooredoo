interface WalletAccountRowProps {
  name: string
  operator: string
  balance: string
}

export default function WalletAccountRow({ name, operator, balance }: WalletAccountRowProps) {
  return (
    <div className="flex items-center justify-between rounded-[4px] bg-rose-50 px-3 py-2.5 hover:bg-rose-100 transition-colors">
      <div>
        <p className="text-sm font-medium text-gray-900">{name}</p>
        <p className="text-xs text-gray-400">{operator}</p>
      </div>
      <p className="text-sm font-semibold text-gray-900">{balance}</p>
    </div>
  )
}
