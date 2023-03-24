export interface User {
  id: number
  name: string
  url: string
  description: string
  link: string
  slug: string
  avatar_urls: { [key: string]: string }
  meta: any[]
  acf: any[]
  _links: Links
  user_email?: string
}

export interface Links {
  self: Collection[]
  collection: Collection[]
}

export interface Collection {
  href: string
}
