import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";


function AuthPage() {
  const [showRegister, setShowRegister] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { logIn, register: authRegister } = useAuth ();
    const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      setError("");
      setLoading(true);
      // api call here
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await logIn(email, password);
      navigate('/projects');

    } catch (error: any) {
      console.error(error.message);
      setError(error.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault()
    try {
      setError("");
      setLoading(true);
      // api call here
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await authRegister(username, email, password);

      setShowRegister(false);
      setError('Registration successful! Login when ready.')

    } catch (error: any) {
      console.error(error.message);
      setError(error.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-white flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mt-10 text-center">
        Start managing your projects.
      </h1>

      {/* ERROR  */}
      {error && <div>{error}</div>}

      {/* FORM  */}
      {showRegister ? (
        <form
          onSubmit={handleRegister}
          className="border mt-10 p-2 h-60 w-150 flex flex-col justify-around items-center rounded"
        >
          <div className="text-xl font-bold">Register</div>

          <label htmlFor="username">
            Username:
            <input
              type="text"
              name="username"
              id=""
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="ml-2 border rounded"
            />
          </label>
          <label htmlFor="email">
            Email:
            <input
              type="text"
              name="email"
              id=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="ml-10 border rounded"
            />
          </label>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              name="password"
              id=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="ml-3 border rounded"
            />
          </label>

          <input
            type="submit"
            value="Register"
            className="border py-2 px-4 rounded"
          />

          {/* LOADING  */}
          {loading && <div className="animate-pulse">...</div>}
        </form>
      ) : (
        <form
          onSubmit={handleLogin}
          className="border mt-10 p-2 h-60 w-150 flex flex-col justify-around items-center rounded"
        >
          <div className="text-xl font-bold">Login</div>
          <label htmlFor="email">
            Email:
            <input
              type="text"
              name="email"
              id=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="ml-10 border rounded"
            />
          </label>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              name="password"
              id=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="ml-3 border rounded"
            />
          </label>
          <input
            type="submit"
            value="Login"
            className="border py-2 px-4 rounded"
          />

          {/* LOADING  */}
          {loading && <div className="animate-pulse">...</div>}
        </form>
      )}

      {/* TOGGLE FORM  */}
      {showRegister ? (
        <div>
          Already have an account?{" "}
          <span
            className="text-blue-500 hover:cursor-pointer"
            onClick={() => setShowRegister(false)}
          >
            Sign in
          </span>{" "}
        </div>
      ) : (
        <div>
          Don't have an account?{" "}
          <span
            className="text-blue-500 hover:cursor-pointer"
            onClick={() => setShowRegister(true)}
          >
            Sign up
          </span>{" "}
        </div>
      )}
    </div>
  );
}

export default AuthPage;