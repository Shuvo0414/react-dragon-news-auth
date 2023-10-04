import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const { creatUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    console.log(name, photo, email, password);

    //creat user
    creatUser(email, password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div>
        <h2 className="text-4xl text-center font-semibold">
          Register your account
        </h2>

        <form
          onSubmit={handleRegister}
          className=" my-7 md:w-3/4 lg:w-1/2 mx-auto "
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold">
                Your Name
              </span>
            </label>
            <input
              type="name"
              placeholder="Enter your name"
              name="name"
              className="input input-bordered bg-[#F3F3F3]"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold">
                Photo URL
              </span>
            </label>
            <input
              type="picture"
              placeholder="Enter your photo"
              name="photo"
              className="input input-bordered bg-[#F3F3F3]"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              name="email"
              className="input input-bordered bg-[#F3F3F3]"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered bg-[#F3F3F3]"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#403F3F] text-white">Register</button>
          </div>
        </form>
        <p className=" text-base font-semibold text-center mt-7">
          Already Have An Account ?
          <Link to={"/login"} className=" text-[#F75B5F] ml-2">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
