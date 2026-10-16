import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach } from "vitest";

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

function EmployeeForm() {
  const [name, setName] = React.useState("");
  const [message, setMessage] = React.useState("");

  return (
    <div>
      <input
        aria-label="Employee name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button
        onClick={() =>
          setMessage(name.trim() ? `Welcome ${name}` : "Name is required")
        }
      >
        Submit
      </button>

      {message && <p role="status">{message}</p>}
    </div>
  );
}

describe("Employee Application Tests", () => {
  it("renders the input field", () => {
    render(<EmployeeForm />);

    expect(screen.getByLabelText("Employee name")).toBeInTheDocument();
  });

  it("shows validation for an empty name", async () => {
    const user = userEvent.setup();
    render(<EmployeeForm />);

    await user.click(screen.getByRole("button", { name: "Submit" }));

    expect(screen.getByRole("status")).toHaveTextContent(
      "Name is required"
    );
  });

  it("accepts a valid employee name", async () => {
    const user = userEvent.setup();
    render(<EmployeeForm />);

    await user.type(
      screen.getByLabelText("Employee name"),
      "Ravi"
    );

    await user.click(screen.getByRole("button", { name: "Submit" }));

    expect(screen.getByRole("status")).toHaveTextContent("Welcome Ravi");
  });

  it("mocks a successful API response", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => [{ id: 1, name: "Ravi" }],
      })
    );

    const response = await fetch("/api/employees");
    const data = await response.json();

    expect(data[0].name).toBe("Ravi");
  });
});
