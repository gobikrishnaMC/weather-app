import { render, screen } from "@testing-library/react";
import PlaceHolderCard from "../Components/PlaceHolderCard";

describe("PlaceHolderCard", () => {
  test("renders mainHeading and SubHeading correctly", () => {
    const mainHeading = "Weather Information";
    const subHeading = "Enter a city to see the weather.";

    render(
      <PlaceHolderCard mainHeading={mainHeading} SubHeading={subHeading} />
    );

    expect(screen.getByText(mainHeading)).toBeInTheDocument();

    expect(screen.getByText(subHeading)).toBeInTheDocument();
  });
});
