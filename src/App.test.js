import React from 'react';
import App from './App';
import {render, screen, fireEvent} from "@testing-library/react"

let update_form_input = (placeholder, value) => {
  const airport_input = screen.getByPlaceholderText(placeholder)
  fireEvent.change(airport_input, {target: {value}})
}
it("App.js integration test", async () => {
  const render_var = render(
      <App/>
  );
  update_form_input("KDSM", "kaus")
  const button = screen.getByText("check out airport")
  fireEvent.click(button)
  render_var.debug()
});
