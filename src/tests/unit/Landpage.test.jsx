import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../../App";

describe('Landpage', () => {
  it('should render Header section', () => {
    render(<App />, {wrapper: BrowserRouter});

    const btnLogin = screen.getByText(/login/i);
    const btnSignUp = screen.getByText(/cadastrar-se/i);
    const logo = screen.getByAltText(/logo s1ngle/i);
    const iptSearch = screen.getByPlaceholderText(/escreva aqui.../i);

    expect(btnLogin).toBeInTheDocument();
    expect(btnSignUp).toBeInTheDocument();
    expect(logo).toBeInTheDocument();
    expect(iptSearch).toBeInTheDocument();
  });

  it('should render home section', () => {
    render(<App />, {wrapper: BrowserRouter});

  })
})
