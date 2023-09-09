const reducer = (state = 1, action: any) => {
  switch (action.type) {
    case "ASC":
      return state + 1;
    case "DESC":
      return state - 1;
    default:
      return state
  }
}

export default reducer;