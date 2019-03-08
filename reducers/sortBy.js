const defaultState = {
    fridgeSortBy: 'expirationDate'
};
export default (state=defaultState, action) => {
  switch(action.type) {

    case 'SET_FRIDGE_SORT_BY':
        return {
        ...state,
        fridge: action.sortBy
        }

    default:
        return state;
  }
}
