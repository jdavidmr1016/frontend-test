import { useState, useEffect, useRef } from "react";

export const useFetch = (type = "GET", url, data) => {
  const isMounted = useRef(true);
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  const options = {
    method: type, // POST , PUT or DELETE
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data),
  };
  /* For Get request */
  if (type === "GET") {
    if (!url) {
      throw new Error("please dont send empty fetch request send a valid url");
    }
    useEffect(() => {
      setState({ data: null, loading: true, error: null });

      fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
          if (isMounted.current) {
            setState({
              loading: false,
              error: null,
              data,
            });
          }
        })
        .catch((error) => {
          throw new Error(error);
        });
    }, [url]);
  }
  /* For Post ,Put or Delete requests */
  if (type === "POST" || type === "PUT" || type === "DELETE") {
    if (!url || !data) {
      throw new Error(
        "Please fulfill the request with Data for POST-PUT or DELETE methods"
      );
    }

    useEffect(() => {
      setState({ data: null, loading: true, error: null });

      fetch(url, options)
        .then((resp) => resp.json())
        .then((data) => {
          if (isMounted.current) {
            setState({
              loading: false,
              error: null,
              data,
            });
          }
        })
        .catch((error) => {
          throw new Error(error);
        });
    }, [url]);
  }
  return state;
};
