import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
export const Common = () => {
  //画面遷移用
  const navigate = useNavigate();

  //ログアウトボタンを押下した時の処理
  const onClickLogout = () => {
    navigate("/");
  };

  //ログアウトボタンを押下した時の処理
  const onClickEstats = () => {
    navigate("/estats");
  };

  //ログアウトボタンを押下した時の処理
  const onClickUserInfo = () => {
    navigate("/userInfo");
  };
  return (
    <div>
      <Box sx={{ margin: "10px", float: "left" }}>
        <Button
          onClick={onClickEstats}
          className="estatsButton"
          color="success"
          variant="contained"
          size="large"
          sx={{ height: "100px", margin: "10px", float: "left" }}
        >
          E-Stats取得
        </Button>
        <Button
          onClick={onClickUserInfo}
          className="estatsButton"
          color="secondary"
          variant="contained"
          size="large"
          sx={{ height: "100px", margin: "10px", float: "left" }}
        >
          ユーザー情報取得
        </Button>
      </Box>
      <Box
        my={10}
        flexDirection="row"
        justifyContent="right"
        display="grid "
        sx={{ height: "5px", margin: "10px", float: "right" }}
      >
        <Button
          onClick={onClickLogout}
          className="loginButton"
          color="primary"
          // variant="contained"
        >
          ログアウト
        </Button>
      </Box>
    </div>
  );
};
