import { SET_LOADING } from '../types';

export const setLoading = (state: boolean) => ({ type: SET_LOADING, payload: state });
