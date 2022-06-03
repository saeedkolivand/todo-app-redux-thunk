import { cleanup } from "@testing-library/react";
import store from "app/store";

describe("redux tests", () => {
  afterAll(cleanup);

  it("should return the initial state", () => {
    expect(store.getState()).toEqual({
      TodosReducer: {
        todos: [],
        loading: false,
        hasError: false,
      },
    });
  });
});
