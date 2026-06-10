import { useEffect, useState } from 'react'
import type { Category, UseCategoriesReturn } from '../interfaces/interfaces'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:3001'

export const useCategories = (): UseCategoriesReturn => {
    const [categories, setCategories] = useState<Category[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/api/categories`)
                if (!response.ok) throw new Error(`HTTP ${response.status}`)
                const data: Category[] = await response.json()
                setCategories(data)
            } catch (err) {
                setError(
                    `Unable to load dataset. Please make sure the backend is running at ${API_BASE_URL}.`
                )
                console.error(err)
            } finally {
                setLoading(false)
            }
        }

        fetchCategories()
    }, [])

    return { categories, loading, error }
}
