export type Procedure = {
  id: number
  name: string
  doseMsv: number
  backgroundEquivalent: string
}

export type Category = {
  id: number
  name: string
  procedures: Procedure[]
}

export type UseCategoriesReturn = {
  categories: Category[]
  loading: boolean
  error: string | null
}

export interface GroupedCategory {
  category: Category
  procedures: Category['procedures']
}

export interface DatasetTableProps {
  groups: GroupedCategory[]
  expanded: Record<string, boolean>
  onToggleCategory: (name: string) => void
  isEmpty: boolean
}

export interface PageHeaderProps {
  title: string
  description: string
}

export interface SearchControlsProps {
  searchValue: string
  onSearchChange: (value: string) => void
  categoryValue: string
  onCategoryChange: (value: string) => void
  categoryOptions: string[]
}

export type ProcedureWithCategory = Procedure & { category: Category }
