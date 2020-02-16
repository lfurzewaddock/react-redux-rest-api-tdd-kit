import { combineReducers } from "redux";

import currencyReducers from "./currencies/reducers";
import bitcoinPricePointReducers from "./bitcoin-price-points/reducers";

const reducers = combineReducers({
  currency: currencyReducers.currency,
  bitcoinPricePoints: bitcoinPricePointReducers.bitcoinPricePoints,
});

export default reducers;
