
import type { RootState } from '../app/store'
import {CounterInitialState} from "../app/App";

export const selectCounter = (state: RootState): CounterInitialState  => state.primState