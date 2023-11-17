export const config = {
  apiBaseUrl: '',
  // @ts-ignore
  nonce: wpApiSettingsStef?.nonce,
  // @ts-ignore
  faunaKey: wpApiSettingsStef?.faunaKey,
  // @ts-ignore
  themeFolder: wpApiSettingsStef?.themeFolder,
  // @ts-ignore
  userLoggedIn: wpApiSettingsStef?.userLoggedIn ? true : false,
}

export const paths = {
  login: '/wp-login.php',
  lostPassword: '/wp-login.php?action=lostpassword',
}

export const endPoints = {
  users: '/wp-json/wp/v2/users',
  media: '/wp-json/wp/v2/media',
}
