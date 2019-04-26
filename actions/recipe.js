import axios from 'axios';
import { testUser } from '../testUser';
const userId = testUser.userId;



const getRecipe = (recipe) => ({
  type: 'GET_RECIPE',
  recipe
})
export const startGetRecipe = () => {
  return (dispatch) => {
        return axios.get(`https://school.corg.network:3002/${testUser.userId}/get-recipe`)
            .then(ret => {
              console.log('------------------------------------------------------------------')
              console.log(ret.data)
              
              dispatch(getRecipe(ret.data));
            })
            .catch(err => {
                console.log(err);
            });
  }
}
