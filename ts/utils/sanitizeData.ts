import { User } from '../interfaces/User'
import { UserOptions } from '../interfaces/UserOptions'

/**
 * Hacky function to distil only existing answeres in enum values of ACF.
 * If the data structure in ACF changes, this functionality will fall apart.
 *
 * @param data the data that will be submitted
 * @param options all possible user fields, including the acf properties
 */

export const sanitizeData = (data: User, options: UserOptions): User => {
  const acfProperties = options.acf.properties

  const sanitizedACF = Object.entries(data.acf).reduce((acc, [key, value]) => {
    if (Array.isArray(value)) {
      const existingValues = value?.filter((v: string) => {
        return Object.keys(acfProperties[key].items.enum).includes(v)
      })
      return { [key]: existingValues.length > 0 ? existingValues : null, ...acc }
    }

    // Happens when the user has not filled in a single select field
    if (value === false) return { [key]: null, ...acc }

    return { [key]: value, ...acc }
  }, {})

  return { ...data, acf: sanitizedACF }
}
