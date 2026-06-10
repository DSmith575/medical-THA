import { createFileRoute } from '@tanstack/react-router'
import { useCategories } from '../lib/hooks/useCategories'

const Home = () => {
  const { categories, loading, error } = useCategories()

  console.log(categories)
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">Welcome to TanStack Start</h1>
      <p className="mt-4 text-lg">
        Edit <code>src/routes/index.tsx</code> 
      </p>
    </div>
  )
}
export const Route = createFileRoute('/')({ component: Home })

