import "./App.css";
import Headercom from "./common/header";
import Footercom from "./common/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import { useState } from "react";
import { HomeCom } from "./common/HomeCom";
import { LoginCom } from "./login/LoginCom";
import { EstasCom } from "./estats/EstatsCom";
import { AddressCom } from "./address/AddressCom";

export const App = () => {
  //const { isLogin, isError, onClickCheckUser } = useLogin();
  return (
    //ログインの状態によって返すコンポーネントを決定する
    <div className="App">
      <Headercom></Headercom>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginCom />} />
          <Route path="/home" element={<HomeCom />} />
          <Route path="/estats" element={<EstasCom />} />
          <Route path="/address" element={<AddressCom />} />
        </Routes>
      </BrowserRouter>
      {/* {isLogin ? (
        //ここにホーム画面
        <Home />
      ) : (
        <LoginCom></LoginCom>
      )}
      {isError && (
        <p style={{ color: "red" }}>IDかパスワードが間違っています。</p>
      )} */}
      <Footercom></Footercom>
    </div>
  );
};

//export default App;
