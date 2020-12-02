export default {
  ABONENTS(state) {
    return state.abonents
  },
  ABONENT(state) {
    return state.abonent
  },
  GROUPS(state) {
    let set = new Set(state.abonents.map(i => i.group))
    return Array.from(set)
  },
  IS_LOGGED: state => !!state.token
}