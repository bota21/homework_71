import {
  FETCH_REQUEST,
  FETCH_REQUEST_SUCCESS,
  FETCH_REQUEST_ERROR,
} from "./actionTypes";
import axios from "../axiosReddit";

const fetchRequest = () => {
  return { type: FETCH_REQUEST };
};
const fetchRequestSuccess = (data) => {
  return { type: FETCH_REQUEST_SUCCESS, data };
};
const fetchRequestFailure = (error) => {
  return { type: FETCH_REQUEST_ERROR, error };
};

export const fetchRedditList = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchRequest());
      const response = await axios.get(".json");
      const result = response.data;
      dispatch(fetchRequestSuccess(result.data.children));
    } catch (e) {
      dispatch(fetchRequestFailure());
    }
  };
};
