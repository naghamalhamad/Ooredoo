import Card from '../ui/Card'

interface GreetingCardProps {
  name: string
  id: string
}

export default function GreetingCard({ name, id }: GreetingCardProps) {
  return (
    <div className="px-4 pt-3">
      <Card className="flex flex-col gap-1">
        <p className="text-lg font-bold text-gray-900">Hello, {name}</p>
        <p className="text-sm text-gray-500">{id}</p>
      </Card>
    </div>
  )
}
