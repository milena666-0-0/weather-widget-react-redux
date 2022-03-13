import { RootState } from "../../../store/rootReducer";

export const weatherSelector = (state: RootState) => state.weather;
