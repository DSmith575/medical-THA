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