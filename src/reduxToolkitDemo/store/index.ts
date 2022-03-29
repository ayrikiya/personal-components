/*
 * @Author: 王荣
 * @Date: 2022-02-24 22:31:06
 * @LastEditors: 王荣
 * @LastEditTime: 2022-03-28 14:53:35
 * @Description: 填写简介
 */

import { configureStore } from "@reduxjs/toolkit";
import projectSliceReducer from "../view/project.slice";

export const rootReducer = {
  ProjectList: projectSliceReducer,
};

export const store = configureStore({
  reducer: rootReducer, //不用写conbine了 这是toolkit的简化之一 reducer可以接收一个多reducer配置对象
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;