// Bug with Redux-Persist
// Requires Map as initial State
const defaultState = {
  list: []
}
export default (state=defaultState, action) => {
  switch(action.type) {

    case 'ADD_FOOD':
      return {
        ...state,
        list: [
          action.food,
          ...state.list
        ]
      };
      break;

    case 'DELETE_FOOD':
      console.log("DELTE FOODDDODDODODOO")
      console.log(state);
      console.log(action)

      return {
        ...state,
        list: state.list.filter(({ _id }) => _id !== action.id)
      }

    case 'UPDATE_FOOD':
      return {
        ...state,
        list: state.list.map((item) => item._id === action.id ? { ...item, ...action.updates } : item)
      }

    case 'SET_FOOD':
      console.log('FRIDGE REDUCER SET FOOD---------------------------------')
      console.log(action.food);
      return {
        ...state,
        list: action.food ? action.food : []
      }

    default:
      return state;
      break;
  }
}