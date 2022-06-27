import { PageOptions } from "./doc-generator";

export interface Content {
  mode: "content-blocks" | "pages"
  content?: PageContentBlock[]
  pages?: PageModeOptions[]
}

interface PageContentBlock {
  text?: string
  columns?: TableColumn[]
  imageOptions?: ImageOptions
  tableOptions?: TableOptions
  type?: "paragraph" | "columns" | "image" | "list" | "table"
}

interface ImageOptions {
  url?: string
  buffer?: string
  width?: string
  height?: string
  align?: string
}

interface TableOptions {
  borderRadius?: number
  headerStyle?: {
    backgroundColor?: string
    borderColor?: string
    borderWidth?: number | [number, number] | [number, number, number, number]
  }
}

interface PageModeOptions {
  config?: PageOptions
  content?: PageContentBlock[]
}

type TableColumn = TextOptions & {
  title?: string
}

interface TextOptions {
  color?: string
}
