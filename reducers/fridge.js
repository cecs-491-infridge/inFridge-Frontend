const defaultState = []
export default (state=defaultState, action) => {
  switch(action.type) {

    case 'ADD_FOOD':
      return [
        ...state,
        action.food
      ];
      break;

    case 'DELETE_FOOD':
    console.log("DELTE FOODDDODDODODOO")
    console.log(state);
      return state.filter(({ _id }) => {
        console.log(`${_id} !== ${action.id}`)
        return _id !== action.id
      });
      break;

    case 'UPDATE_FOOD':
      return state.map((food) => food.id === action.id ? { ...food, ...action.updates } : food);
      break;

    case 'SET_FOOD':
      console.log('FRIDGE REDUCER SET FOOD---------------------------------')
      console.log(action.food);
      return action.food ? action.food : defaultState;
      break;

    default:
      return state;
      break;
  }
}