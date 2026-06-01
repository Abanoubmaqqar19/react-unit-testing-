import { useState } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const passwordError =
    password.length > 0 && password.length < 6
      ? "Password must be at least 6 characters"
      : "";

  const isValid = username && email && password.length >= 6;

  return (
    <form>
      <label htmlFor="username">Username</label>
      <input
        id="username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {passwordError && <p>{passwordError}</p>}

      <button type="submit" disabled={!isValid}>
        Submit
      </button>
    </form>
  );
}

export default RegistrationForm;
