import { useEffect, useState } from "react";
import apiClient, { AxiosError, CanceledError } from "../services/apiClient";
import Forecast from "../types/Forecast";

const useWeather = function (latitude: number, longitude: number) {
  const [forecast, setForecast] = useState({} as Forecast);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    //fake loading time
    new Promise((resolve) => {
      setTimeout(() => resolve(true), 2000);
    })
      .then(() =>
        apiClient.get<Forecast>("", {
          params: {
            latitude,
            longitude,
            current:
              "temperature_2m,relative_humidity_2m,weather_code,cloud_cover,wind_speed_10m",
            hourly: "temperature_2m,weather_code,wind_speed_10m",
            daily: "weather_code,temperature_2m_max,temperature_2m_min",
            timezone: "auto",
            past_days: "3",
          },
          signal: controller.signal,
        })
      )
      .then((res) => {
        setError("");
        setLoading(false);
        setForecast(res.data);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setLoading(false);
        setError((error as AxiosError).message);
      });
    if (!latitude || !longitude) {
      controller.abort();
    }
    return () => {
      controller.abort();
    };
  }, [latitude, longitude]);

  return { forecast, loading, error };
};

export default useWeather;
