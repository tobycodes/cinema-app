import { SET_LOADING, SET_MATCH_PATH } from '../types';

export const setLoading = (state: boolean) => ({ type: SET_LOADING, payload: state });

export const setMatchPath = (path: string) => ({ type: SET_MATCH_PATH, payload: path });
