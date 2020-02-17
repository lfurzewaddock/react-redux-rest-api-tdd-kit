import { combineReducers } from "redux";

import currencyReducers from "./currencies/reducers";
import bitcoinReducers from "./bitcoin/reducers";

const reducers = combineReducers({
  currency: currencyReducers.currency,
  bitcoin: bitcoinReducers.bitcoin,
});

export default reducers;
