import React, { Component } from "react";
import { Link } from "react-router-dom";
import Image from "../../assets/login.png";

import "./styles.css";

export default class Events extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="cont">
        <div className="col">
          <img src={Image} className="img" alt="wallpaper"></img>
        </div>

        <div className="col">
          <div className="mini-header">
            <Link to="/create-event" className="link">
              <button type="button" class="btn-create">
                Criar evento
              </button>
            </Link>
          </div>
          <div className="event-search">
            <strong> E V E N T O S </strong>
            <p>Você possui mais de um evento, selecione qual deseja acessar:</p>
            <form action="#">
              <input type="input" placeholder="buscar"></input>
            </form>
          </div>

          <div className="event-list">
            <Link to="/dashboard" className="link">
              <article>
                <strong>Evento 01</strong>
                <p>Rua Francisco Matarazzo, 1113, SP</p>
                <p>09/01/2020</p>
              </article>
            </Link>
            <Link to="/dashboard" className="link">
              <article>
                <strong>Evento 02</strong>
                <p>Rua Francisco Matarazzo, 1113, SP</p>
                <p>09/01/2020</p>
              </article>
            </Link>
            <Link to="/dashboard" className="link">
              <article>
                <strong>Evento 03</strong>
                <p>Rua Francisco Matarazzo, 1113, SP</p>
                <p>09/01/2020</p>
              </article>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
