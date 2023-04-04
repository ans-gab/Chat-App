import { CHANGE_DIOLOG_LIST, CHANGE_EXAMPLE, CHANGE_QUESTION, CHANGE_REPLY, CHANGE_REQUEST, CHANGE_TIMESLIMIT, SET_API } from "./constants";

export const changeReply = num => ({
  type: CHANGE_REPLY,
  num
})

export const changeTimeslimit = num => ({
  type: CHANGE_TIMESLIMIT,
  num
})

export const changeDiologList = ary => ({
  type: CHANGE_DIOLOG_LIST,
  ary
})

export const setApi = text => ({
  type: SET_API,
  text
})


export const changeQuestion = text => ({
  type: CHANGE_QUESTION,
  text
})

export const changeRequest = ary => ({
  type: CHANGE_REQUEST,
  ary
})

export const changeExample = ary => ({
  type:CHANGE_EXAMPLE,
  ary
})