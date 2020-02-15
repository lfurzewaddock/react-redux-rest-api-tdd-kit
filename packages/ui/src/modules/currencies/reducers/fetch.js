import * as constants from "../constants";

const initialState = {
  isPending: false,
  errorMsg: "",
  options: [],
};

const fetch = (state = initialState, action) => {
  switch (action.type) {
    case constants.CURRENCY_OPTIONS_LOAD_REQUEST:
      return {
        ...state,
        isPending: true,
      };
    case constants.CURRENCY_OPTIONS_LOAD_FAILED:
      return {
        ...state,
        isPending: false,
        errorMsg: action.payload,
      };
    case constants.CURRENCY_OPTIONS_LOAD_SUCCESS:
      return {
        ...state,
        isPending: false,
        errorMsg: "",
        options: action.payload,
      };
    default:
      return state;
  }
};

export default fetch;
