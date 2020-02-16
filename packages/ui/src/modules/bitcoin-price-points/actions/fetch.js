import * as constants from "../constants";
import ajaxBaseExchangeApi from "../../ajax-base-api-exchange";

export const getDataBegin = () => ({
  type: constants.BITCOIN_PRICE_POINTS_LOAD_REQUEST,
});

export const getDataFailure = error => ({
  type: constants.BITCOIN_PRICE_POINTS_LOAD_FAILED,
  payload: error,
});

export const getDataSuccess = data => ({
  type: constants.BITCOIN_PRICE_POINTS_LOAD_SUCCESS,
  payload: data,
});

export const getBitcoinPricePointsDataHandler = selectedCurrency => dispatch => {
  dispatch(getDataBegin());
  const url = `/v1/bpi/historical/close.json?currency=${selectedCurrency}`;
  ajaxBaseExchangeApi
    .get(url)
    .then(res => {
      /* eslint-disable-next-line no-console */
      // console.log(JSON.stringify(res));
      dispatch(getDataSuccess(res.data));
    })
    .catch(err => {
      /* eslint-disable-next-line no-console */
      console.log(`${err.message} error`, err);
      dispatch(getDataFailure(err.message));
    });
};
