"use client";

import { Provider } from "react-redux";
import store from "./store";

const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

StoreProvider.displayName = "StoreProvider"; // Add this line

export default StoreProvider;
