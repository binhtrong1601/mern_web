import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./routes";
import DefaultComponent from "./components/defaultComponent/defaultComponent";
// import axios from "axios";
// import { useQuery } from "@tanstack/react-query";
import { isJSonString } from "./until";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import * as UserService from "../src/services/UserServices";
import { updateUser } from "./redux/slides/userSlides";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const { storageData,decoded } = handleDecode();
    if (decoded?.id) {
      handleGetDetailsUser(decoded?.id, storageData);
    }
  }, []);

  const handleDecode = () => {
    let storageData = localStorage.getItem("access_token");
    let decoded = {};
    if (storageData && isJSonString(storageData)) {
      storageData = JSON.parse(storageData);
      decoded = jwtDecode(storageData);
    }
    return { decoded, storageData };
  };

  UserService.axiosJWT.interceptors.request.use(
    async (config)=> {
      // Do something before request is sent
      const currenTime = new Date()
      const { decoded } = handleDecode();
      if(decoded?.exp > currenTime.getTime()/1000){
        const data = await UserService.refreshToken()
        config.headers['token']= `Bearer ${data?.access_token}`
      }
      return config;
    },
     (error)=> {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  const handleGetDetailsUser = async (id, token) => {
    const res = await UserService.getDetailUser(id, token);
    console.log(res);
    dispatch(updateUser({ ...res?.data, access_token: token }));
  };

  // const fetchApi = async () => {
  //   const res = await axios.get(
  //     `${process.env.REACT_APP_API_URL}/product/get-all`
  //   );
  //   return res.data;
  // };

  // const query = useQuery({ queryKey: ["todos"], queryFn: fetchApi });

  return (
    <div>
      <Router>
        <Routes>
          {routes.map((item) => {
            const Page = item.page;
            const Layout = item.isShowHeader ? DefaultComponent : Fragment;
            return (
              <Route
                key={item.path}
                path={item.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
