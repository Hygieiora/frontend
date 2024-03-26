import { render, screen } from "@testing-library/react";
import HeroSection from "./HeroSection";

describe("HeroSection", () => {
  const items = [
    {
      imgPath: "image1.jpg",
      title: "Title 1",
      description: "Description 1",
    },
    {
      imgPath: "image2.jpg",
      title: "Title 2",
      description: "Description 2",
    },
  ];

  test("renders carousel items correctly", () => {
    render(<HeroSection items={items} />);

    // Assert that the first carousel item is rendered
    const firstItemTitle = screen.getByText("Title 1");
    expect(firstItemTitle).toBeInTheDocument();

    // Assert that the second carousel item is rendered
    const secondItemTitle = screen.getByText("Title 2");
    expect(secondItemTitle).toBeInTheDocument();
  });

  test("changes slide every 5 seconds", () => {
    jest.useFakeTimers();

    render(<HeroSection items={items} />);

    // Assert that the initial active slide is the first item
    const firstItemTitle = screen.getByText("Title 1");
    expect(firstItemTitle).toBeInTheDocument();

    // Advance the slide
    jest.advanceTimersByTime(5000);

    // Assert that the active slide has changed to the second item
    const secondItemTitle = screen.getByText("Title 2");
    expect(secondItemTitle).toBeInTheDocument();
  });
});
