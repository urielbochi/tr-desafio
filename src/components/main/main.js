import "./main.css";
import logo from "../../images/logo.svg";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useContext, useEffect, useRef, useState } from "react";
import userIcon from "../../images/user.png";
import { MyContext } from "../../context/context";
import { recoverFromLocalStorage } from "../../services/generalFunctions";

function Main() {
  const { assetsObjectProp } = useContext(MyContext);
  const { url, setMainData, urlRoute } = assetsObjectProp;
  const [healthChartOptions, setHealthChartOptions] = useState({});
  const [temperatureChartOptions, setTemperatureChartOptions] = useState({});
  const [healthState, setHealthState] = useState([]);
  const [temperatureState, setTemperatureState] = useState([]);
  const chartComponent = useRef(null);
  const [operating, setOperating] = useState(0);
  const [alert, setAlert] = useState(0);
  const [downtime, setDowntime] = useState(0);
  const recoverDataFromLocalStorage = JSON.parse(
    localStorage.getItem("assets")
  );

  useEffect(() => {
    if (!recoverDataFromLocalStorage) {
      recoverFromLocalStorage(url, urlRoute, setMainData);
    }

    let fetchHealthData = recoverDataFromLocalStorage.map((data) => {
      return {
        name: data.name,
        y: parseInt(data.healthscore),
      };
    });

    let fetchTemperatureData = recoverDataFromLocalStorage.map((data) => {
      return {
        name: data.name,
        y: parseInt(data.specifications.maxTemp),
      };
    });

    let operating = recoverDataFromLocalStorage.filter(
      (item) => item.status === "inOperation"
    );
    let alert = recoverDataFromLocalStorage.filter(
      (item) => item.status === "inAlert"
    );
    let downtime = recoverDataFromLocalStorage.filter(
      (item) => item.status === "inDowntime"
    );

    setOperating(operating.length);
    setAlert(alert.length);
    setDowntime(downtime.length);
    setHealthState(fetchHealthData);
    setTemperatureState(fetchTemperatureData);
  }, []);

  if (!recoverDataFromLocalStorage) {
    window.setTimeout(function () {
      window.location.reload();
    }, 1000);
  }

  useEffect(() => {
    setHealthChartOptions({
      chart: {
        type: "column",
      },
      title: {
        text: "Gráfico de saúde das máquinas",
      },
      accessibility: {
        announceNewData: {
          enabled: true,
        },
      },
      xAxis: {
        type: "category",
      },
      yAxis: {
        title: {
          text: "Vida das máquinas",
        },
      },
      resposive: {
        rules: [
          {
            condition: {
              maxWidth: 400,
            },
            chartOptions: {
              legend: { enabled: false },
            },
          },
        ],
      },
      legend: {
        enabled: false,
      },
      plotOptions: {
        series: {
          borderWidth: 0,
          dataLabels: {
            enabled: true,
            format: "{point.y:.1f}%",
          },
        },
      },
      series: [
        {
          colorByPoint: true,
          data: healthState,
        },
      ],
    });
  }, [healthState]);

  useEffect(() => {
    setTemperatureChartOptions({
      chart: {
        type: "column",
      },
      title: {
        text: "Gráfico de temperatura das máquinas",
      },
      accessibility: {
        announceNewData: {
          enabled: true,
        },
      },
      xAxis: {
        type: "category",
      },
      yAxis: {
        title: {
          text: "Temperatura das máquinas (°C)",
        },
      },
      resposive: {
        rules: [
          {
            condition: {
              maxWidth: 500,
            },
            chartOptions: {
              legend: { enabled: false },
            },
          },
        ],
      },
      legend: {
        enabled: false,
      },
      plotOptions: {
        series: {
          borderWidth: 0,
          dataLabels: {
            enabled: true,
            format: "{point.y:.1f} °C",
          },
        },
      },
      series: [
        {
          colorByPoint: true,
          data: temperatureState,
        },
      ],
    });
  }, [temperatureState]);

  return (
    <div className="main__container">
      <div className="main__title">
        <img src={logo}></img>
        <p>Welcome to your dashboard...</p>
        <div className="main__greeting"></div>
      </div>

      <div className="user__container-main">
        <div className="user__container-column cont-mrgbtm">
          <p>Maquinas</p>
          {recoverDataFromLocalStorage && (
            <p>{recoverDataFromLocalStorage.length}</p>
          )}
          <div className="user__icon-container cont-mrgbtm">
            <img className="image__icons-settings" src={userIcon} />
          </div>
        </div>
        <div className="user__container-column cont-mrgbtm">
          <p>Operando</p>
          <p>{operating}</p>
          <div className="user__icon-container">
            <img className="image__icons-settings" src={userIcon} />
          </div>
        </div>
        <div className="user__container-column cont-mrgbtm">
          <p>Em alerta</p>
          <p>{alert}</p>
          <div className="user__icon-container">
            <img className="image__icons-settings" src={userIcon} />
          </div>
        </div>
        <div className="user__container-column cont-mrgbtm">
          <p>Desligadas</p>
          <p>{downtime}</p>
          <div className="user__icon-container">
            <img className="image__icons-settings" src={userIcon} />
          </div>
        </div>
      </div>
      <div></div>

      <div className="main__graphics">
        <HighchartsReact
          highcharts={Highcharts}
          options={healthChartOptions}
          immutable={false}
          ref={chartComponent}
          updateArgs={[true, true, true]}
          allowChartUpdate={true}
        />

        <HighchartsReact
          highcharts={Highcharts}
          options={temperatureChartOptions}
          immutable={false}
          ref={chartComponent}
          updateArgs={[true, true, true]}
          allowChartUpdate={true}
        />
      </div>
    </div>
  );
}

export default Main;
