import * as constants from "../constants";

const initialState = {
  isPending: false,
  errorMsg: "",
  pricePoints: {},
};

const fetch = (state = initialState, action) => {
  switch (action.type) {
    case constants.BITCOIN_PRICE_POINTS_LOAD_REQUEST:
      return {
        ...state,
        isPending: true,
      };
    case constants.BITCOIN_PRICE_POINTS_LOAD_FAILED:
      return {
        ...state,
        isPending: false,
        errorMsg: action.payload,
      };
    case constants.BITCOIN_PRICE_POINTS_LOAD_SUCCESS:
      return {
        ...state,
        isPending: false,
        errorMsg: "",
        pricePoints: action.payload,
      };
    default:
      return state;
  }
};

export default fetch;
