import React from 'react';
import './Form.css';

export default function Form() {
  return(
    
      <div className="container">
        <div className="form-image">
            <img src="assets/img/background.png" alt="Cadastro"/>
        </div>
        <div className="form">
            <form action="#">
                <div className="form-header">
                    <div className="title">
                        <h1>Cadastre-se</h1>
                    </div>
                    <div className="login-button">
                        <button><a href="#">Entrar</a></button>
                    </div>
                </div>

                <div className="input-group">
                    <div className="input-box">
                        <label htmlFor="firstname">Primeiro Nome</label>
                        <input id="firstname" type="text" name="firstname" placeholder="Digite seu primeiro nome" required/>
                    </div>

                    <div className="input-box">
                        <label htmlFor="lastname">Sobrenome</label>
                        <input id="lastname" type="text" name="lastname" placeholder="Digite seu sobrenome" required/>
                    </div>
                    <div className="input-box">
                        <label htmlFor="email">E-mail</label>
                        <input id="email" type="email" name="email" placeholder="Digite seu e-mail" required/>
                    </div>

                    <div className="input-box">
                        <label htmlFor="number">Celular</label>
                        <input id="number" type="tel" name="number" placeholder="(xx) xxxx-xxxx" required/>
                    </div>

                    <div className="input-box">
                        <label htmlFor="password">Senha</label>
                        <input id="password" type="password" name="password" placeholder="Digite sua senha" required/>
                    </div>


                    <div className="input-box">
                        <label htmlFor="confirmPassword">Confirme sua Senha</label>
                        <input id="confirmPassword" type="password" name="confirmPassword" placeholder="Digite sua senha novamente" required/>
                    </div>

                </div>

                <div className="gender-inputs">
                    <div className="gender-title">
                        <h6>Gênero</h6>
                    </div>

                    <div className="gender-group">
                        <div className="gender-input">
                            <input id="female" type="radio" name="gender"/>
                            <label htmlFor="female">Feminino</label>
                        </div>

                        <div className="gender-input">
                            <input id="male" type="radio" name="gender"/>
                            <label htmlFor="male">Masculino</label>
                        </div>

                        <div className="gender-input">
                            <input id="others" type="radio" name="gender"/>
                            <label htmlFor="others">Outros</label>
                        </div>

                        <div className="gender-input">
                            <input id="none" type="radio" name="gender"/>
                            <label htmlFor="none">Prefiro não dizer</label>
                        </div>
                    </div>
                </div>

                <div className="continue-button">
                    <button><a href="#">Continuar</a> </button>
                </div>
            </form>
        </div>
    </div>
    
  );
}