import { saveSessionData } from "core/utils/auth";
import { makeLogin } from "core/utils/request";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import './styles.scss';

type FormData = {
  username: string;
  password: string;
}

const FormLogin = () => {
  const [hasError, setHasError] = useState(false);
  const { register, handleSubmit, errors } = useForm<FormData>();
  const history = useHistory();

  const onSubmit = (data: FormData) => {
    //chama a API
    makeLogin(data)
      .then(response => {
        setHasError(false);
        saveSessionData(response.data);
        history.push("/catalog");
      })
      .catch(() => {
        setHasError(true);
      });
  }

  return (
    <div className="form-container">
      <h1 className="lb-login">LOGIN</h1>
      {hasError && (
        <div className="alert alert-danger">
          Usuário ou senha inválidos!
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-container">
          <input
            type="email"
            className={`form-control input-base ${errors.username ? 'is-invalid':''}`}
            placeholder="Email"
            name="username"
            ref={register({
              required: "Campo obrigatório",
              pattern: {
                 value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                 message: "Email inválido"
              }
            })}
          />
          {errors.username && (
            <div className="invalid-feedback d-block">
               {errors.username.message}
            </div>
          )}
        </div>

        <div className="input-container">
          <input
            type="password"
            className={`form-control input-base ${errors.password ? 'is-invalid':''}`}
            placeholder="Senha"
            name="password"
            ref={register({ required: true })}
          />
          {errors.password && (
            <div className="invalid-feedback d-block">
              Campo inválido
            </div>
          )}
        </div>

        <div className="btn-container">
          <button className="btn-content">
            LOGAR
          </button>
        </div>
      </form>
    </div>
  )
}

export default FormLogin;