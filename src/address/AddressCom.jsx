import {
  Box,
  Button,
  TextField,
  Typography,
  ListItem,
  List,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { AddressTableCom } from "./AddressTableCom";

export const AddressCom = () => {
  const [isZipCode, setIsZipCode] = useState("");
  const [isRender, setIsRender] = useState("");
  var text = "";

  //画面遷移用
  const navigate = useNavigate();
  //取得ボタンを押した時のロジック

  const onZipchange = (e) => setIsZipCode(e.target.value);

  //戻るボタン押した時の関数
  const onClickBack = () => {
    navigate("/home");
  };

  //clearボタンの処理
  const onClickDelete = () => {
    setIsRender("");
    setIsZipCode("");
  };

  //1.東京都の社会・人口統計体系のデータ(60歳以上)を取得ボタン押下時
  const onClickPopulation = () => {
    //取得用のIDを設定する
    setIsRender(isZipCode);
  };
  useEffect(() => {
    console.log(`グラフIDは${isZipCode}`); // これなら1増えた値が表示される
  });

  return (
    <div>
      <p>郵便番号を入力してデータを取得できます</p>
      <Box sx={{ margin: "25px", position: "relative" }}>
        <input
          type="text"
          align="center"
          divider="true"
          size={"15"}
          onChange={onZipchange}
          value={isZipCode}
        ></input>
        <Button
          variant="contained"
          onClick={onClickPopulation}
          divider="true"
          sx={{
            "&:hover": {
              bgcolor: "primary.dark",
            },
            margin: "20px",
          }}
        >
          データを取得する
        </Button>
      </Box>
      <Box
        my={1}
        flexDirection="row"
        justifyContent="right"
        display="grid"
        sx={{ height: "15px", margin: "15px", float: "right" }}
      >
        <Button
          onClick={onClickBack}
          className="loginButton"
          color="primary"
          // variant="contained"
        >
          戻る
        </Button>
      </Box>

      <Box
        my={1}
        flexDirection="row"
        justifyContent="center"
        display="button"
        sx={{ height: "15px", margin: "100px" }}
      >
        <Button
          //   onClick={onClickBack}
          className="ClearButton"
          color="primary"
          onClick={onClickDelete}
          display="button"
          sx={{
            align: "center",
            "&:hover": {
              bgcolor: "primary.dark",
            },
          }}
          // variant="contained"
        >
          クリア
        </Button>
      </Box>

      <AddressTableCom text={isRender}></AddressTableCom>
      {/* <TableCom></TableCom> */}
    </div>
    //ここにグラフを表示する
  );
};
