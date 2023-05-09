export const config = {
  apiBaseUrl: '',
  // @ts-ignore
  nonce: wpApiSettings?.nonce,
  // @ts-ignore
  faunaKey: wpApiSettings?.faunaKey,
  // @ts-ignore
  themeFolder: wpApiSettings?.themeFolder,
  // @ts-ignore
  userLoggedIn: wpApiSettings?.userLoggedIn ? true : false,
}

export const paths = {
  login: '/wp-login.php',
  lostPassword: '/wp-login.php?action=lostpassword',
}

export const endPoints = {
  users: '/wp-json/wp/v2/users',
}
