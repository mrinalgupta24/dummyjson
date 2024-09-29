import axios from "axios";

export const fetchCategories = () => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_CATEGORIES_REQUEST" });
    try {
      const response = await axios.get("https://dummyjson.com/products/categories");
      dispatch({ type: "FETCH_CATEGORIES_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "FETCH_CATEGORIES_FAILURE", payload: error.message });
    }
  };
};
