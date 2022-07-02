type PageSize = "A4"
export interface PageOptions {
  orientation?: "portrait" | "landscape"
  margin?: number | [number, number] | [number, number, number, number]
  fontConfig?: DocGeneratorOptionsFont
  pageSize?: PageSize
  header?: object
  footer?: object
}

type DocGeneratorOptionsFont = {
  h1?: FontProperties
} & FontProperties

type FontProperties = {
  size?: number
  color?: string
  font?: string
}
