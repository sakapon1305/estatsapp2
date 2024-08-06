import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { LoginCom } from "../login/LoginCom";

jest.spyOn(window, "alert").mockImplementation(() => {});

// react-router-domをモックにする
//mockNavigate関数が呼び出され、画面制御する時にこれが代わりに呼び出される
const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("LoginCom", () => {
  //renderを行い、それぞれのテキストを読み込む
  it("1.renders loginCom", () => {
    render(
      <BrowserRouter>
        <LoginCom />
      </BrowserRouter>
    );

    //expectで囲み、期待されているものがあればOK
    expect(screen.getByText("Login")).toBeInTheDocument();
    expect(screen.getByText("ユーザーID")).toBeInTheDocument();
    expect(screen.getByText("パスワード")).toBeInTheDocument();
  });

  it("2.ログイン失敗時の挙動", () => {
    //.changeで変更できる、target{value}で指定する
    render(
      <BrowserRouter>
        <LoginCom />
      </BrowserRouter>
    );

    fireEvent.change(screen.getByPlaceholderText("userID"), {
      target: { value: "wrong" },
    });
    fireEvent.change(screen.getByPlaceholderText("password"), {
      target: { value: "wrong" },
    });
    fireEvent.click(screen.getByText("ログイン"));

    //toHaveBeenCalledWithでイベントを呼び出す
    expect(window.alert).toHaveBeenCalledWith("IDかパスワードが間違っています");
  });

  it("3.success login", () => {
    //.changeで変更できる、target{value}で指定する
    render(
      <BrowserRouter>
        <LoginCom />
      </BrowserRouter>
    );

    fireEvent.change(screen.getByPlaceholderText("userID"), {
      target: { value: "sample" },
    });
    fireEvent.change(screen.getByPlaceholderText("password"), {
      target: { value: "1" },
    });
    fireEvent.click(screen.getByText("ログイン"));
    //homeパスがusenavigateで呼び出されたかを確認する
    expect(mockNavigate).toHaveBeenCalledWith("/home");
    expect(window.alert).toHaveBeenCalledWith("通ったよ");
  });
});
