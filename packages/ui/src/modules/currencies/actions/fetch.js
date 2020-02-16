import * as constants from "../constants";
import ajaxBase from "../../ajax-base-api-app";

export const getDataBegin = () => ({
  type: constants.CURRENCY_OPTIONS_LOAD_REQUEST,
});

export const getDataFailure = error => ({
  type: constants.CURRENCY_OPTIONS_LOAD_FAILED,
  payload: error,
});

export const getDataSuccess = data => ({
  type: constants.CURRENCY_OPTIONS_LOAD_SUCCESS,
  payload: data,
});

export const getCurrencyDataHandler = () => dispatch => {
  dispatch(getDataBegin());
  const url = "/v1/currencies";
  ajaxBase
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
