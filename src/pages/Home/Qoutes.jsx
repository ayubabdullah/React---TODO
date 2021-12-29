import { useState, useEffect } from "react";

const Qoute = () => {
  const [qoute, setQoute] = useState(null)
   const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const getQoute = async () => {
    const response = await fetch(
      "https://quotes15.p.rapidapi.com/quotes/random/",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "2563278071mshc012f706e4c3903p127fcejsn7dab25dbe379",
          "x-rapidapi-host": "quotes15.p.rapidapi.com",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw Error('could not get qoute')
    }

  }

  useEffect(() => {
    getQoute()
      .then(data => {
      setQoute(data);
      setIsLoading(false);
      setError(null)
      })
      .catch(err => {
       setQoute(null);
       setIsLoading(false);
       setError(err.message);
    })
  }, [])
  return (
    <>
      {isLoading && (
        <p className="p-5 text-xl text-center text-gray-700 font-semibold">
          Loading...
        </p>
      )}
      {error && (
        <p className="p-5 text-xl text-center text-gray-700 font-semibold">
          {error}
        </p>
      )}
      {qoute && (
        <div className="p-5 text-xl text-center text-gray-700 font-semibold">
          <p>" {qoute.content} "</p>
          <small className="mt-2">{qoute.originator.name}</small>
        </div>
      )}
    </>
  );
}
 
export default Qoute;