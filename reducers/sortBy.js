const defaultState = {
    fridgeSortBy: 'expiration'
};
export default (state=defaultState, action) => {
  switch(action.type) {

    case 'SET_FRIDGE_SORT_BY':
        return {
        ...state,
        fridgeSortBy: action.sortBy
        }

    default:
        return state;
  }
}
