export const config = {
  apiBaseUrl: '',
  // @ts-ignore
  nonce: wpApiSettings?.nonce,
  // @ts-ignore
  faunaKey: wpApiSettings?.faunaKey,
  // @ts-ignore
  themeFolder: wpApiSettings?.themeFolder,
}

export const endPoints = {
  users: '/wp-json/wp/v2/users',
}
