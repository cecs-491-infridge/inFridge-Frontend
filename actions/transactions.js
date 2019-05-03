import axios from 'axios';
import { testUser } from '../testUser';
const userId = testUser.userId;

const addTransaction = (transaction) => ({
  type: 'ADD_TRANSACTION',
  transaction
});
export const startAddTransaction = (token, post) => {
  return (dispatch) => {
    // Need user id to do this
    // WAIT FOR VICTORIA TO GET USER ID

    return axios.post(`https://school.corg.network:3002/create-transaction`, {
      token,
      ...post
    })
      .then(res => {
        console.log('--------------------------------------')
        console.log(res.data)
        const newId = res.data.data._id;

        const newTransaction = {
          _id: newId,
          likes: [],
          ...post
        }
        console.log(newTransaction)
        dispatch(addTransaction(newTransaction));
      })
      .catch(err => {
        console.log(err);
      });
  }
}

const deleteTransaction = (id) => ({
  type: 'DELETE_TRANSACTION',
  id
})
export const startDeleteTransaction = (id) => {
  const data = {
    postId: id
  }
  console.log('data---------------------------------------------------');

  console.log(data);
  return (dispatch) => {
    return axios.delete(`https://school.corg.network:3002/delete-post`, {
      data
    })
      .then(res => {
        console.log('--------------------------------------')
        console.log(res.data)
        dispatch(deleteTransaction(id));
      })
      .catch(err => {
        console.log('--------------------------------------')

        console.log(err);
      });
  }
}

const updatePost = (id, updates) => ({
  type: 'UPDATE_TRANSACTION',
  id,
  updates
})

export const startUpdatePost = (id, updates) => {
  return async (dispatch) => {
    // const likeRes = await axios.post(`https://school.corg.network:3002/like-post`, {
    //      id,
    //      ...updates
    // });

    // console.log(likeRes);

    dispatch(updatePost(id, updates));
  }
}

export const startLikePost = (token, postId, updates) => {
  return async (dispatch) => {
    console.log('Trying to like')
    try {
      const likeRes = await axios.post(`https://school.corg.network:3002/like-post`, {
          token,
          postId
      });

      dispatch(updatePost(postId, updates));
    }catch(err) {
      console.log(err);
    }
  }
};

export const startCommentPost = (token, postId, body, updates) => {
  return async (dispatch) => {
    console.log('Trying to like')
    try {
      const likeRes = await axios.post(`https://school.corg.network:3002/create-comment`, {
          token,
          postId,
          body
      });

      dispatch(updatePost(postId, updates));
    }catch(err) {
      console.log(err);
    }
  }
};

const setTransactions = (transactions) => ({
  type: 'SET_TRANSACTIONS',
  transactions
});

export const startSetTransactions = () => {
  return (dispatch) => {
    return axios.get('https://school.corg.network:3002/all-posts')
            .then(res => {
              console.log('START SET TRANSACTIONS ------------------------------')
              console.log(res.data.data)
              dispatch(setTransactions(res.data.data));
            })
            .catch(err => {
                console.log(err);
            });
  }
}
