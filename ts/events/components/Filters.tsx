import { clsx } from 'clsx'
import { ChangeEvent } from 'react'
import { CalendarRegular } from '../../icons/CalendarRegular'
import { LocationDot } from '../../icons/LocationDot'
import { MagnifyingGlass } from '../../icons/MagnyingGlass'

interface FiltersProps {
  name?: string
  date?: string
  location?: string
  dateOptions: string[]
  locationOptions: string[]
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
}

export const Filters = ({
  name,
  date,
  location,
  dateOptions,
  locationOptions,
  onChange,
}: FiltersProps) => (
  <div className="filters">
    <div className="filters__input">
      <MagnifyingGlass />
      <input
        className="filters__text"
        type="text"
        placeholder="Search by name"
        value={name}
        name="name"
        onChange={onChange}
      />
    </div>
    <div className="filters__input">
      <CalendarRegular />
      <select
        value={date}
        name="date"
        onChange={onChange}
        className={clsx('filters__select', date === '' && 'placeholder')}
      >
        <option value="">Filter by date</option>
        {dateOptions.map((date) => (
          <option key={date} value={date}>
            {date}
          </option>
        ))}
      </select>
    </div>
    <div className="filters__input">
      <LocationDot />
      <select
        value={location}
        name="location"
        onChange={onChange}
        className={clsx('filters__select', location === '' && 'placeholder')}
      >
        <option value="">Filter by location</option>
        {locationOptions.map((location) => (
          <option key={location} value={location}>
            {location}
          </option>
        ))}
      </select>
    </div>
  </div>
)
