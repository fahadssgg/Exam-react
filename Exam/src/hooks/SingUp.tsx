import React from "react";
import axios from "axios";
export default function SingUp() {
  const [form, setForm] = React.useState({
    username: "",
    password: "",
    Email: "",
  });

  React.useEffect(() => {
    axios.get("https://fakestoreapi.com/users").then((res) => {
      setForm(res.data);
      console.log(res.data.password);
    });
  }, []);

  const LogIn = () => {};
  return (
    <div className="flex flex-col   h-screen justify-center items-center">
      <div className="flex flex-col gap-5 bg-slate-100 rounded-lg p-10 w-2/5 h-80 justify-center items-center">
        <h1 className="font-bold text-5xl">Sing Up</h1>

        <input
          className="border-2 border-black  "
          placeholder="Email"
          value={form.Email}
          onChange={(e) => {
            setForm({
              ...form,
              Email: e.target.value,
            });
          }}
        />
        <input
          className="border-2 border-black   "
          placeholder="UserName"
          value={form.username}
          onChange={(e) => {
            setForm({
              ...form,
              username: e.target.value,
            });
          }}
        />

        <input
          className="border-2 border-black  "
          placeholder="Password"
          value={form.password}
          onChange={(e) => {
            setForm({
              ...form,
              password: e.target.value,
            });
          }}
        />

        <button
          className="border-2 border-black font-bold w-40  "
          onClick={LogIn}
        >
          LogIn
        </button>
        <p>
          You Have Account? <a href="/Singin">Singin</a>
        </p>
      </div>
    </div>
  );
}
