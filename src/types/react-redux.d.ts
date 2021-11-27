/* eslint-disable */
import 'react-redux';

import { RootState } from 'types/app';

declare module 'react-redux' {
  export interface DefaultRootState extends RootState {}
}
