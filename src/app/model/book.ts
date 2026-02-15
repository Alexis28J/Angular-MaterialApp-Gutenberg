// export interface Root {
//   count: number
//   next: string
//   previous: any
//   results: Result[]
// }

export interface Book {
  id: number
  title: string
  authors: Author[]
  summaries: string[]
  editors: any[]
  translators: Translator[]
  subjects: string[]
  bookshelves: string[]
  languages: string[]
  copyright: boolean
  media_type: string
  formats: Formats
  download_count: number
}

export interface Author {
  name: string
  birth_year?: number
  death_year?: number
}

export interface Translator {
  name: string
  birth_year: number
  death_year: number
}

export interface Formats {
  "text/html": string
  "application/epub+zip": string
  "application/x-mobipocket-ebook": string
  "application/rdf+xml": string
  "image/jpeg": string
  "application/octet-stream": string
  "text/plain; charset=utf-8"?: string
  "text/plain; charset=us-ascii"?: string
  "text/html; charset=utf-8"?: string
}
