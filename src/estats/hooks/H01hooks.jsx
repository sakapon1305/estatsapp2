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
      .get("http://localhost:3002/api/data")
      .then((response) => {
        //axiosのdataプロパティにデータがあるから.dataと書く
        console.log(response.data);
        setIsLoading(false);
        const data = response.data;
        // Javascriptのfilterを使って、jsonデータからデータを抽出します
        var valueData = data["GET_STATS_DATA"]["STATISTICAL_DATA"]["DATA_INF"][
          "VALUE"
        ].filter(function (item, index) {
          return true;
        });

        console.log(`Valueの中身${JSON.stringify(valueData)}`);

        // メタ情報から横軸事項を取得
        var apiMetaYokoList = data["GET_STATS_DATA"]["STATISTICAL_DATA"][
          "CLASS_INF"
        ]["CLASS_OBJ"].filter(function (item, index) {
          if (item["@id"] == "time") {
            return true;
          }
        });
        console.log(`apiMetaYokoList:${JSON.stringify(apiMetaYokoList)}`);
        setDataList(apiMetaYokoList);

        // 単位を取得
        var apiMetaCat01List = data["GET_STATS_DATA"]["STATISTICAL_DATA"][
          "CLASS_INF"
        ]["CLASS_OBJ"].filter(function (item, index) {
          if (item["@id"] == "cat01") {
            return true;
          }
        });
        setDataList(apiMetaCat01List);
        console.log(`apiMetaCat01List:${JSON.stringify(apiMetaCat01List)}`);

        var Unit = apiMetaCat01List[0]["CLASS"]["@unit"];
        console.log(`Unit: ${Unit}`);

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

  // グラフに描画するデータを格納する配列
  const graphData = new Array();
  for (var key in dataList.valueData) {
    // メタ情報
    var apiYokoName = dataList.apiMetaYokoList[0]["CLASS"].filter(function (
      item,
      index
    ) {
      if (item["@code"] == dataList.valueData[key]["@time"]) {
        return true;
      }
    });
    graphData.push({
      name: apiYokoName[0]["@name"] + "年",
      value: dataList.valueData[key]["$"],
    });
  }
  // ここで実際のデータ取得処理を行う
  // const data = {
  //   labels: ["January", "February", "March", "April", "May", "June"],
  //   datasets: [
  //     {
  //       label: "Sales",
  //       data: [65, 59, 80, 81, 56, 55],
  //       backgroundColor: "rgba(75,192,192,0.4)",
  //       borderColor: "rgba(75,192,192,1)",
  //       borderWidth: 1,
  //     },
  //   ],
  // };
  // // const options = {
  // //   maintainAspectRatio: false,
  // // };
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
      <h2>取得結果</h2>
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
            data={graphData}
            options={{
              responsive: true,
              scales: {
                x: {
                  type: "category", // x軸にcategoryスケールを使用
                  title: {
                    display: true,
                    text: "Months",
                  },
                },
                y: {
                  type: "linear", // y軸にlinearスケールを使用
                  title: {
                    display: true,
                    text: "Sales",
                  },
                },
              },
              plugins: {
                title: {
                  display: true,
                  text: "Sales Over Time",
                },
                tooltip: {
                  enabled: true,
                },
                legend: {
                  display: true,
                  position: "top",
                },
              },
            }}
          />
          {/* <p css={tbodyStyle}>ステータスコード：{dataList}</p> */}
        </div>
      )}
      {/* エラー時の場合はエラーを表示する */}
      {isError && <p style={{ color: "red" }}>エラーが発生しました</p>}
      {/* ローディング中は表示を切り替える */}
      {isLoading ? <p>データをローディング中です</p> : <p></p>}
    </div>
  );
};
