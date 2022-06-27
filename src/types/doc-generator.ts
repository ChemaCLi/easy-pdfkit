export interface DocGeneratorOptions {
  margin?: number | [number, number] | [number, number, number, number]
  font?: DocGeneratorOptionsFont
  color?: string
}

interface DocGeneratorOptionsFont {
  size?: 20
}
