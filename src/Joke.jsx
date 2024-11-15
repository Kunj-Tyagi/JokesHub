import { useState, useEffect } from "react";

// Define the Joker component
export default function Joker() {
  // Initialize state to hold the joke
  let [joke, setJoke] = useState({});
  const URL = "https://official-joke-api.appspot.com/random_joke";

  // Function to fetch a new joke
  const getNewJoke = async () => {
    let response = await fetch(URL);
    let jsonResponse = await response.json();
    // Update the state with the new joke
    setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });
  };

  // useEffect hook to fetch the first joke when the component mounts
  useEffect(() => {
    async function getFirstJoke() {
      let response = await fetch(URL);
      let jsonResponse = await response.json();
      console.log(jsonResponse);
      // Update the state with the first joke
      setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });
    }
    getFirstJoke();
  }, []);

  // Render the component
  return (
    <div>
      <h3>Joker!</h3>
      <h2>{joke.setup}</h2>
      <h2>{joke.punchline}</h2>
      <button onClick={getNewJoke}>New Joke</button>
    </div>
  );
}