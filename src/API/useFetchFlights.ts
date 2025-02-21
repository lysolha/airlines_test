import axios from "axios";
import { useEffect, useState } from "react";
import type { Flight } from "../Entities/Flight";
import FLIGHTS_API_LINK from "./flightsAPILink";

export const useFetchFlights = () => {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const fetchFlights = () => {
    setLoading(true);

    axios
      .get(FLIGHTS_API_LINK)
      .then((response) => {
        setFlights(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);

    const loadingTimer = setTimeout(() => {
      fetchFlights();
    }, 2000);

    return () => {
      clearTimeout(loadingTimer);
    };
  }, []);

  return { flights, error, loading };
};
