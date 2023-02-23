import { CHANGE_DIOLOG_LIST, CHANGE_REPLY, CHANGE_TIMESLIMIT, SET_API } from "./constants";

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