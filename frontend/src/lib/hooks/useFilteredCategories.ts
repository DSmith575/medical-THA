import { useMemo } from 'react'
import type { Category, GroupedCategory } from '../interfaces/interfaces'

// Custom hook to filter categories and procedures based on search and category filters
export const useFilteredCategories = (
    categories: Category[],
    searchFilter: string,
    categoryFilter: string,
): GroupedCategory[] => {
    return useMemo(() => {
        const normalizedSearch = searchFilter.trim().toLowerCase()

        return categories
            .filter((c) => categoryFilter === 'All' || c.name === categoryFilter)
            .map((category) => ({
                category,
                procedures: category.procedures.filter((procedure) => {
                    if (!normalizedSearch) return true
                    return (
                        procedure.name.toLowerCase().includes(normalizedSearch) ||
                        procedure.backgroundEquivalent.toLowerCase().includes(normalizedSearch) ||
                        category.name.toLowerCase().includes(normalizedSearch)
                    )
                }),
            }))
            .filter((groupedCategory) => groupedCategory.procedures.length > 0)
    }, [categories, searchFilter, categoryFilter])
}
