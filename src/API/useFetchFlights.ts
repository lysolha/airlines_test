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
    }, 0);

    return () => {
      clearTimeout(loadingTimer);
    };
  }, []);

  return { flights, error, loading };
};

const initialFlight: Flight = {
  id: "",
  airline: "",
  from: "",
  to: "",
  departureTime: "",
  arrivalTime: "",
  price: 0,
  terminal: "",
  gate: "",
  tickets: {
    total: 0,
    remaining: 0,
  },
};

export const useFetchSingleFlight = (id: string | undefined) => {
  const [flight, setFlight] = useState<Flight>(initialFlight);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const fetchFlights = () => {
    setLoading(true);

    axios
      .get(`${FLIGHTS_API_LINK}/${id}`)
      .then((response) => {
        setFlight(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (id) {
      setLoading(true);
      fetchFlights();
    }
  }, []);

  return { flight, error, loading };
};
