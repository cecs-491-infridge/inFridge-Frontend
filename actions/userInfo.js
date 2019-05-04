import axios from 'axios';
import { testUser } from '../testUser';
const userId = testUser.userId;

export const updateUser = (userId, username) => ({
	type: 'UPDATE_USER',
	userId,
	username
});

export const updateToken = (token) => ({
	type: 'UPDATE_TOKEN',
	token
});

export const resetUser = () =>({
	type: 'RESET_USER'
});