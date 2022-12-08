import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

const LandingPage = ({ bckLanding, logo }) => {
  const [cookies, setCookie] = useCookies();
  const navi = useNavigate();
  const [username, setUser] = useState("");
  const [pass, setPass] = useState("");

  // const handleLogin = () => {
  //   axios({
  //     method: "post",
  //     url: "http://34.87.101.252:80/auth",
  //     data: {
  //       email: "joko@mail.com",
  //       password: "qwerty123",
  //     },
  //   })
  //     .then((response) => {
  //       console.log("ini test login", response.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // useEffect(
  //   ()=>handleLogin()
  // )

  const handleSubmit = (event) => {
    username ? navi("/dashboard") : alert("Silahkan isi terlebih dahulu");
    setCookie("Username", username, { path: "/" });
    event.preventDefault();
  };

  return (
    <div className="bg-white lg:h-screen w-full">
      <div className=" w-full h-screen lg:h-full static flex flex-row justify-between">
        <div className="rounded-lg w-2/6 h-max z-10 bg-white shadow-xl absolute top-1/4 right-2/6 left-1/4 p-20">
          <p className="text-4xl text-alta-dark font-bold my-20">
            Immersive Dashboard
          </p>
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            placeholder="email"
            value={username}
            onChange={(e) => setUser(e.target.value)}
            className="input input-bordered bg-white text-black w-full rounded-none"
            required
          />
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            className="input input-bordered bg-white text-black w-full rounded-none"
            required
          />
          <div className="flex justify-end pt-5">
            <button
              onClick={() => handleSubmit()}
              className="bg-alta-dark text-white btn"
            >
              Login
            </button>
          </div>
        </div>
        <img
          src={bckLanding}
          alt=""
          className="absolute lg:bottom-0 right-0 rounded-full z-1"
          width={900}
        />
      </div>

      {/* <div
        className="container-fluid min-h-screen bg-no-repeat bg-right"
        style={{ backgroundImage: `url(${bckLanding})` }}
      >
        <div
          className="bg-no-repeat bg-right-top mx-10 py-1"
          style={{ backgroundImage: `url(${logo})` }}
        >
          <div className="hero-content text-center py-72">
            <div className=" flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form
                className="card-body bg-white"
                onSubmit={() => handleSubmit()}
              >
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    value={username}
                    onChange={(e) => setUser(e.target.value)}
                    className="input input-bordered bg-white text-black"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    className="input input-bordered bg-white text-black"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default LandingPage;
