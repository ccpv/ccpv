import { SET_TITLE } from './constants'

export default (state = document.title, action) => {
  let title

  switch (action.type) {
    case SET_TITLE:
      title = action.title
      break
    default:
      title = state
  }

  // Update document.title
  document.title = title

  return title
}
