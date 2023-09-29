const activeTabIndex = (state = 99, action: any) => {
  switch (action.type) {
    case "ASC99":
      return state + 2;
    case "DESC99":
      return state - 2;
    default:
      return state
  }
}

export default activeTabIndex;