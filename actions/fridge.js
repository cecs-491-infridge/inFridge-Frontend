import axios from 'axios';

const addFood = (food) => ({
  type: 'ADD_FOOD',
  food
});
export const startAddFood = (data = {}) => {
  console.log('In food actions')

  return async (dispatch) => {
    const {
      userId,
      name,
      expirationDate
    } = data;
    const food = { userId, name, expirationDate };

    // Need user id to do this
    // WAIT FOR VICTORIA TO GET USER ID

    // await axios.post(`localhost:3000/add-food`, {
    //      ...food
    // });

    dispatch(addFood(food));
  }
}

const removeFood = (id) => ({
  type: 'REMOVE_FOOD',
  id
})
export const startRemoveFood = (id) => {
  return async (dispatch) => {
    // await axios.delete(`localhost:3000/delete-food`, {
    //      id
    // });
    dispatch(removeFood(id));
  }
}

const updateFood = (id, updates) => ({
  type: 'UPDATE_FOOD',
  id,
  updates
});
export const startUpdateFood = (id, updates) => {
  return async (dispatch) => {
    // await axios.post(`localhost:3000/change-food`, {
    //      id,
    //      ...updates
    // });

    dispatch(updateFood(id, updates));
  }
}

const setFood = (food) => ({
  type: 'SET_FOOD',
  food
})
export const startSetFood = () => {
  return (dispatch) => {
        return axios.get('http://school.corg.network:3000/all-food')
            .then(food => {
              console.log('------------------------------------------------------------------')
              console.log(food.data.data)
              dispatch(setFood(food.data.data));
            })
            .catch(err => {
                console.log(err);
            });
  }
}
