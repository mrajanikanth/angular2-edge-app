import {appValues} from './app.values';
const base = 'http://localhost:2000/';

export const urlValues = {
    login: `${appValues.base}api/login`,
    signUp: `${appValues.base}api/sign-up`,
    getUsers: `${appValues.base}api/users`,
    getRooms: `${appValues.base}api/rooms`
};
