import {
  Box,
  Button,
  TextField,
  Typography,
  ListItem,
  List,
  ListItemText,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { GraphCom } from "./GraphCom";
import EstatsConst from "./EstatsConst";

export const EstasCom = () => {
  const [isGraphId, setIsGraphId] = useState();
  const [isTableId, setIsTableId] = useState();

  //画面遷移用
  const navigate = useNavigate();
  //取得ボタンを押した時のロジック

  //API取得する関数

  //戻るボタン押した時の関数
  const onClickBack = () => {
    navigate("/home");
  };
  //1.東京都の社会・人口統計体系のデータ(60歳以上)を取得ボタン押下時
  const onClickPopulation = () => {
    console.log(EstatsConst.STATSDATE_ID_01);
    //取得用のIDを設定する
    setIsGraphId(EstatsConst.STATSDATE_ID_01);
  };
  useEffect(() => {
    console.log(`グラフIDは${isGraphId}`); // これなら1増えた値が表示される
  });
  //2.東京都の社会・人口統計体系のデータ(60歳以上)を取得ボタン押下時

  //3.東京都の社会・人口統計体系のデータ(60歳以上)を取得ボタン押下時

  //4.東京都の社会・人口統計体系のデータ(60歳以上)を取得ボタン押下時

  //グラフと表形式を切り替えるロジック

  return (
    <div>
      <Box>
        <List component="nav">
          <ListItem button onClick={onClickPopulation} divider="true">
            <ListItemText primary="東京都の社会・人口統計体系のデータ(60歳以上)を取得する" />
          </ListItem>
          <ListItem button divider="true">
            <ListItemText primary="2019年度を取得する" />
          </ListItem>
          <ListItem button divider="true">
            <ListItemText primary="2018年度を取得する" />
          </ListItem>
          <ListItem button divider="true">
            <ListItemText primary="2017年度を取得する" />
          </ListItem>
        </List>
      </Box>
      <Box
        my={1}
        flexDirection="row"
        justifyContent="right"
        display="grid"
        sx={{ height: "15px", margin: "10px", float: "right" }}
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
        sx={{ height: "15px", margin: "10px" }}
      >
        <Button
          //   onClick={onClickBack}
          className="ChangeButton"
          color="primary"
          // variant="contained"
        >
          切り替え
        </Button>
        <Button
          //   onClick={onClickBack}
          className="ClearButton"
          color="primary"
          // variant="contained"
        >
          クリア
        </Button>
      </Box>

      <GraphCom isGraphId={isGraphId}></GraphCom>
      {/* <TableCom></TableCom> */}
    </div>
    //ここにグラフを表示する
  );
};
