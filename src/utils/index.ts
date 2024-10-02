export const scrollPageToTopOnHashChange = () => {
  const onHashChange = () => {
    window.scrollTo(0, 0)
  }

  window.addEventListener('hashchange', onHashChange)
  return () => {
    window.removeEventListener('hashchange', onHashChange)
  }
}
