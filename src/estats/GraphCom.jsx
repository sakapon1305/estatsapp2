import EstatsConst from "./EstatsConst";
// import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { H01hooks } from "./hooks/H01hooks";

export const GraphCom = (props) => {
  // const [dataList, setDataList] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // //axiosの設定
  // const axiosInstance = axios.create({
  //   withCredentials: false,
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });
  //引数を受け取る
  const statsId = props.isGraphId;
  useEffect(() => {
    console.log(`グラフIDは${statsId}`); // これなら1増えた値が表示される
  });

  //IDがないなら何も返さない
  if (statsId == null && statsId === "") {
    window.alert("空になりました");
    return <div></div>;
  }
  //axiosにてJSON形式のデータを取得する
  //1.東京都の社会・人口統計体系のデータ(60歳以上)を取得ボタン押下時
  if (statsId === EstatsConst.STATSDATE_ID_01) {
    console.log("成功");
    //URLの取得
    const url = EstatsConst.ESTAS_URL_01;

    //axiousの準備と取得を行う
    // axiosInstance.defaults.baseURL = "http://localhost:3000";
    // axiosInstance.defaults.headers.post["Content-Type"] =
    //   "application/json;charset=utf-8";
    // axiosInstance.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    //APIの実行
    // fetch(url)
    //   .then((result) => {
    //     //resultをdatasに格納し、state更新する
    //     const datas = result.data.map((data) => ({
    //       RESULT_INF: data.RESULT_INF,
    //       // name: `${data.lastName} ${data.firstName}`,
    //       // age: data.age,
    //     }));
    //     //データをセットする
    //     setDataList(datas);
    //   })
    //   //Errorの場合はエラーフラグをTrueにする
    //   .catch(() => setIsError(true))
    //   //処理完了後はローディングフラグをfalseにする
    //   .finally(() => setIsLoading(false));
    return (
      <div>
        {/* {エラー時の場合はエラーを表示する} */}
        {isError && <p style={{ color: "red" }}>エラーが発生しました</p>}
        {/* ローデイング中は表示を切り替える */}
        {isLoading ? (
          <p>データをローディング中です</p>
        ) : (
          <H01hooks url={url}></H01hooks>
        )}
      </div>
    );
  } else if (statsId === EstatsConst.STATSDATE_ID_02) {
    //2.千葉県の社会・人口統計体系のデータ(65歳以上)を取得ボタン押下時
    const url = EstatsConst.ESTAS_URL_02;
    return (
      <div>
        {/* {エラー時の場合はエラーを表示する} */}
        {isError && <p style={{ color: "red" }}>エラーが発生しました</p>}
        {/* ローデイング中は表示を切り替える */}
        {isLoading ? (
          <p>データをローディング中です</p>
        ) : (
          <H01hooks url={url}></H01hooks>
        )}
      </div>
    );
  } else if (statsId === EstatsConst.STATSDATE_ID_03) {
    //3.神奈川県の社会・人口統計体系のデータ(65歳以上)を取得ボタン押下時
    const url = EstatsConst.ESTAS_URL_03;
    return (
      <div>
        {/* {エラー時の場合はエラーを表示する} */}
        {isError && <p style={{ color: "red" }}>エラーが発生しました</p>}
        {/* ローデイング中は表示を切り替える */}
        {isLoading ? (
          <p>データをローディング中です</p>
        ) : (
          <H01hooks url={url}></H01hooks>
        )}
      </div>
    );
  } else if (statsId === EstatsConst.STATSDATE_ID_04) {
    //4.埼玉県の社会・人口統計体系のデータ(65歳以上)を取得ボタン押下時
    const url = EstatsConst.ESTAS_URL_04;
    return (
      <div>
        {/* {エラー時の場合はエラーを表示する} */}
        {isError && <p style={{ color: "red" }}>エラーが発生しました</p>}
        {/* ローデイング中は表示を切り替える */}
        {isLoading ? (
          <p>データをローディング中です</p>
        ) : (
          <H01hooks url={url}></H01hooks>
        )}
      </div>
    );
    //全ての分岐を通らない予想外のエラー
  } else {
    console.log("全部通ってません");
    return <></>;
  }
};
