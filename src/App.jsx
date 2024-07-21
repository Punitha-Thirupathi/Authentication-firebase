import React, { useState } from "react";
import Google_icon from "../src/assets/google_icon.png";
import FaceBook_icon from "../src/assets/facebook _icon.png";
import GitHub_icon from "../src/assets/github_icon.png";
import "./App.scss";
import { auth, googleProvider, fbProvider, githubProvider } from "./firebase";
import { signInWithPopup } from "firebase/auth";

const App = () => {
  const [user, setUser] = useState(null);

  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(user);

  return (
    <>
      <section>
        <div>
          <div className="buttonContainer">
            <img src={Google_icon} alt="" />
            <button onClick={googleLogin}>Google Login</button>
          </div>
          <div className="buttonContainer">
            <img src={FaceBook_icon} alt="" />
            <button>FaceBook Login Login</button>
          </div>
          <div className="buttonContainer">
            <img src={GitHub_icon} alt="" />
            <button>GitHub Login</button>
          </div>
        </div>
        <div>
          <h1>Email</h1>
        </div>
      </section>
    </>
  );
};

export default App;
