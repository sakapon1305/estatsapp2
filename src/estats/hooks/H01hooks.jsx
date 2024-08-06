//↓がないとEmotionが適用できない
/**@jsxImportSource @emotion/react */
import { useEffect } from "react";
import { useState } from "react";
import { jsx, css } from "@emotion/react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

export const H01hooks = (props) => {
  console.log(props);
  // Chart.jsのスケールとエレメントを登録
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  //EmotionによるCSS記述
  const tbodyStyle = css`
    border: solid 1px #aaa;
    font-family: "MS 明朝";
    text-align: center;
    align: center;
  `;

  const theadStyle = css`
    border: solid 1px #aaa;
    font-family: "MS 明朝";
    text-align: center;
    valign: middle;
    align: center;
  `;

  const [dataList, setDataList] = useState({
    //統計データの数値情報
    valueData: [],
    // メタ情報から横軸事項を取得用
    apiMetaYokoList: [],
    // 単位用
    apiMetaCat01List: [],
    unit: "",
  });
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // URLの取得
  const url = props.url;

  // APIの実行
  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:3002/api/data", {
        params: {
          req: url,
        },
      })
      .then((response) => {
        //axiosのdataプロパティにデータがあるから.dataと書く
        //console.log(response.data);
        setIsLoading(false);
        const data = response.data;
        // Javascriptのfilterを使って、jsonデータからデータを抽出します
        const valueData = data["GET_STATS_DATA"]["STATISTICAL_DATA"][
          "DATA_INF"
        ]["VALUE"].filter(function (item, index) {
          return true;
        });

        //console.log(`Valueの中身${JSON.stringify(valueData)}`);

        // メタ情報から横軸を取得
        const apiMetaYokoList = data["GET_STATS_DATA"]["STATISTICAL_DATA"][
          "CLASS_INF"
        ]["CLASS_OBJ"].filter((item) => item["@id"] === "time");
        //console.log(`apiMetaYokoList:${JSON.stringify(apiMetaYokoList)}`);

        // 単位を取得
        const apiMetaCat01List = data["GET_STATS_DATA"]["STATISTICAL_DATA"][
          "CLASS_INF"
        ]["CLASS_OBJ"].filter((item) => item["@id"] === "cat01");
        //console.log(`apiMetaCat01List:${JSON.stringify(apiMetaCat01List)}`);

        const Unit = apiMetaCat01List[0]["CLASS"]["@unit"];
        //console.log(`Unit: ${Unit}`);

        setDataList({
          valueData,
          apiMetaYokoList,
          apiMetaCat01List,
          Unit,
        });
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    console.log("Updated dataList:", dataList);
  }, [dataList]);

  // ラベルを作成する
  const labels = dataList.valueData.map((item) => {
    //apiMetaYokoListにある@codeの値とvalueDataの@timeの値が一致するものを変数に格納して横軸を作成する
    const yokoName = dataList.apiMetaYokoList[0]["CLASS"].find(
      (yoko) => yoko["@code"] === item["@time"]
    );
    //見つかった場合は@codeの値＋年をつけて返す、ない場合は空文字を返す
    return yokoName ? `${yokoName["@code"]}年` : "";
  });

  // グラフデータの作成
  const data = {
    labels,
    datasets: [
      {
        label: "%",
        data: dataList.valueData.map((item) => item["$"]),
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(175,192,192,1)",
        borderWidth: 1,
      },
    ],
  };

  //表形式にするためのテーブルヘッダを作成する
  // const renderTableHeader = () => {
  //   if (dataList) {
  //     //ヘッダの値を取り出す
  //     const headers = Object.keys(dataList.results[0]);
  //     console.log("header" + headers);
  //     return headers.map((key, index) => <th key={index}>{key}</th>);
  //   } else {
  //     console.log("Results array is empty or does not exist.");
  //     return null; // ヘッダーがない場合はnullを返す
  //   }
  // };

  //表形式にするためのボディを作成する
  // const renderTableBody = () => {
  //   if (dataList) {
  //     return (
  //       <tr>
  //         {Object.values(
  //           dataList.GET_STATS_DATA.STATISTICAL_DATA.CLASS_INF.CLASS_OBJ[3].
  //         ).map((value, i) => (
  //           <td css={tbodyStyle} key={i}>
  //             {value}
  //           </td>
  //         ))}
  //       </tr>
  //     );
  //   } else {
  //     return null;
  //   }
  // };
  console.log(`dataListのValueの中身${JSON.stringify(dataList.valueData)}`);

  return (
    <div align="center">
      {dataList === null || dataList === undefined ? (
        "取得できませんでした"
      ) : (
        <div>
          {/* <table>
            <thead>
              <tr css={theadStyle}>
                {
                  dataList.GET_STATS_DATA.STATISTICAL_DATA.RESULT_INF
                    .TOTAL_NUMBER
                }
              </tr>
            </thead>
            <tbody css={tbodyStyle}>{renderTableBody()}</tbody>
          </table> */}
          {/* <table>
            <td>{JSON.stringify(dataList.apiMetaYokoList)}</td>
          </table> */}

          <Bar
            data={data}
            options={{
              responsive: true, //大きさを自動で変えるか否か
              scales: {
                x: {
                  type: "category", // x軸にcategoryスケールを使用
                  title: {
                    display: true,
                    text: "年",
                  },
                },
                y: {
                  type: "linear", // y軸にlinearスケールを使用、数値を線形で表示
                  title: {
                    display: true,
                    text: "%",
                  },
                },
              },
              //追加の設定
              plugins: {
                //タイトル
                title: {
                  display: true,
                },
                //ツールチップ触れると説明が出てくる
                tooltip: {
                  enabled: true,
                },
                //凡例のオプション
                legend: {
                  display: true,
                  position: "top",
                },
              },
            }}
          />
        </div>
      )}
      {/* エラー時の場合はエラーを表示する */}
      {isError && <p style={{ color: "red" }}>エラーが発生しました</p>}
      {/* ローディング中は表示を切り替える */}
      {isLoading ? <p>データをローディング中です</p> : <p></p>}
    </div>
  );
};
