import React, { useState, useEffect } from 'react';
import "./css/global.css";
import "./css/App.css";
import "./css/Sidebar.css";
import "./css/Main.css";
import api from "./Services/api";

function App() {
  const [devs, setDev] = useState([]);
  const [techs, setTechs] = useState('');
  const [github_username, setGithubUsername] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);

      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    )
  }, []);

  useEffect(() => {
    async function loadDev() {
      const response = await api.get('/devs');

      setDev(response.data);
    }
    loadDev();

  }, [])

  async function handleAddDev(e) {
    e.preventDefault();

    const response = await api.post('/devs', {
      github_username,
      techs,
      latitude,
      longitude
    })
    
    setGithubUsername('');
    setTechs('');

    setDev([...devs, response.data]);
  }


  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>

        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="github-username">Usuário do Github </label>
            <input type="text" name="github-username" id="github-username" value={github_username} onChange={e => setGithubUsername(e.target.value)} required />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input type="text" name="techs" id="techs" value={techs} onChange={e => setTechs(e.target.value)} required />
          </div>
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input type='number' name="latitude" id="latitude" value={latitude} onChange={e => setLatitude(e.target.value)} required />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input type='number' name="longitude" id="longitude" value={longitude} onChange={e => e.target.value} required />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>

      </aside>

      <main>
        <ul >
          {devs.map(dev => (
            <li key={dev._id} className="dev-item">
              <header>
                <img src={dev.avatar_url} alt={dev.name} />
                <div className="user-info">
                  <strong>{dev.name}</strong>
                  <span>{dev.techs.join(', ')}</span>
                </div>
              </header>
              <p>{dev.bio}</p>
              <a href={`https://github.com/${dev.github_username}`}>Acessar perfil do GitHub</a>
            </li>
          ))}

        </ul>
      </main>

    </div>
  );
}

export default App;
