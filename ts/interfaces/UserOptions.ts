export interface UserOptions {
  id: Capabilities
  username: Capabilities
  name: Capabilities
  first_name: Capabilities
  last_name: Capabilities
  email: Capabilities
  url: Capabilities
  description: Capabilities
  link: Capabilities
  locale: Capabilities
  nickname: Capabilities
  slug: Capabilities
  registered_date: Capabilities
  roles: Capabilities
  password: Capabilities
  capabilities: Capabilities
  extra_capabilities: Capabilities
  avatar_urls: AvatarUrls
  meta: Capabilities
  acf: Acf
}

export interface Acf {
  description: string
  type: AcfType
  properties: AcfProperties
}

export interface AcfProperties {
  linkedin: FreeText
  is_mentor: IsMentor
  profile_picture: Image
  job: FreeText
  city: FreeText
  about_me: FreeText
  company: FreeText
  specialisations: SelectData
  seniority_level: SelectData
  years_of_experience: SelectData
  cs_skills: SelectData
  extra_skills: SelectData
  languages: SelectData
}

export interface Image {
  type: TypeElement[]
  required: boolean
}
export interface FreeText {
  type: TypeElement[]
  required: boolean
}

export enum TypeElement {
  Integer = 'integer',
  Null = 'null',
  String = 'string',
}

export interface SelectData {
  type: string[]
  required: boolean
  items: SelectItems
  minItems: number
  default: any[]
}

export interface SelectItems {
  type: string[]
  enum: object
}

export interface IsMentor {
  type: string[]
  required: boolean
  default: boolean
}

export enum AcfType {
  Array = 'array',
  Integer = 'integer',
  Object = 'object',
  String = 'string',
}

export interface AvatarUrls {
  description: string
  type: AcfType
  context: Context[]
  readonly: boolean
  properties: { [key: string]: Capabilities }
}

export enum Context {
  Edit = 'edit',
  Embed = 'embed',
  View = 'view',
}

export interface PersistedPreferencesProperties {
  _modified: Capabilities
}

export interface PersistedPreferences {
  type: AcfType
  description: string
  default: any[]
  context: Context[]
  properties: PersistedPreferencesProperties
  additionalProperties: boolean
}

export interface CapabilitiesProperties {
  persisted_preferences: PersistedPreferences
}

export interface Capabilities {
  description: string
  type: AcfType
  format?: string
  context?: Context[]
  readonly?: boolean
  required?: boolean
  enum?: string[]
  properties?: CapabilitiesProperties
  items?: CapabilitiesItems
}

export interface CapabilitiesItems {
  type: TypeElement
}
