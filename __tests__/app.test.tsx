import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import Page from "@/app/[lang]/page";
import { setChat } from "@/redux/chatSlice";

describe("Page", () => {
  test("renders without errors", () => {
    Element.prototype.scrollIntoView = jest.fn();

    render(
      <Provider store={store}>
        <Page />
      </Provider>
    );
  });

  test("renders welcome message when chat is empty", () => {
    render(
      <Provider store={store}>
        <Page />
      </Provider>
    );

    const welcomeMessage = screen.getByText("Welcome to GPT Light");
    expect(welcomeMessage).toBeInTheDocument();
  });

  test("scrolls to the bottom when chat updates", () => {
    const mockChat = [
      { role: "user", content: "Hello" },
      { role: "assistant", content: "Hi there!" },
    ];

    Element.prototype.scrollIntoView = jest.fn();

    const mockDispatch = jest.fn();
    jest.spyOn(store, "dispatch").mockImplementation(mockDispatch);

    render(
      <Provider store={store}>
        <Page />
      </Provider>
    );

    store.dispatch(setChat({ role: "user", content: "Hello" }));
    expect(Element.prototype.scrollIntoView).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalledWith(
      setChat({ role: "user", content: "Hello" })
    );
  });
});
