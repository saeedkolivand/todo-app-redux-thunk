import { cleanup } from "@testing-library/react";
import { initLoadingPortal } from "ui-components/loading/loading.test";
import { initErrorModalPortal } from "ui-components/error/error.test";

describe("Home page tests", () => {
  beforeAll(() => {
    initLoadingPortal();
    initErrorModalPortal();
  });
  afterAll(cleanup);

  it("should render new todo on screen", () => {});
});
