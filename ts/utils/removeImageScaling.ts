// Regular expression to match the `/c_scale,...` part including the preceding /
export const scaledImageRegex = /\/c_scale,[^\/]+/

export const removeImageScaling = (url: string) => {
  return url.replace(scaledImageRegex, '')
}
