import { useForm } from "../../hooks/useForm";
import { useLogin } from "../../hooks/useLogin";

export const AuthForm = () => {
  const [formValues, handleInputChange] = useForm({
    usermail: "",
    password: "",
  });
  const { usermail, password } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    useLogin(usermail, password);
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
