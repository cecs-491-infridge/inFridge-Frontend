import { testUser } from '../testUser';
import axios from 'axios';
const userId = testUser.userId;

const addFood = (food) => ({
  type: 'ADD_FOOD',
  food
});
export const startAddFood = (data = {}) => {
  console.log('Start add food')
  

  return async (dispatch) => {
    const {
      name,
      expirationDate
    } = data;
    const foodData = { userId, name, expirationDate };

    return (dispatch) => {
      const {
        name,
        purchaseDate,
        expirationDate
      } = data;
      const foodData = { userId, name, purchaseDate, expirationDate };
  
      return axios.post(`https://school.corg.network:3002/create-food`, {
          ...foodData
      })
      .then(res => {
        console.log('--------------------------------------')
        console.log(res.data)
        const newId = res.data.data._id;
        
        const newFood = {
          _id: newId,
          ...foodData
        }
        dispatch(addFood(newFood));
      })
      .catch(err => {
          console.log(err);
      });
    }
  }
}

const deleteFood = (id) => ({
  type: 'DELETE_FOOD',
  id
})
export const startDeleteFood = (id) => {
  const data = {
    foodId: id
  }
  console.log('data---------------------------------------------------');
  console.log(data);
  
  return (dispatch) => {
    return axios.delete(`https://school.corg.network:3002/delete-food`, {
      data
    })
    .then(res => {
      console.log('--------------------------------------')
      console.log(res.data)
      dispatch(deleteFood(id));
    })
    .catch(err => {
      console.log('--------------------------------------')

        console.log(err);
    });
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
        return axios.get(`https://school.corg.network:3002/${testUser.userId}/get-food`)
            .then(food => {
              console.log('START SET FRIDGE------------------------------------------------------------------')
              console.log(food.data.data)
              dispatch(setFood(food.data.data));
            })
            .catch(err => {
                console.log(err);
            });
  }
}
