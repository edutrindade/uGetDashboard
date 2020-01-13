import React from "react";
import { Link } from "react-router-dom";
import avatar from "../../assets/avatar.png";

import "./styles.css";

const Header = () => (
  <div class="w3-bar-block w3-collapse w3-top">
    <ul class="navbar-nav ml-auto">
      <div class="navbar2">
        <li class="nav-item">
          <Link to="/closing-events" className="Link">
            <i class="fa fa-fw fa-money"></i> Fechamento
          </Link>
        </li>
        <li class="nav-item">
          <Link to="/" className="Link">
            <i class="fa fa-fw fa-user"></i> Usuários
          </Link>
        </li>
        <li class="nav-item">
          <Link to="/" className="Link">
            <i class="fa fa-fw fa-truck"></i> Estoque
          </Link>
        </li>
        <li class="nav-item">
          <Link to="/" className="Link">
            <i class="fa fa-fw fa-file-text"></i> Relatórios
          </Link>
        </li>
        <form class="form-inline mt-2">
          <div class="input-group">
            <div class="input-group-btn">
              <i class="fa fa-fw fa-search mr-2 mt-2" id="icon-color"></i>
            </div>
            <input
              type="search"
              for="input-sm"
              class="form-control mr-2"
              placeholder="Buscar evento..."
            />
            <img src={avatar} alt="Avatar" class="avatar2 ml-5" />

            <div className="avatar2-name ml-2">Administrador</div>
          </div>
        </form>
      </div>
    </ul>
  </div>
);

export default Header;
