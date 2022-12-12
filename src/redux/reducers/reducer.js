import React from "react";
import { CHANGE_AMOUNT, CHANGE_CATEGORY, CHANGE_DIFFICULTY, CHANGE_SCORE, CHANGE_TYPE } from "../actions/actionTypes";

const initialState = {
  question_category: '',
  question_difficulty: '',
  question_type: '',
  question_amount: 50,
  score: 0
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case CHANGE_AMOUNT:
      return {
        ...state, 
        question_amount: action.payload
      }
    case CHANGE_CATEGORY:
      return {
        ...state, 
        question_category: action.payload
      }
    case CHANGE_TYPE:
      return {
        ...state, 
        question_type: action.payload
      }
    case CHANGE_DIFFICULTY:
      return {
        ...state, 
        question_difficulty: action.payload
      }
    case CHANGE_SCORE:
      return {
        ...state, 
        score: action.payload
      }
  }
}

export default reducer;