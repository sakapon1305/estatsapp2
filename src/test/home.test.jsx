import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { HomeCom } from "../common/HomeCom";

// react-router-domをモックにする
//mockNavigate関数が呼び出され、画面制御する時にこれが代わりに呼び出される
const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("HomeCom", () => {
  // renderを行い、それぞれのテキストを読み込む
  it("1. renders HomeCom", () => {
    render(
      <BrowserRouter>
        <HomeCom />
      </BrowserRouter>
    );

    expect(screen.getByText("E-Stats取得")).toBeInTheDocument();
    expect(screen.getByText("郵便番号から住所を取得")).toBeInTheDocument();
    expect(screen.getByText("ユーザー情報取得")).toBeInTheDocument();
    expect(screen.getByText("ログアウト")).toBeInTheDocument();
  });

  it("2. ボタンを押した時の挙動", () => {
    render(
      <BrowserRouter>
        <HomeCom />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByText("E-Stats取得"));
    expect(mockNavigate).toHaveBeenCalledWith("/estats");

    fireEvent.click(screen.getByText("郵便番号から住所を取得"));
    expect(mockNavigate).toHaveBeenCalledWith("/address");

    fireEvent.click(screen.getByText("ユーザー情報取得"));
    expect(mockNavigate).toHaveBeenCalledWith("/userInfo");

    fireEvent.click(screen.getByText("ログアウト"));
    expect(mockNavigate).toHaveBeenCalledWith("/");
  });
});
