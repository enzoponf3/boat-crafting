import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/crafting')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/crafting"!</div>
}
