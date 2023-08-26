import { render, screen, cleanup } from "@testing-library/react";
import { describe, it, afterEach } from "vitest";
import { LoginPage } from "../components/auth/LoginPage";

describe("LoginPage", () => {
  afterEach(cleanup);

  it("Should render", () => {
    render(<LoginPage />);
  });
});
