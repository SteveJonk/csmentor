export interface Event {
  success?: boolean
  data?: EventData[]
}

export interface EventData {
  object?: 'event'
  id?: string
  access_code?: null
  call_to_action?: CallToAction
  chk?: string
  created_at?: number
  currency?: Currency
  description?: string
  end?: End
  event_series_id?: string
  hidden?: string
  images?: Images
  name?: string
  online_event?: string
  payment_methods?: PaymentMethod[]
  private?: string
  start?: End
  status?: EventDataStatus
  ticket_groups?: any[]
  ticket_types?: TicketType[]
  tickets_available?: string
  timezone?: EventDataTimezone
  total_holds?: number
  total_issued_tickets?: number
  total_orders?: number
  unavailable?: string
  unavailable_status?: null
  url?: string
  venue?: Venue
}

export type CallToAction = 'Select tickets' | 'Buy tickets' | 'Sold out'

export type Currency = 'eur' | 'chf' | 'dkk' | 'sek' | 'ron'

export interface End {
  date?: Date
  formatted?: string
  iso?: Date
  time?: string
  timezone?: EndTimezone
  unix?: number
}

export type EndTimezone = '+02:00' | '+01:00'

export interface Images {
  header?: string
  thumbnail?: string
}

export interface PaymentMethod {
  id?: 'pm_105186'
  external_id?: 'acct_1N4jFFAKFBLRXrCg'
  instructions?: null
  name?: null
  type?: 'stripe'
}

export type EventDataStatus = 'published' | 'draft'

export interface TicketType {
  object?: 'ticket_type'
  id?: string
  access_code?: null | string
  booking_fee?: number
  description?: null | string
  group_id?: null
  max_per_order?: number
  min_per_order?: number | string
  name?: string
  price?: number
  quantity?: number
  quantity_held?: number
  quantity_issued?: number
  quantity_total?: number
  sort_order?: number
  status?: TicketTypeStatus
  type?: 'GA'
}

export type TicketTypeStatus = 'on_sale' | 'locked'

export type EventDataTimezone = 'Europe/Amsterdam' | 'Europe/Stockholm' | 'Europe/Paris'

export interface Venue {
  name?: null | string
  postal_code?: null | string
}
