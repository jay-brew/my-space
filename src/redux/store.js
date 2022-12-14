import { createStore } from "redux";
import spaceAll from "./reducers/spaceReducer";

let store = createStore(spaceAll);

export default store;