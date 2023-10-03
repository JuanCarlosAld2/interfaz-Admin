import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginGetUser, loginSuccess } from "../../redux/actions/actions";
import style from "./Form.module.css";
import validation from "./validation";
import Logo from "../../assets/LogoDivano.jpg";


export default function Login({ login }) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();
  

  const handlerChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
    setErrors(validation({ ...userData, [name]: value }));
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
    dispatch(loginSuccess(userData));
    dispatch(loginGetUser(token));
    login(userData);
  };

  const isButtonDisabled = !userData.email || !userData.password;
  return (
    <div className={style.loginbox}>
      <div>
        <img src={Logo} alt="Logo" className={style.img} />
      </div>
      <h2>Bienvenidos</h2>
      <form onSubmit={handlerSubmit} className={style.Form}>
        <div className={style.userbox}>
          <label className={style.label}></label>
          <input
            name="email"
            type="email"
            placeholder="Insert Email"
            value={userData.email}
            onChange={handlerChange}
            className={style.input}
          />
          {errors.email && <p className={style.alert}>{errors.email}</p>}
        </div>
        <div className={style.userbox}>
          <label className={style.label}></label>
          <input
            name="password"
            type="password"
            placeholder="Insert Password"
            value={userData.password}
            onChange={handlerChange}
            className={style.input}
          />
          {errors.password && <p className={style.alert}>{errors.password}</p>}
        </div>
        <button className={style.button} disabled={isButtonDisabled}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
}
