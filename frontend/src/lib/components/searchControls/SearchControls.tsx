import type {SearchControlsProps} from '../../interfaces/interfaces'

export const SearchControls = ({
  searchValue,
  onSearchChange,
  categoryValue,
  onCategoryChange,
  categoryOptions,
}: SearchControlsProps) => {
  return (
    <section className="flex flex-col gap-3 sm:flex-row">
      <label className="block w-full sm:w-auto">
        <span className="sr-only">Search dataset</span>
        <input
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search procedures or categories"
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-200 sm:w-80"
        />
      </label>
      <select
        value={categoryValue}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-200 sm:w-auto"
      >
        {categoryOptions.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </section>
  )
}
