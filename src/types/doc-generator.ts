type PageSize = "A4"
export interface PageOptions {
  margin?: number | [number, number] | [number, number, number, number]
  font?: DocGeneratorOptionsFont
  fontColor?: string
  pageSize?: PageSize
  header?: object
  footer?: object
}

interface DocGeneratorOptionsFont {
  size?: 20
}
