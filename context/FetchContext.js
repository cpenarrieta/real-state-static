import React, { createContext } from "react";
import axios from "axios";

const FetchContext = createContext();
const { Provider } = FetchContext;

const FetchProvider = ({ children }) => {
  const staticAxios = axios.create({
    baseURL: `/api`,
  });

  staticAxios.interceptors.request.use(
    (config) => {
      config.headers.visitorId = ""; // TODO
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  staticAxios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      const code = error && error.response ? error.response.status : -1;
      if (code === 401 || code === 403) {
        console.log("error code", code);
        // Publish error to Bugsnag
      }
      return Promise.reject(error);
    }
  );

  return (
    <Provider
      value={{
        staticAxios,
      }}
    >
      {children}
    </Provider>
  );
};

export { FetchContext, FetchProvider };
