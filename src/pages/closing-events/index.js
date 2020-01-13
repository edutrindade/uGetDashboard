import React from "react";
import { Link } from "react-router-dom";

import { MDBDataTable, MDBCard, MDBCardBody } from "mdbreact";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

const ClosingPage = () => (
  <page id="main-page">
    <div className="main-header">
      <div className="dash-title">
        <Link to="/dashboard" id="main-title">
          Dashboard
        </Link>
        <Link to="/close-event">
          <button type="button" className="btn-close">
            Fechar evento
          </button>
        </Link>
      </div>
    </div>
    <div class="closing-table-list">
      <MDBCard>
        <MDBCardBody>
          <h6 class="card-title">RANKING DE CAIXAS</h6>
          <MDBDataTable
            hover
            striped
            bordered
            small
            searchingLabel="Pesquisa"
            data={{
              columns: [
                {
                  label: "NOME",
                  field: "name",
                  sort: "asc",
                  width: 150
                },
                {
                  label: "SETOR",
                  field: "sector",
                  sort: "asc",
                  width: 270
                },
                {
                  label: "VENDAS",
                  field: "sales",
                  sort: "asc",
                  width: 200
                },
                {
                  label: "PERCENTUAL",
                  field: "percentage",
                  sort: "asc",
                  width: 100
                },
                {
                  label: "DÉBITO",
                  field: "debit",
                  sort: "asc",
                  width: 150
                },
                {
                  label: "CRÉDITO",
                  field: "credit",
                  sort: "asc",
                  width: 100
                },
                {
                  label: "DINHEIRO",
                  field: "money",
                  sort: "asc",
                  width: 100
                },
                {
                  label: "STATUS",
                  field: "status",
                  sort: "asc",
                  width: 100
                },
                {
                  label: "DETALHES",
                  field: "details",
                  sort: "asc",
                  width: 100
                }
              ],
              rows: [
                {
                  name: "Tiger Nixon",
                  sector: "Setor A",
                  sales: "132",
                  percentage: "11%",
                  debit: "R$ 120,00",
                  credit: "R$ 320,00",
                  money: "R$ 100,00",
                  status: "Fechado",
                  details: "Ver mais"
                },
                {
                  name: "Garrett Winters",
                  sector: "Setor A",
                  sales: "123",
                  percentage: "13%",
                  debit: "R$ 220,00",
                  credit: "R$ 170,00",
                  money: "R$ 100,00",
                  status: "Fechado",
                  details: "Ver mais"
                },
                {
                  name: "Ashton Cox",
                  sector: "Setor C",
                  sales: "111",
                  percentage: "34%",
                  debit: "R$ 320,00",
                  credit: "R$ 86,00",
                  money: "R$ 100,00",
                  status: "Fechado",
                  details: "Ver mais"
                },
                {
                  name: "Cedric Kelly",
                  sector: "Setor B",
                  sales: "115",
                  percentage: "22%",
                  debit: "R$ 290,00",
                  credit: "R$ 433,00",
                  money: "R$ 100,00",
                  status: "Fechado",
                  details: "Ver mais"
                },
                {
                  name: "Airi Satou",
                  sector: "Setor A",
                  sales: "121",
                  percentage: "33%",
                  debit: "R$ 120,00",
                  credit: "R$ 162,00",
                  money: "R$ 100,00",
                  status: "Fechado",
                  details: "Ver mais"
                },
                {
                  name: "Brielle Williamson",
                  sector: "Setor B",
                  sales: "100",
                  percentage: "16%",
                  debit: "R$ 270,00",
                  credit: "R$ 372,00",
                  money: "R$ 100,00",
                  status: "Fechado",
                  details: "Ver mais"
                },
                {
                  name: "Herrod Chandler",
                  sector: "Setor A",
                  sales: "105",
                  percentage: "19%",
                  debit: "R$ 212,00",
                  credit: "R$ 137,00",
                  money: "R$ 100,00",
                  status: "Fechado",
                  details: "Ver mais"
                },
                {
                  name: "Rhona Davidson",
                  sector: "Setor C",
                  sales: "107",
                  percentage: "25%",
                  debit: "R$ 120,00",
                  credit: "R$ 327,00",
                  money: "R$ 100,00",
                  status: "Fechado",
                  details: "Ver mais"
                },
                {
                  name: "Colleen Hurst",
                  sector: "Setor B",
                  sales: "102",
                  percentage: "39%",
                  debit: "R$ 90,00",
                  credit: "R$ 205,00",
                  money: "R$ 100,00",
                  status: "Fechado",
                  details: "Ver mais"
                },
                {
                  name: "Sonya Frost",
                  sector: "Setor B",
                  sales: "91",
                  percentage: "23%",
                  debit: "R$ 108,00",
                  credit: "R$ 103,00",
                  money: "R$ 100,00",
                  status: "Fechado",
                  details: "Ver mais"
                },
                {
                  name: "Jena Gaines",
                  sector: "Setor C",
                  sales: "107",
                  percentage: "30%",
                  debit: "R$ 120,00",
                  credit: "R$ 90,00",
                  money: "R$ 100,00",
                  status: "Fechado",
                  details: "Ver mais"
                },
                {
                  name: "Quinn Flynn",
                  sector: "Setor A",
                  sales: "105",
                  percentage: "22%",
                  debit: "R$ 113,00",
                  credit: "R$ 342,00",
                  money: "R$ 100,00",
                  status: "Fechado",
                  details: "Ver mais"
                },
                {
                  name: "Charde Marshall",
                  sector: "Setor A",
                  sales: "162",
                  percentage: "36%",
                  debit: "R$ 100,00",
                  credit: "R$ 470,00",
                  money: "R$ 100,00",
                  status: "Fechado",
                  details: "Ver mais"
                },
                {
                  name: "Haley Kennedy",
                  sector: "Setor B",
                  sales: "189",
                  percentage: "43%",
                  debit: "R$ 112,00",
                  credit: "R$ 313,00",
                  money: "R$ 100,00",
                  status: "Fechado",
                  details: "Ver mais"
                },
                {
                  name: "Tatyana Fitzpatrick",
                  sector: "Setor A",
                  sales: "197",
                  percentage: "19%",
                  debit: "R$ 100,00",
                  credit: "R$ 385,00",
                  money: "R$ 100,00",
                  status: "Fechado",
                  details: "Ver mais"
                },
                {
                  name: "Michael Silva",
                  sector: "Setor C",
                  sales: "190",
                  percentage: "16%",
                  debit: "R$ 90,00",
                  credit: "R$ 198,00",
                  money: "R$ 100,00",
                  status: "Fechado",
                  details: "Ver mais"
                },
                {
                  name: "Paul Byrd",
                  sector: "Setor C",
                  sales: "144",
                  percentage: "14%",
                  debit: "R$ 110,00",
                  credit: "R$ 725,00",
                  money: "R$ 100,00",
                  status: "Fechado",
                  details: "Ver mais"
                },
                {
                  name: "Gloria Little",
                  sector: "Setor A",
                  sales: "132",
                  percentage: "19%",
                  debit: "R$ 110,00",
                  credit: "R$ 237,00",
                  money: "R$ 100,00",
                  status: "Fechado",
                  details: "Ver mais"
                },
                {
                  name: "Bradley Greer",
                  sector: "Setor A",
                  sales: "100",
                  percentage: "41%",
                  debit: "R$ 120,00",
                  credit: "R$ 132,00",
                  money: "R$ 100,00",
                  status: "Fechado",
                  details: "Ver mais"
                },
                {
                  name: "Dai Rios",
                  sector: "Setor A",
                  sales: "70",
                  percentage: "35%",
                  debit: "R$ 126,00",
                  credit: "R$ 217,00",
                  money: "R$ 100,00",
                  status: "Fechado",
                  details: "Ver mais"
                },
                {
                  name: "Jenette Caldwell",
                  sector: "Setor B",
                  sales: "78",
                  percentage: "30%",
                  debit: "R$ 221,00",
                  credit: "R$ 345,00",
                  money: "R$ 100,00",
                  status: "Fechado",
                  details: "Ver mais"
                },
                {
                  name: "Yuri Berry",
                  sector: "Setor B",
                  sales: "200",
                  percentage: "40%",
                  debit: "R$ 260,00",
                  credit: "R$ 675,00",
                  money: "R$ 100,00",
                  status: "Fechado",
                  details: "Ver mais"
                },
                {
                  name: "Caesar Vance",
                  sector: "Setor A",
                  sales: "117",
                  percentage: "21%",
                  debit: "R$ 220,00",
                  credit: "R$ 106,00",
                  money: "R$ 100,00",
                  status: "Fechado",
                  details: "Ver mais"
                },
                {
                  name: "Doris Wilder",
                  sector: "Setor C",
                  sales: "54",
                  percentage: "23%",
                  debit: "R$ 130,00",
                  credit: "R$ 85,00",
                  money: "R$ 100,00",
                  status: "Fechado",
                  details: "Ver mais"
                },
                {
                  name: "Angelica Ramos",
                  sector: "Setor A",
                  sales: "30",
                  percentage: "17%",
                  debit: "R$ 109,00",
                  credit: "R$ 1,00",
                  money: "R$ 100,00",
                  status: "Fechado",
                  details: "Ver mais"
                },
                {
                  name: "Gavin Joyce",
                  sector: "Setor C",
                  sales: "45",
                  percentage: "22%",
                  debit: "R$ 320,00",
                  credit: "R$ 92,00",
                  money: "R$ 100,00",
                  status: "Fechado",
                  details: "Ver mais"
                },
                {
                  name: "Jennifer Chang",
                  sector: "Setor B",
                  sales: "70",
                  percentage: "28%",
                  debit: "R$ 110,00",
                  credit: "R$ 357,00",
                  money: "R$ 100,00",
                  status: "Fechado",
                  details: "Ver mais"
                },
                {
                  name: "Brenden Wagner",
                  sector: "Setor C",
                  sales: "80",
                  percentage: "28%",
                  debit: "R$ 111,00",
                  credit: "R$ 206,00",
                  money: "R$ 100,00",
                  status: "Fechado",
                  details: "Ver mais"
                },
                {
                  name: "Fiona Green",
                  sector: "Setor A",
                  sales: "88",
                  percentage: "18%",
                  debit: "R$ 120,00",
                  credit: "R$ 850,00",
                  money: "R$ 100,00",
                  status: "Fechado",
                  details: "Ver mais"
                },
                {
                  name: "Shou Itou",
                  sector: "Setor A",
                  sales: "165",
                  percentage: "20%",
                  debit: "R$ 310,00",
                  credit: "R$ 163,00",
                  money: "R$ 100,00",
                  status: "Fechado",
                  details: "Ver mais"
                },
                {
                  name: "Michelle House",
                  sector: "Setor B",
                  sales: "124",
                  percentage: "37%",
                  debit: "R$ 68,00",
                  credit: "R$ 95,00",
                  money: "R$ 100,00",
                  status: "Fechado",
                  details: "Ver mais"
                },
                {
                  name: "Suki Burks",
                  sector: "Setor A",
                  sales: "136",
                  percentage: "13%",
                  debit: "R$ 78,00",
                  credit: "R$ 114,00",
                  money: "R$ 100,00",
                  status: "Fechado",
                  details: "Ver mais"
                },
                {
                  name: "Prescott Bartlett",
                  sector: "Setor B",
                  sales: "138",
                  percentage: "27%",
                  debit: "R$ 88,00",
                  credit: "R$ 145,00",
                  money: "R$ 100,00",
                  status: "Fechado",
                  details: "Ver mais"
                },
                {
                  name: "Gavin Cortez",
                  sector: "Setor A",
                  sales: "160",
                  percentage: "22%",
                  debit: "R$ 90,00",
                  credit: "R$ 235,00",
                  money: "R$ 100,00",
                  status: "Fechado",
                  details: "Ver mais"
                },
                {
                  name: "Martena Mccray",
                  sector: "Setor A",
                  sales: "70",
                  percentage: "46%",
                  debit: "R$ 77,00",
                  credit: "R$ 324,00",
                  money: "R$ 100,00",
                  status: "Fechado",
                  details: "Ver mais"
                },
                {
                  name: "Unity Butler",
                  sector: "Setor A",
                  sales: "77",
                  percentage: "47%",
                  debit: "R$ 55,00",
                  credit: "R$ 85,00",
                  money: "R$ 100,00",
                  status: "Fechado",
                  details: "Ver mais"
                },
                {
                  name: "Howard Hatfield",
                  sector: "Setor A",
                  sales: "79",
                  percentage: "51%",
                  debit: "R$ 59,00",
                  credit: "R$ 164,00",
                  money: "R$ 100,00",
                  status: "Fechado",
                  details: "Ver mais"
                },
                {
                  name: "Hope Fuentes",
                  sector: "Setor A",
                  sales: "130",
                  percentage: "41%",
                  debit: "R$ 79,00",
                  credit: "R$ 109,00",
                  money: "R$ 100,00",
                  status: "Fechado",
                  details: "Ver mais"
                },
                {
                  name: "Vivian Harrell",
                  sector: "Setor C",
                  sales: "113",
                  percentage: "22%",
                  debit: "R$ 109,00",
                  credit: "R$ 452,00",
                  money: "R$ 100,00",
                  status: "Fechado",
                  details: "Ver mais"
                },
                {
                  name: "Timothy Mooney",
                  sector: "Setor C",
                  sales: "109",
                  percentage: "17%",
                  debit: "R$ 115,00",
                  credit: "R$ 136,00",
                  money: "R$ 100,00",
                  status: "Fechado",
                  details: "Ver mais"
                },
                {
                  name: "Jackson Bradshaw",
                  sector: "Setor A",
                  sales: "104",
                  percentage: "15%",
                  debit: "R$ 110,00",
                  credit: "R$ 645,00",
                  money: "R$ 100,00",
                  status: "Fechado",
                  details: "Ver mais"
                },
                {
                  name: "Olivia Liang",
                  sector: "Setor B",
                  sales: "102",
                  percentage: "24%",
                  debit: "R$ 140,00",
                  credit: "R$ 234,00",
                  money: "R$ 100,00",
                  status: "Fechado",
                  details: "Ver mais"
                },
                {
                  name: "Bruno Nash",
                  sector: "Setor A",
                  sales: "106",
                  percentage: "18%",
                  debit: "R$ 111,00",
                  credit: "R$ 163,00",
                  money: "R$ 100,00",
                  status: "Fechado",
                  details: "Ver mais"
                },
                {
                  name: "Sakura Yamamoto",
                  sector: "Setor A",
                  sales: "105",
                  percentage: "17%",
                  debit: "R$ 77,00",
                  credit: "R$ 139,00",
                  money: "R$ 100,00",
                  status: "Fechado",
                  details: "Ver mais"
                },
                {
                  name: "Thor Walton",
                  sector: "Setor B",
                  sales: "90",
                  percentage: "21%",
                  debit: "R$ 90,00",
                  credit: "R$ 98,00",
                  money: "R$ 100,00",
                  status: "Fechado",
                  details: "Ver mais"
                },
                {
                  name: "Finn Camacho",
                  sector: "Setor A",
                  sales: "72",
                  percentage: "17%",
                  debit: "R$ 90,00",
                  credit: "R$ 87,00",
                  money: "R$ 100,00",
                  status: "Fechado",
                  details: "Ver mais"
                },
                {
                  name: "Serge Baldwin",
                  sector: "Setor A",
                  sales: "82",
                  percentage: "14%",
                  debit: "R$ 80,00",
                  credit: "R$ 138,00",
                  money: "R$ 100,00",
                  status: "Fechado",
                  details: "Ver mais"
                },
                {
                  name: "Zenaida Frank",
                  sector: "Setor B",
                  sales: "45",
                  percentage: "13%",
                  debit: "R$ 81,00",
                  credit: "R$ 125,00",
                  money: "R$ 100,00",
                  status: "Fechado",
                  details: "Ver mais"
                },
                {
                  name: "Zorita Serrano",
                  sector: "Setor C",
                  sales: "44",
                  percentage: "16%",
                  debit: "R$ 79,00",
                  credit: "R$ 115,00",
                  money: "R$ 100,00",
                  status: "Fechado",
                  details: "Ver mais"
                },
                {
                  name: "Jennifer Acosta",
                  sector: "Setor C",
                  sales: "42",
                  percentage: "43%",
                  debit: "R$ 77,00",
                  credit: "R$ 75,00",
                  money: "R$ 100,00",
                  status: "Fechado",
                  details: "Ver mais"
                },
                {
                  name: "Cara Stevens",
                  sector: "Setor B",
                  sales: "50",
                  percentage: "46%",
                  debit: "R$ 137,00",
                  credit: "R$ 145,00",
                  money: "R$ 100,00",
                  status: "Fechado",
                  details: "Ver mais"
                },
                {
                  name: "Hermione Butler",
                  sector: "Setor C",
                  sales: "52",
                  percentage: "47%",
                  debit: "R$ 124,00",
                  credit: "R$ 356,00",
                  money: "R$ 100,00",
                  status: "Fechado",
                  details: "Ver mais"
                },
                {
                  name: "Lael Greer",
                  sector: "Setor C",
                  sales: "57",
                  percentage: "21%",
                  debit: "R$ 120,00",
                  credit: "R$ 103,00",
                  money: "R$ 100,00",
                  status: "Fechado",
                  details: "Ver mais"
                },
                {
                  name: "Jonas Alexander",
                  sector: "Setor A",
                  sales: "100",
                  percentage: "30%",
                  debit: "R$ 123,00",
                  credit: "R$ 86,00",
                  money: "R$ 100,00",
                  status: "Fechado",
                  details: "Ver mais"
                },
                {
                  name: "Shad Decker",
                  sector: "Setor A",
                  sales: "111",
                  percentage: "11%",
                  debit: "R$ 136,00",
                  credit: "R$ 183,00",
                  money: "R$ 100,00",
                  status: "Fechado",
                  details: "Ver mais"
                },
                {
                  name: "Michael Bruce",
                  sector: "Setor A",
                  sales: "110",
                  percentage: "29%",
                  debit: "R$ 146,00",
                  credit: "R$ 183,00",
                  money: "R$ 100,00",
                  status: "Fechado",
                  details: "Ver mais"
                },
                {
                  name: "Donna Snider",
                  sector: "Setor B",
                  sales: "62",
                  percentage: "27%",
                  debit: "R$ 152,00",
                  credit: "R$ 112,00",
                  money: "R$ 100,00",
                  status: "Fechado",
                  details: "Ver mais"
                }
              ]
            }}
            exportToCSV
            displayEntries
            entrieslabel
            //data={data}
          />
        </MDBCardBody>
      </MDBCard>
    </div>
  </page>
);

export default ClosingPage;
