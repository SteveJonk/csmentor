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
  linkedin: AboutMe
  is_mentor: IsMentor
  profile_picture: AboutMe
  job: AboutMe
  city: AboutMe
  about_me: AboutMe
  company: AboutMe
  specialisations: Specialisations
  seniority_level: SeniorityLevel
  years_of_experience: YearsOfExperience
  cs_skills: CSSkills
  extra_skills: ExtraSkills
  languages: Languages
}

export interface AboutMe {
  type: TypeElement[]
  required: boolean
}

export enum TypeElement {
  Integer = 'integer',
  Null = 'null',
  String = 'string',
}

export interface CSSkills {
  type: string[]
  required: boolean
  items: CSSkillsItems
  minItems: number
  default: any[]
}

export interface CSSkillsItems {
  type: string[]
  enum: PurpleEnum
}

export interface PurpleEnum {
  Engagement: string
  'Customer Journey': string
  Social: string
}

export interface ExtraSkills {
  type: string[]
  required: boolean
  items: ExtraSkillsItems
  minItems: number
  default: any[]
}

export interface ExtraSkillsItems {
  type: string[]
  enum: FluffyEnum
}

export interface FluffyEnum {
  Presenting: string
  'Creative Writing': string
  Storytelling: string
}

export interface IsMentor {
  type: string[]
  required: boolean
  default: boolean
}

export interface Languages {
  type: string[]
  required: boolean
  items: LanguagesItems
  minItems: number
  default: any[]
}

export interface LanguagesItems {
  type: string[]
  enum: TentacledEnum
}

export interface TentacledEnum {
  Dutch: string
  English: string
  French: string
  German: string
  Italian: string
  Spanish: string
}

export interface SeniorityLevel {
  type: string[]
  required: boolean
  items: SeniorityLevelItems
  minItems: number
  maxItems: number
  default: boolean
}

export interface SeniorityLevelItems {
  type: string[]
  enum: StickyEnum
}

export interface StickyEnum {
  Junior: string
  Medior: string
  Senior: string
  Teamlead: string
  CFO: string
  CEO: string
  CTO: string
}

export interface Specialisations {
  type: string[]
  required: boolean
  items: SpecialisationsItems
  minItems: number
  default: any[]
}

export interface SpecialisationsItems {
  type: string[]
  enum: IndigoEnum
}

export interface IndigoEnum {
  IT: string
  Design: string
  'Customer Success': string
}

export interface YearsOfExperience {
  type: string[]
  required: boolean
  items: YearsOfExperienceItems
  minItems: number
  maxItems: number
  default: boolean
}

export interface YearsOfExperienceItems {
  type: string[]
  enum: IndecentEnum
}

export interface IndecentEnum {
  '1-3 years': string
  '3-5 years': string
  '5-8 years': string
  '8-10 years': string
  '10+ years': string
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
