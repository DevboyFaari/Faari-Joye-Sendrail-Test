import { render } from "./test-utils";
import { App } from "./App";
import "@testing-library/jest-dom/extend-expect";

test("renders learn react link", () => {
  render(<App />);
  // expect(linkElement).toBeInTheDocument();
});
