const INITIAL_STATE = {
  totalRes: 0,
  details: {},
  loading: false,
  error: false,
  errorMessage: "",
};

export const movieReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_DATA_START":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_DETAIL_SUCCESS":
      return {
        ...state,
        loading: false,
        details: action.payload,
      };
    case "FETCH_DATA_FAILED":
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.payload,
      };
    case "NULLIFY_ERROR":
      return {
        ...state,
        error: false,
        errorMessage: "",
      };
    default:
      return state;
  }
};
