import React, { useState, useContext, useReducer, useEffect } from "react";
import initialState from "../redux/initialState";
import reducer from "../redux/reducer";
import link from "../links/url";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increase = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };

  const decrease = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };

  const remove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const getTotal = () => {
    dispatch({ type: "GET_TOTALS" });
  };

  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.cart]);

  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    const response = await fetch(link);
    const cart = await response.json();
    dispatch({ type: "DISPLAY_ITEMS", payload: cart });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        state,
        increase,
        decrease,
        remove,
        clearCart,
        getTotal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
