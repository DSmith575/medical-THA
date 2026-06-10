import { Fragment } from 'react'
import type { DatasetTableProps } from '../../interfaces/interfaces'

const columns = [
  { key: 'name', header: 'Procedure' },
  { key: 'doseMsv', header: 'mSv Dose' },
  { key: 'backgroundEquivalent', header: 'Background Equivalent' },
] as const

export const DatasetTable = ({
  groups,
  expanded,
  onToggleCategory,
  isEmpty,
}: DatasetTableProps) => (
  <section>
    <table className="min-w-full border-collapse bg-white text-left text-sm text-slate-700">
      <thead className="bg-slate-100 text-slate-900">
        <tr>
          {columns.map((col) => (
            <th key={col.key} className="px-6 py-4 font-semibold">
              {col.header}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {isEmpty ? (
          <tr>
            <td
              colSpan={columns.length}
              className="px-6 py-10 text-center text-slate-500"
            >
              No records match your search.
            </td>
          </tr>
        ) : (
          groups.map(({ category, procedures }) => (
            <Fragment key={category.id}>
              <tr
                className="cursor-pointer select-none"
                onClick={() => onToggleCategory(category.name)}
              >
                <td
                  colSpan={columns.length}
                  className="px-6 py-4 font-semibold"
                >
                  <span className="mr-2 inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 text-sm">
                    {expanded[category.name] ? '▾' : '▸'}
                  </span>
                  {category.name}
                  <span className="ml-2 font-normal text-slate-500">
                    ({procedures.length} procedure
                    {procedures.length !== 1 ? 's' : ''})
                  </span>
                </td>
              </tr>

              {expanded[category.name] &&
                procedures.map((procedure) => (
                  <tr key={procedure.id}>
                    <td className="px-6 py-4 align-top">{procedure.name}</td>
                    <td className="px-6 py-4 align-top">{procedure.doseMsv}</td>
                    <td className="px-6 py-4 align-top">
                      {procedure.backgroundEquivalent}
                    </td>
                  </tr>
                ))}
            </Fragment>
          ))
        )}
      </tbody>
    </table>
  </section>
)
