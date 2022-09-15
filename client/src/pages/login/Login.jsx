import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginStart, loginSuccess, loginFail } from "../../redux/authSlice";
import "./login.scss"
function Login() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const auth = useSelector((state) => state.auth);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post("/auth/login", {
        username,
        password,
      });
      dispatch(loginSuccess(res.data));

      localStorage.setItem("user", JSON.stringify(res.data));
      navigate("/");
    } catch (error) {
      dispatch(loginFail(error));
    }
  };

  return (
    <div className="login">
        <span className="logo">pera palas</span>
      <form className="form" onSubmit={(e) => handleSubmit(e)} action="">
        <input   onChange={(e) => setUsername(e.target.value)} type="text" />
        <input   onChange={(e) => setPassword(e.target.value)} type="password" />
        <button className="submit">Giriş Yap</button>
        {auth.loading && <span style={{
            color:"white",
            textAlign:"center",
            marginTop:"10px"

        }}>Giriş yapılıyor...</span>}
        {auth.error && <span style={{
            color:"tomato",
            textAlign:"center",
            marginTop:"10px"
            
        }}>Giriş Başarısız</span>}
        {auth.user && (
          <span
          style={{
            color:"green",
            textAlign:"center",
            marginTop:"10px"
            
        }}
          >Giriş Başarılı Anasayfaya Yönlendiriliyorsunuz...</span>
        )}
      </form>
    </div>
  );
}

export default Login;
