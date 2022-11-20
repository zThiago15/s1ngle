import { render, screen } from "@testing-library/react";
// import App from "../../App";
import Header from "../../components/Header";

describe('example test', () => {
  it('expect Header component to be loaded', () => {
    render(<Header />);

    const btnLogin = screen.getByText('LOGIN');
    expect(btnLogin).toBeInTheDocument();
  });
})
