const defaultState = []
export default (state=defaultState, action) => {
  switch(action.type) {

    // case 'ADD_FEED':
    //   return [
    //     ...state,
    //     action.feed
    //   ];
    //   break;

    // case 'REMOVE_FEED':
    //   return state.filter(({ id }) => id !== action.id);
    //   break;

    case 'UPDATE_FEED':
      return state.map((feed) => feed.id === action.id ? { ...feed, ...action.updates } : feed);
      break;

    case 'SET_FEED':
      return action.feed;
      break;

    default:
      return state;
      break;
  }
}
