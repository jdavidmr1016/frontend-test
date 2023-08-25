import { useDispatch } from "react-redux";
import { redirect } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useLogin } from "../../hooks/useLogin";
import { login } from "../../slices/authSlice";

export const AuthForm = () => {
  /* handle form state */
  const [formValues, handleInputChange] = useForm({
    usermail: "",
    password: "",
  });
  const dispatch = useDispatch();
  const { usermail, password } = formValues;

  /* Handle Form submiting */
  const handleSubmit = (e) => {
    e.preventDefault();
    const [auth, token] = useLogin(usermail, password);
    auth == "success" && Login(token);
  };
  /* handle login */
  const Login = (token) => {
    dispatch(login({ usermail, token }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        required
        placeholder="Username"
        name="usermail"
        value={usermail}
        onChange={handleInputChange}
        className="px-2 w-full h-12 bg-slate-100 outline-none border-b-2 border-[#531554] focus:border-b-4  transition-all ease-in-out delay-150 "
      />

      <input
        type="password"
        required
        placeholder="Password"
        name="password"
        value={password}
        onChange={handleInputChange}
        className="px-2 w-full h-12 bg-slate-100 outline-none border-b-2 border-[#531554] focus:border-b-4 transition-all ease-in-out delay-150"
      />
      <button
        type="submit"
        className="bg-[#682a69] hover:bg-[#531554] w-full text-white text-lg py-2 mt-12 shadow-lg shadow-[#531554] hover:shadow-xl hover:shadow-[#531554]  transition-all ease-in-out delay-150"
      >
        Log In
      </button>
    </form>
  );
};
