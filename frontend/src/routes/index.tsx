import { useMemo, useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'

import { useCategories } from '../lib/hooks/useCategories'
import { useFilteredCategories } from '../lib/hooks/useFilteredCategories'
import { useExpandedState } from '../lib/hooks/useExpandedState'

import { Disclaimer } from '../lib/components/disclaimer/Disclaimer'
import { PageHeader } from '../lib/components/pageHeader/PageHeader'
import { SearchControls } from '../lib/components/searchControls/SearchControls'
import { DatasetTable } from '../lib/components/datasetTable/DatasetTable'

const DEFAULT_CATEGORY_FILTER: string = 'All'

const Home = () => {
  const { categories, loading, error } = useCategories()
  const [globalFilter, setGlobalFilter] = useState('')
  const [categoryFilter, setCategoryFilter] = useState(DEFAULT_CATEGORY_FILTER) // 'All' for no filter, default option
  const { expanded, toggleCategory } = useExpandedState(categories)

  // Generate category options for the dropdown, memoized to avoid unnecessary recalculations (Not required, small sampleset, but good practice for larger datasets)
  const categoryOptions = useMemo(
    () => [DEFAULT_CATEGORY_FILTER, ...categories.map((c) => c.name)],
    [categories],
  )

  const grouped = useFilteredCategories(
    categories,
    globalFilter,
    categoryFilter,
  )

  return (
    <main className="p-8 space-y-6">
      <section className="space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <PageHeader
            title="Dataset Explorer"
            description="Browse the dataset. Search by procedure name or category, and filter by category."
          />
          <SearchControls
            searchValue={globalFilter}
            onSearchChange={setGlobalFilter}
            categoryValue={categoryFilter}
            onCategoryChange={setCategoryFilter}
            categoryOptions={categoryOptions}
          />
        </div>

        {loading ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-700 shadow-sm">
            Loading dataset…
          </div>
        ) : error ? (
          <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6 text-rose-900 shadow-sm">
            {error}
          </div>
        ) : (
          <DatasetTable
            groups={grouped}
            expanded={expanded}
            onToggleCategory={toggleCategory}
            isEmpty={grouped.length === 0}
          />
        )}
      </section>
      <Disclaimer />

    </main>
  )
}

export const Route = createFileRoute('/')({ component: Home })
