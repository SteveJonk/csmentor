export const toSentence = (str: string) =>
  str.replace(/_/g, ' ').replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())
