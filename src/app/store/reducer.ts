import { ActionTypes } from './action';
import { Launch } from '../composants/home/home.component';

export interface InitialState {
  launches: Array<Launch>; 
}
export const initialState = {
  launches: [],
};
