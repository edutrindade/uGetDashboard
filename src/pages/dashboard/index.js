import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

import C3Chart from "react-c3js";

const Page = () => (
  <page id="main-page">
    <div className="dash-title">Dashboard</div>

    <div className="card-list">
      <div class="row">
        <div class="col-sm-3">
          <div class="card">
            <div class="card-body">
              <h6 class="card-title">Total de Vendas</h6>
              <p class="card-text">
                <strong>114.600,00</strong>
              </p>
              <C3Chart
                style={{ height: "10rem" }}
                data={{
                  columns: [
                    // colocar aqui o array com as vendas
                    [
                      "data1",
                      5000,
                      8000,
                      10000,
                      15200,
                      11200,
                      7000,
                      12000,
                      3000,
                      10000,
                      10000,
                      1500,
                      14000,
                      4700,
                      6500,
                      5500
                    ]
                  ],
                  type: "bar", // default type of chart
                  groups: [["data2", "data3"]],
                  colors: {
                    data1: "rgb(50,205,50)"
                  },
                  names: {
                    // name of each serie
                    data1: "R$ "
                  }
                }}
                axis={{
                  y: {
                    padding: {
                      bottom: 0
                    },
                    show: false,
                    tick: {
                      outer: false
                    }
                  },
                  x: {
                    padding: {
                      left: 0,
                      right: 0
                    },
                    show: false
                  }
                }}
                legend={{
                  show: false,
                  position: "middle",
                  padding: 30,
                  inset: {
                    anchor: "top-left",
                    x: 20,
                    y: 8,
                    step: 10
                  }
                }}
                tooltip={{
                  format: {
                    title: function(x) {
                      return "";
                    }
                  }
                }}
                padding={{
                  bottom: 50,
                  left: 40,
                  right: 60
                }}
                point={{
                  show: false
                }}
              />
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card">
            <div class="card-body">
              <h6 class="card-title">Produtos consumidos</h6>
              <p class="card-text">
                <strong>20.794</strong>
              </p>
              <C3Chart
                style={{ height: "10rem" }}
                data={{
                  columns: [
                    // colocar aqui o array com as vendas
                    [
                      "data1",
                      1500,
                      1800,
                      1200,
                      1152,
                      1200,
                      1700,
                      1400,
                      1300,
                      1125,
                      1147,
                      1150,
                      1450,
                      1470,
                      1650,
                      1550
                    ]
                  ],
                  type: "bar", // default type of chart
                  groups: [["data2", "data3"]],
                  colors: {
                    data1: "rgb(244,164,96)"
                  },
                  names: {
                    // name of each serie
                    data1: ""
                  }
                }}
                axis={{
                  y: {
                    padding: {
                      bottom: 0
                    },
                    show: false,
                    tick: {
                      outer: false
                    }
                  },
                  x: {
                    padding: {
                      left: 0,
                      right: 0
                    },
                    show: false
                  }
                }}
                legend={{
                  show: false,
                  position: "middle",
                  padding: 30,
                  inset: {
                    anchor: "top-left",
                    x: 20,
                    y: 8,
                    step: 10
                  }
                }}
                tooltip={{
                  format: {
                    title: function(x) {
                      return "";
                    }
                  }
                }}
                padding={{
                  bottom: 50,
                  left: 40,
                  right: 60
                }}
                point={{
                  show: false
                }}
              />
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card">
            <div class="card-body">
              <h6 class="card-title">Clientes atendidos</h6>
              <p class="card-text">
                <strong>6.389</strong>
              </p>
              <C3Chart
                style={{ height: "10rem" }}
                data={{
                  columns: [
                    // colocar aqui o array com as vendas
                    [
                      "data1",
                      200,
                      400,
                      300,
                      264,
                      366,
                      500,
                      545,
                      612,
                      299,
                      312,
                      455,
                      466,
                      470,
                      650,
                      550
                    ]
                  ],
                  type: "bar", // default type of chart
                  groups: [["data2", "data3"]],
                  colors: {
                    data1: "rgb(100,149,237)"
                  },
                  names: {
                    // name of each serie
                    data1: ""
                  }
                }}
                axis={{
                  y: {
                    padding: {
                      bottom: 0
                    },
                    show: false,
                    tick: {
                      outer: false
                    }
                  },
                  x: {
                    padding: {
                      left: 0,
                      right: 0
                    },
                    show: false
                  }
                }}
                legend={{
                  show: false,
                  position: "middle",
                  padding: 30,
                  inset: {
                    anchor: "top-left",
                    x: 20,
                    y: 8,
                    step: 10
                  }
                }}
                tooltip={{
                  format: {
                    title: function(x) {
                      return "";
                    }
                  }
                }}
                padding={{
                  bottom: 50,
                  left: 40,
                  right: 60
                }}
                point={{
                  show: false
                }}
              />
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card">
            <div class="card-body">
              <h6 class="card-title">Horário de pico de vendas</h6>
              <p class="card-text">
                <strong>21:35 - 22:15</strong>
              </p>
              <C3Chart
                style={{ height: "10rem" }}
                data={{
                  columns: [
                    // colocar aqui o array com as vendas
                    [
                      "data1",
                      100,
                      110,
                      115,
                      150,
                      180,
                      216,
                      312,
                      350,
                      400,
                      322,
                      280,
                      284,
                      248,
                      220,
                      200
                    ]
                  ],
                  type: "bar", // default type of chart
                  groups: [["data2", "data3"]],
                  colors: {
                    data1: "rgb(186,85,211)"
                  },
                  names: {
                    // name of each serie
                    data1: ""
                  }
                }}
                axis={{
                  y: {
                    padding: {
                      bottom: 0
                    },
                    show: false,
                    tick: {
                      outer: false
                    }
                  },
                  x: {
                    padding: {
                      left: 0,
                      right: 0
                    },
                    show: false
                  }
                }}
                legend={{
                  show: false,
                  position: "middle",
                  padding: 30,
                  inset: {
                    anchor: "top-left",
                    x: 20,
                    y: 8,
                    step: 10
                  }
                }}
                tooltip={{
                  format: {
                    title: function(x) {
                      return "";
                    }
                  }
                }}
                padding={{
                  bottom: 50,
                  left: 40,
                  right: 60
                }}
                point={{
                  show: false
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="card-list">
      <div class="row">
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h6 class="card-title">RANKING DE CAIXAS</h6>
            </div>
            <div className="card-table">
              <div class="table-responsive">
                <table class="table">
                  <thead class="thead-light">
                    <tr>
                      <th scope="col">NOME</th>
                      <th scope="col">SETOR</th>
                      <th scope="col">VENDAS</th>
                      <th scope="col">PERCENTUAL</th>
                      <th scope="col">TOTAL</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Alberes Santos</td>
                      <td>Setor A</td>
                      <td>752</td>
                      <td>43%</td>
                      <td>R$ 19.291,00</td>
                    </tr>
                    <tr>
                      <td>Greison Santos</td>
                      <td>Setor B</td>
                      <td>726</td>
                      <td>32%</td>
                      <td>R$ 17.638,00</td>
                    </tr>
                    <tr>
                      <td>Breno Lopes</td>
                      <td>Setor A</td>
                      <td>694</td>
                      <td>28%</td>
                      <td>R$ 16.218,00</td>
                    </tr>
                    <tr>
                      <td>Caíque Coelho</td>
                      <td>Setor A</td>
                      <td>645</td>
                      <td>24%</td>
                      <td>R$ 14.421,00</td>
                    </tr>
                    <tr>
                      <td>Júlio Santos</td>
                      <td>Setor C</td>
                      <td>539</td>
                      <td>20%</td>
                      <td>R$ 12.370,00</td>
                    </tr>
                    <tr>
                      <td>João Prado</td>
                      <td>Setor B</td>
                      <td>432</td>
                      <td>18%</td>
                      <td>R$ 9.928,00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h6 class="card-title">RANKING DE PRODUTOS</h6>
            </div>
            <div className="card-table">
              <div class="table-responsive">
                <table class="table">
                  <thead class="thead-light">
                    <tr>
                      <th scope="col">PRODUTO</th>
                      <th scope="col">MELHOR SETOR</th>
                      <th scope="col">TOTAL</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td width="60%">Heineken</td>
                      <td width="20%" align="middle">
                        <div className="setor-1">Setor A</div>
                      </td>
                      <td width="20%">R$ 8.291,00</td>
                    </tr>
                    <tr>
                      <td width="60%">Budweiser</td>
                      <td width="20%" align="middle">
                        <div className="setor-2">Setor B</div>
                      </td>
                      <td width="20%">R$ 7.650,00</td>
                    </tr>
                    <tr>
                      <td width="60%">Coca-Cola</td>
                      <td width="20%" align="middle">
                        <div className="setor-1">Setor A</div>
                      </td>
                      <td width="20%">R$ 6.450,00</td>
                    </tr>
                    <tr>
                      <td width="60%">Água Mineral</td>
                      <td width="20%" align="middle">
                        <div className="setor-3">Setor C</div>
                      </td>
                      <td width="20%">R$ 2.291,00</td>
                    </tr>
                    <tr>
                      <td width="60%">Brahma</td>
                      <td width="20%" align="middle">
                        <div className="setor-2">Setor B</div>
                      </td>
                      <td width="20%">R$ 2.050,00</td>
                    </tr>
                    <tr>
                      <td width="60%">Skol</td>
                      <td width="20%" align="middle">
                        <div className="setor-3">Setor C</div>
                      </td>
                      <td width="20%">R$ 1.784,00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="card-list">
      <div class="row">
        <div class="col-sm-3">
          <div class="card">
            <div class="card-body">
              <h6 class="card-title">TICKET MÉDIO</h6>
            </div>
            <C3Chart
              style={{ height: "12rem" }}
              data={{
                columns: [
                  // each columns data
                  ["data", 36.45]
                ],
                type: "gauge", // default type of chart
                colors: {
                  data: "#ffff40"
                },
                names: {
                  // name of each serie
                  data: "R$"
                }
              }}
              legend={{
                show: false, //hide legend
                position: "bottom",
                padding: 30,
                inset: {
                  anchor: "top-left",
                  x: 20,
                  y: 8,
                  step: 10
                }
              }}
              gauge={{
                min: 0,
                max: 150,
                units: "R$",
                label: {
                  format: function(value, ratio) {
                    return value;
                  }
                }
              }}
              padding={{
                bottom: 30,
                top: 0
              }}
            />
          </div>
        </div>

        <div class="col-sm-3">
          <div class="card">
            <div class="card-body">
              <h6 class="card-title">VENDAS POR SETOR</h6>
            </div>
            <C3Chart
              style={{ height: "12rem" }}
              data={{
                columns: [
                  // each columns data
                  ["data1", 51],
                  ["data2", 34],
                  ["data3", 15]
                ],
                type: "donut", // default type of chart
                colors: {
                  data1: "rgba(34,139,34)",
                  data2: "rgba(240,230,140)",
                  data3: "rgba(255,192,203)"
                },
                names: {
                  // name of each serie
                  data1: "Setor A",
                  data2: "Setor B",
                  data3: "Setor C"
                }
              }}
              legend={{
                show: true, //hide legend
                position: "right",
                padding: 30,
                inset: {
                  anchor: "top-left",
                  x: 20,
                  y: 8,
                  step: 10
                }
              }}
              donut={{
                title: "82.600"
              }}
              padding={{
                bottom: 30,
                top: 0
              }}
            />
          </div>
        </div>

        <div class="col-sm-3">
          <div class="card">
            <div class="card-body">
              <h6 class="card-title">TIMELINE</h6>
            </div>
            <div className="timeline">
              <ul class="list-group">
                <li class="list-group-item">
                  <div class="md-v-line"></div>
                  <i class="fas fa-balance-scale mr-4 pr-3 green-text fa-lg"></i>{" "}
                  Fechamento do evento
                </li>
                <li class="list-group-item">
                  <div class="md-v-line"></div>
                  <i class="far fa-gem mr-5 indigo-text fa-lg"></i>
                  Fechamento dos caixas
                </li>
                <li class="list-group-item">
                  <div class="md-v-line"></div>
                  <i class="fas fa-coins mr-5 amber-text fa-lg"></i>Primeira
                  venda
                </li>
                <li class="list-group-item">
                  <div class="md-v-line"></div>
                  <i class="fas fa-donate mr-5 cyan-text fa-lg"></i>Abertura dos
                  caixas
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="col-sm-3">
          <div class="card">
            <div class="card-body">
              <h6 class="card-title">MÉTODO DE PAGAMENTO</h6>
            </div>
            <C3Chart
              style={{ height: "12rem" }}
              data={{
                columns: [
                  // each columns data
                  ["data1", 52],
                  ["data2", 48]
                ],
                type: "donut", // default type of chart
                colors: {
                  data1: "rgba(131,111,255)",
                  data2: "rgba(220,220,220)"
                },
                names: {
                  // name of each serie
                  data1: "Cartão",
                  data2: "Dinheiro"
                }
              }}
              legend={{
                show: true, //hide legend
                position: "right",
                padding: 30,
                inset: {
                  anchor: "top-left",
                  x: 20,
                  y: 8,
                  step: 10
                }
              }}
              donut={{
                width: 20
              }}
              padding={{
                bottom: 30,
                top: 0
              }}
            />
          </div>
        </div>
      </div>
    </div>
  </page>
);

export default Page;
