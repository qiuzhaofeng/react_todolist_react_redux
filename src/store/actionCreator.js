import { CHANGE_INPUT_VALUE, ADD_ITEM, DELETE_ITEM } from "./actionTypes"
export const handleInputChangeAction =(value)=>({
  type: CHANGE_INPUT_VALUE,
  value
})
export const handleBtnClickAction = () => ({
  type: ADD_ITEM
})
export const handleTtemDelAction = (index) => ({
  type: DELETE_ITEM,
  index
})