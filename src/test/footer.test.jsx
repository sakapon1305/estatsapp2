import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../common/footer";

describe("Footer", () => {
  //renderを行い、それぞれのテキストを読み込む
  it("1.renders Footer", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    //expectで囲み、期待されているものがあればOK
    expect(screen.getByText("◼︎参考サイト")).toBeInTheDocument();
    expect(screen.getByText("Reactについて")).toBeInTheDocument();
  });
});
