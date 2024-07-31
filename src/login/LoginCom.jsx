import { Button, Typography } from "@mui/material";
import logo from "../logo.svg";
//import { useLogin } from "../hooks/useLogin.jsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
//import { ErrorMessage } from "@hookform/error-message";

export const LoginCom = () => {
  //画面遷移用
  const navigate = useNavigate();
  const [isError, setIsError] = useState();
  const [idText, setIdText] = useState("ここに表示されます。");
  const [passText, setPassText] = useState("ここに表示されます。");

  const onIdchange = (e) => setIdText(e.target.value);
  const onPasschange = (e) => setPassText(e.target.value);

  //ログインボタンが押下された時のロジック
  const onClickCheckUser = () => {
    //===は型を変換することなく正しいか厳密に比較する
    if (idText === "sample" && passText === "1") {
      console.log("成功");
      loginSuccess();
      //setIsLogin(true);
      //setIsError(false);
    } else {
      console.log("IDかパスワードが間違っています");
      window.alert("Dかパスワードが間違っています");
      setIsError("IDかパスワードが間違っています");
    }
  };

  //ログインに成功した場合、次のページへ遷移
  const loginSuccess = () => {
    //navigateで行き先を指定する
    navigate("/home");
    window.alert("通ったよ");
  };

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Typography
        fontFamily="Arial"
        color="skyblue"
        variant="h6"
        component="div"
      >
        Login
      </Typography>
      <form>
        <Typography color="black" variant="h6" component="p">
          <label htmlFor="userID">ユーザーID</label>

          <input
            name="id"
            type="text"
            placeholder="userID"
            onChange={onIdchange}
          />
        </Typography>
        <Typography color="black" variant="h6" component="p">
          <label htmlFor="password">パスワード</label>
          <input
            name="password"
            type="password"
            placeholder="password"
            onChange={onPasschange}
          />
        </Typography>
        {/* <div className="id">
          <TextField
            label="UserID"
            variant="standard"
            inputProps="id"
            required
          />
        </div> */}
        {/* <div className="password">
          <TextField
            type="password"
            label="Password"
            inputProps="password"
            variant="standard"
            required
          />
        </div> */}
        {/* <ErrorMessage
          errors={isError}
          name="username"
          render={({ message }) => <span>{message}</span>}
        /> */}

        {/* <Box mt={5}> */}
        <Button
          onClick={onClickCheckUser}
          className="loginButton"
          type="submit"
          color="primary"
          variant="contained"
          fullWidth
          sx={{ marginTop: "25px", marginBottom: "105px" }}
        >
          ログイン
        </Button>
        {/* </Box> */}
      </form>
    </header>
  );
};
