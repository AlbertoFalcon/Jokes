import {useState, useEffect} from "react";
import fetchData from '../util/fetchData';
import Header from "../components/Header";


function App() {
  const [data, setData] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);
  const API = "https://official-joke-api.appspot.com/random_joke";

  useEffect( () =>{
      fetchData(API)
          .then( data_json => {
              setData(data_json);
              setLoaded(true);
          })
          .catch(e => {
              setError(e);
              setLoaded(false);
          });
  }, []);

  console.log(data);


  return (
    <div className="App">
        <Header/>
    </div>
  );
}

export default App;
