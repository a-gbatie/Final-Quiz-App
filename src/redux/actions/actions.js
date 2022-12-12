import { CHANGE_AMOUNT, CHANGE_CATEGORY, CHANGE_DIFFICULTY, CHANGE_SCORE,  CHANGE_TYPE } from "./actionTypes";

export const handleAmount = payload => ({
  type: CHANGE_AMOUNT,
  payload,
})

export const handleCategory = payload => ({
  type: CHANGE_CATEGORY,
  payload,
})

export const handleDifficulty = payload => ({
  type: CHANGE_DIFFICULTY,
  payload,
})

export const handleType = payload => ({
  type: CHANGE_TYPE,
  payload,
})

export const handleScore = payload => ({
  type: CHANGE_SCORE,
  payload,
})