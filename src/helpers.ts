const PARAM_NAME = 'word'

export function getTextFromQueryParam() {
  const urlParams = new URLSearchParams(window.location.search)
  const text = urlParams.get(PARAM_NAME)

  return text
}

export function setWindowLocationSearch(text: string) {
  window.history.replaceState(
    {},
    '',
    text.length > 0 ? `?${PARAM_NAME}=${text}` : window.location.pathname
  )
}