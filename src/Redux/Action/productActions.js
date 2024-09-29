
import axios from "axios";

export const fetchProducts = (url) => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_PRODUCTS_REQUEST" });
    try {
      const response = await axios.get(url);
      dispatch({ type: "FETCH_PRODUCTS_SUCCESS", payload: response.data.products });
    } catch (error) {
      dispatch({ type: "FETCH_PRODUCTS_FAILURE", payload: error.message });
    }
  };
};
