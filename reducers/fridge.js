const defaultState = []
export default (state=defaultState, action) => {
  switch(action.type) {

    case 'ADD_FOOD':
      return [
        ...state,
        action.food
      ];
      break;

    case 'REMOVE_FOOD':
      return state.filter(({ id }) => id !== action.id);
      break;

    case 'UPDATE_FOOD':
      return state.map((food) => food.id === action.id ? { ...food, ...action.updates } : food);
      break;

    case 'SET_FOOD':
      return action.foodList;
      break;

    default:
      return state;
      break;
  }
}