import { startSetFeed } from '../actions/feed';
import { startSetFood } from '../actions/fridge';
import { startSetFriends } from '../actions/friends';
import { startSetTransactions } from '../actions/transactions';
import { resetUser } from '../actions/userInfo';

export default async (dispatch) => {
    await Promise.all([
        // dispatch(startSetFeed),
        dispatch(startSetTransactions()),
        dispatch(startSetFood()),
        // dispatch(startSetFriends),
    ]);
}