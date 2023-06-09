export interface User {
  id: number
  name?: string
  url: string
  description?: string
  link?: string
  slug?: string
  avatar_urls?: { [key: string]: string }
  meta?: any[]
  user_email: string
  acf?: Acf
  _links?: Links
  email?: string //Added for react hook form, use user_email instead
}

export interface Links {
  self?: Collection[]
  collection?: Collection[]
}

export interface Collection {
  href?: string
}

export interface Acf {
  linkedin?: string
  is_mentor?: boolean
  profile_picture?: ProfilePicture
  job?: string
  city?: string
  country?: string
  about_me?: string
  company?: string
  specialisations?: string[]
  seniority_level?: string
  years_of_experience?: string
  cs_skills?: string[]
  extra_skills?: string[]
  languages?: string[]
  price?: string
}

export interface ProfilePicture {
  ID?: number
  id: number
  title?: string
  filename?: string
  filesize?: number
  url?: string
  link?: string
  alt?: string
  author?: string
  description?: string
  caption?: string
  name?: string
  status?: string
  uploaded_to?: number
  date?: Date
  modified?: Date
  menu_order?: number
  mime_type?: string
  type?: string
  subtype?: string
  icon?: string
  width?: number
  height?: number
  sizes?: Sizes
}

export interface Sizes {
  thumbnail?: string
  'thumbnail-width'?: number
  'thumbnail-height'?: number
  medium?: string
  'medium-width'?: number
  'medium-height'?: number
  medium_large?: string
  'medium_large-width'?: number
  'medium_large-height'?: number
  large?: string
  'large-width'?: number
  'large-height'?: number
  '1536x1536'?: string
  '1536x1536-width'?: number
  '1536x1536-height'?: number
  '2048x2048'?: string
  '2048x2048-width'?: number
  '2048x2048-height'?: number
}
