import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TransactionCreateStepTwo from "./TransactionCreateStepTwo";

// unit test for TransactionCreateStepTwo component

// test("on initial render, the pay button is disable", async () => {
//   render(<TransactionCreateStepTwo sender={{ id: "5" }} receiver={{ id: "5" }} />);
//   //   screen.debug();

//   //   screen.getByRole("");
//   expect(await screen.findByRole("button", { name: /pay/i })).toBeDisabled();
// });

// test("if an amount and note is entered, the pay button becomes enabled", async () => {
//   render(<TransactionCreateStepTwo sender={{ id: "5" }} receiver={{ id: "5" }} />);
//   userEvent.type(screen.getByPlaceholderText(/amount/i), "10");
//   userEvent.type(screen.getByPlaceholderText(/add a note/i), "dinner");

//   // screen.getByRole('');
//   expect(await screen.findByRole("button", { name: /pay/i })).toBeEnabled();
// });

// integration test for TransactionCreateStepTwo component

test("if an amount and note is entered, the pay button becomes enabled", async () => {
  render(<TransactionCreateStepTwo sender={{ id: "5" }} receiver={{ id: "5" }} />);
  
  expect(await screen.findByRole("button", { name: /pay/i })).toBeDisabled();
  
  userEvent.type(screen.getByPlaceholderText(/amount/i), "10");
  userEvent.type(screen.getByPlaceholderText(/add a note/i), "dinner");

  expect(await screen.findByRole("button", { name: /pay/i })).toBeEnabled();
});
