import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "../../pages/Home";

describe('example test', async () => {
  it('expect Home page to be loaded', () => {
    render(<Home />, { wrapper: BrowserRouter });

    expect(screen.getByText(/home/i)).toBeInTheDocument();

  });
})
