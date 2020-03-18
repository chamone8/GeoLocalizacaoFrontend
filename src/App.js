import React from 'react';
import "./css/global.css";
import "./css/App.css";
import "./css/Sidebar.css";
import "./css/Main.css";

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>

        <form>
          <div className="input-block">
            <label htmlFor="github-username">Usuário do Github </label>
            <input name="github-username" id="github-username" required />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>

      </aside>

      <main>
        <ul >
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/34940720?s=460&u=099958ac793e89425f5ac41446179f40b13228e5&v=4" alt="felipe" />
              <div className="user-info">
                <strong>Felipe Chamone</strong>
                <span>Node.js, react, c#</span>
              </div>
            </header>
            <p>Apaixonado por Tecnologia e amo desenvolver</p>
            <a href="">Acessar perfil do GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/34940720?s=460&u=099958ac793e89425f5ac41446179f40b13228e5&v=4" alt="f" />               
              <div className="user-info"> 
                <strong>Felipe Chamone</strong>
                <span>Node.js, react, c#</span>
              </div>
            </header>
            <p>Apaixonado por Tecnologia e amo desenvolver</p>
            <a href="">Acessar perfil do GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/34940720?s=460&u=099958ac793e89425f5ac41446179f40b13228e5&v=4" alt="f" />
              <div className="user-info">
                <strong>Felipe Chamone</strong>
                <span>Node.js, react, c#</span>
              </div>
            </header>
            <p>Apaixonado por Tecnologia e amo desenvolver</p>
            <a href="">Acessar perfil do GitHub</a>
          </li>

        </ul>
      </main>

    </div>
  );
}

export default App;
