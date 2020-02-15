import { combineReducers } from "redux";

import currencyReducers from "./currencies/reducers";

const reducers = combineReducers({
  currency: currencyReducers.currency,
});

export default reducers;
