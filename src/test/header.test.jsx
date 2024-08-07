import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../common/header";

describe("header", () => {
  //renderを行い、それぞれのテキストを読み込む
  it("1.renders Header", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    //expectで囲み、期待されているものがあればOK
    expect(screen.getByText("React Sample ver1.0")).toBeInTheDocument();
  });
});
