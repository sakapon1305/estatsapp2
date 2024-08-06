import { Box, Button, ListItem, List, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { GraphCom } from "./GraphCom";
import EstatsConst from "./EstatsConst";

export const EstasCom = () => {
  const [isGraphId, setIsGraphId] = useState("");
  const [isTitle, setIsTitle] = useState("");

  //画面遷移用
  const navigate = useNavigate();

  //戻るボタン押した時の関数
  const onClickBack = () => {
    navigate("/home");
  };
  //1.東京都の社会・人口統計体系のデータ(65歳以上)を取得ボタン押下時
  const onClickPopulation = () => {
    console.log(EstatsConst.STATSDATE_ID_01);
    //取得用のIDを設定する
    setIsGraphId(EstatsConst.STATSDATE_ID_01);
    setIsTitle("東京都の65歳以上の方の割合");
  };
  useEffect(() => {
    console.log(`グラフIDは${isGraphId}`); // これなら1増えた値が表示される
  });

  //2.千葉県の社会・人口統計体系のデータ(65歳以上)を取得ボタン押下時
  //URLは１のもの
  const onClickPopulation2 = () => {
    console.log(EstatsConst.STATSDATE_ID_02);
    //取得用のIDを設定する
    setIsGraphId(EstatsConst.STATSDATE_ID_02);
    setIsTitle("千葉県の65歳以上の方の割合");
  };

  //3.神奈川県の社会・人口統計体系のデータ(65歳以上)を取得ボタン押下時
  //URLは１のもの
  const onClickPopulation3 = () => {
    console.log(EstatsConst.STATSDATE_ID_03);
    //取得用のIDを設定する
    setIsGraphId(EstatsConst.STATSDATE_ID_03);
    setIsTitle("神奈川県の65歳以上の方の割合");
  };

  //4.埼玉県の社会・人口統計体系のデータ(65歳以上)を取得ボタン押下時
  //URLは１のもの
  const onClickPopulation4 = () => {
    console.log(EstatsConst.STATSDATE_ID_04);
    //取得用のIDを設定する
    setIsGraphId(EstatsConst.STATSDATE_ID_04);
    setIsTitle("埼玉県の65歳以上の方の割合");
  };

  //クリアボタン押した時の表示
  const onClickClear = () => {
    setIsGraphId("");
    setIsTitle("");
  };

  return (
    <div>
      <Box>
        <List component="nav">
          <ListItem button onClick={onClickPopulation} divider="true">
            <ListItemText primary="東京都の社会・人口統計体系のデータ(65歳以上)を取得する" />
          </ListItem>
          <ListItem button onClick={onClickPopulation2} divider="true">
            <ListItemText primary="千葉県の社会・人口統計体系のデータ(65歳以上)を取得する" />
          </ListItem>
          <ListItem button onClick={onClickPopulation3} divider="true">
            <ListItemText primary="神奈川県の社会・人口統計体系のデータ(65歳以上)を取得する" />
          </ListItem>
          <ListItem button onClick={onClickPopulation4} divider="true">
            <ListItemText primary="埼玉県の社会・人口統計体系のデータ(65歳以上)を取得する" />
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
        flexDirection="row"
        justifyContent="center"
        display="button"
        sx={{ height: "10px", marginTop: "10px", marginLeft: "50px" }}
      >
        {/* <Button
          //   onClick={onClickBack}
          className="ChangeButton"
          color="primary"
          // variant="contained"
        >
          切り替え
        </Button> */}
        <Button
          onClick={onClickClear}
          className="ClearButton"
          color="primary"
          // variant="contained"
        >
          クリア
        </Button>
      </Box>
      <Box sx={{ maxWidth: "1160px", marginTop: "50px" }}>
        <h3>{isTitle}</h3>
        <GraphCom isGraphId={isGraphId}></GraphCom>
        {/* Todo後ほど実装 */}
        {/* <TableCom></TableCom> */}
      </Box>
    </div>
    //ここにグラフを表示する
  );
};
