import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { EstatsCom } from "../estats/EstatsCom";
import axios from "axios";

jest.mock("axios");
const postApiMock = jest.spyOn(axios, "post").mockName("axios-post");

// モックの戻り値を適宜セット
postApiMock.mockResolvedValue({});

// react-router-domをモックにする
//mockNavigate関数が呼び出され、画面制御する時にこれが代わりに呼び出される
const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("EstatsCom", () => {
  // renderを行い、それぞれのテキストを読み込む
  it("1. renders EstatsCom", () => {
    render(
      <BrowserRouter>
        <EstatsCom />
      </BrowserRouter>
    );

    expect(
      screen.getByText("東京都の社会・人口統計体系のデータ(65歳以上)を取得する")
    ).toBeInTheDocument();
    expect(
      screen.getByText("千葉県の社会・人口統計体系のデータ(65歳以上)を取得する")
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "神奈川県の社会・人口統計体系のデータ(65歳以上)を取得する"
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText("埼玉県の社会・人口統計体系のデータ(65歳以上)を取得する")
    ).toBeInTheDocument();
    expect(screen.getByText("戻る")).toBeInTheDocument();
    expect(screen.getByText("クリア")).toBeInTheDocument();
  });

  it("2. ボタンを押した時の挙動", () => {
    render(
      <BrowserRouter>
        <EstatsCom />
      </BrowserRouter>
    );

    fireEvent.click(
      screen.getByText("東京都の社会・人口統計体系のデータ(65歳以上)を取得する")
    );

    fireEvent.click(screen.getByText("戻る"));
    expect(mockNavigate).toHaveBeenCalledWith("/home");

    fireEvent.click(screen.getByText("クリア"));
    expect(screen.getByText("isGraphId")).toHaveBeenCalledWith("");
    expect(screen.getByText("isTitle")).toHaveBeenCalledWith("");
  });
});
