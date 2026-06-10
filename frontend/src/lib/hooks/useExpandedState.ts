import { useEffect, useState } from 'react'
import type { Category } from '../interfaces/interfaces'

// Custom hook to manage expanded/collapsed state of categories in the dataset table
export const useExpandedState = (categories: Category[]) => {
    const [expanded, setExpanded] = useState<Record<string, boolean>>({})


    useEffect(() => {
        if (categories.length > 0 && Object.keys(expanded).length === 0) {
            setExpanded(Object.fromEntries(categories.map((category) => [category.name, false])))
        }
    }, [categories, expanded])

    const toggleCategory = (name: string) =>
        setExpanded((prev) => ({ ...prev, [name]: !prev[name] }))

    return { expanded, toggleCategory }
}
