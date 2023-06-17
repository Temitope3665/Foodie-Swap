import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { SubTitleBold } from "../components/common/Texts";

const queryClient = new QueryClient();

describe("Text component", () => {
  it("renders SubTitle Bold", () => {
    const props = { mt: "2px", children: "" };
    render(
      <QueryClientProvider client={queryClient}>
        <SubTitleBold {...props} />
      </QueryClientProvider>
    );
  });
});
