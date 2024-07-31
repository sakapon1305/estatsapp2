//↓がないとEmotionが適用できない
/**@jsxImportSource @emotion/react */
import { useEffect } from "react";
import { useState } from "react";
import { jsx, css } from "@emotion/react";

export const H01Addresshooks = (props) => {
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
    message: "",
    results: [],
    status: "",
  });
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  //const [isCount, setIsCount] = useState(false);

  // URLの取得
  const url = props.url;

  // APIの実行
  useEffect(() => {
    (async function () {
      setIsLoading(true);
      try {
        const res = await fetch(url);
        const jsonData = await res.json();
        console.log("Fetched Data: ", jsonData); // デバッグ用
        setDataList(jsonData);
        console.log("Updated DataList: ", jsonData); // デバッグ用
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    })();
  }, [url]);

  //表形式にするためのテーブルヘッダを作成する
  const renderTableHeader = () => {
    if (dataList) {
      //ヘッダの値を取り出す
      const headers = Object.keys(dataList.results[0]);
      console.log("header" + headers);
      return headers.map((key, index) => <th key={index}>{key}</th>);
    } else {
      console.log("Results array is empty or does not exist.");
      return null; // ヘッダーがない場合はnullを返す
    }
  };

  //表形式にするためのボディを作成する
  const renderTableBody = () => {
    if (dataList) {
      return (
        <tr>
          {Object.values(dataList.results[0]).map((value, i) => (
            <td css={tbodyStyle} key={i}>
              {value}
            </td>
          ))}
        </tr>
      );
    } else {
      return null;
    }
  };

  return (
    <div align="center">
      <h2>取得結果</h2>
      {dataList.results === null || dataList.results.length === 0 ? (
        "取得できませんでした"
      ) : (
        <div>
          <table>
            <thead>
              <tr css={theadStyle}>{renderTableHeader()}</tr>
            </thead>
            <tbody css={tbodyStyle}>{renderTableBody()}</tbody>
          </table>
          {/* <table>
            <thead>{dataList.message}</thead>
            {dataList.results.map((result, index) => (
              <td key={index}>{JSON.stringify(result)}</td>
            ))}
          </table> */}

          <p css={tbodyStyle}>ステータスコード：{dataList.status}</p>
        </div>
      )}
      {/* エラー時の場合はエラーを表示する */}
      {isError && <p style={{ color: "red" }}>エラーが発生しました</p>}
      {/* ローディング中は表示を切り替える */}
      {isLoading ? <p>データをローディング中です</p> : <></>}
    </div>
  );
};
