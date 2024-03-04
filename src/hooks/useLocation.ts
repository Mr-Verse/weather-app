import { useEffect, useState } from "react";

export default function () {
  const [position, setPosition] = useState<GeolocationPosition>(
    {} as GeolocationPosition
  );
  const [gotLocation, setGotLocation] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    if (!navigator.geolocation) {
      setError("Geolocation not supported.");
      return;
    }

    new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 1500);
    })
      .then(() => {
        return new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              if (!isMounted) return;
              setPosition(position);
              setGotLocation(true);
              resolve(position);
            },
            (err) => {
              if (!isMounted) return;
              setError(err.message);
              setGotLocation(false);
              reject(new Error(err.message));
            }
          );
        });
      })
      .catch((error) => {
        setError(error.message);
      });
    return () => {
      isMounted = false;
    }; //TODO
  }, []);

  return { position, gotLocation, error };
}
