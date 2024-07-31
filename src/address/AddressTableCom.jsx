import AddressConst from "./AddressConst";
import { H01Addresshooks } from "./hooks/H01Addresshooks";

export const AddressTableCom = (props) => {
  //引数を受け取る
  const zipCode = props.text;
  console.log(`IDは${zipCode}`);

  //入力データが入力データが空OR NULLでない時に実行する
  if (zipCode !== null && zipCode !== "") {
    console.log("zipCode判定に通りました");
    //URLの取得
    var url = AddressConst.POSTDATA_URL_01;
    url = url + zipCode;
    return <H01Addresshooks url={url} />;
  }
  //分岐を通らない場合
  else {
    console.log("通ってません");
    //window.alert("予測不明のエラー");
  }
};
