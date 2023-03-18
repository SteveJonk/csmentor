export const config = {
  apiBaseUrl: '',
  // @ts-ignore
  nonce: wpApiSettings?.nonce,
  // @ts-ignore
  faunaKey: wpApiSettings?.faunaKey,
}

export const endPoints = {
  users: '/wp-json/wp/v2/users',
}
