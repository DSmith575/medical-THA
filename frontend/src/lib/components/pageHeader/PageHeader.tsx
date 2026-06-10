import type { PageHeaderProps } from '../../interfaces/interfaces'

export const PageHeader = ({ title, description }: PageHeaderProps) => {
  return (
    <section>
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  )
}
