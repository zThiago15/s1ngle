import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../../App";
import Header from "../../components/Header";

describe('Page home', () => {
  it('should render Header correctly', () => {
    render(<Header />);

    const btnLogin = screen.getByText(/login/i);
    const btnSignUp = screen.getByText(/cadastrar-se/i);
    const logo = screen.getByAltText(/logo s1ngle/i);

    expect(btnLogin).toBeInTheDocument();
    expect(btnSignUp).toBeInTheDocument();
    expect(logo).toBeInTheDocument();
  });
})
