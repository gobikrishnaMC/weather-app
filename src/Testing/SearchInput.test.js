import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import SearchInput from "../Components/SearchInput";

global.alert = jest.fn();
global.fetch = jest.fn().mockResolvedValue({
  json: jest.fn().mockResolvedValue({
    main: { temp: 289.5 },
    weather: [{ description: "clear sky" }],
  }),
});

test("should call fetchWeather function on clicking search button", async () => {
  render(<SearchInput />);

  const input = screen.getByPlaceholderText(/Search City/i);
  fireEvent.change(input, { target: { value: "London" } });

  const button = screen.getByTestId("search-button");
  fireEvent.click(button);

  await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));

  expect(fetch).toHaveBeenCalledWith(expect.stringContaining("London"));
});
