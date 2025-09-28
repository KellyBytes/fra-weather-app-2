// import React, { useState } from 'react';
import { useActionState } from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Results from './components/Results';
import Loading from './components/Loading';

// type ResultsState = {
//   country: string;
//   cityName: string;
//   temperature: string;
//   conditionText: string;
//   icon: string;
// };

const App = () => {
  // const [loading, setLoading] = useState<boolean>(false);
  // const [city, setCity] = useState<string>('');
  // const [results, setResults] = useState<ResultsState>({
  //   country: '',
  //   cityName: '',
  //   temperature: '',
  //   conditionText: '',
  //   icon: '',
  // });

  // const getWeather = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   const API_KEY = import.meta.env.VITE_API_KEY;
  //   const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`;
  //   fetch(url)
  //   .then((res) => res.json())
  //   .then((data) =>
  //     setResults({
  //       country: data.location.country,
  //       cityName: data.location.name,
  //       temperature: data.current.temp_c,
  //       conditionText: data.current.condition.text,
  //       icon: data.current.condition.icon,
  //     })
  //   );
  //   setLoading(false);
  // };
  const getWeather = (_prevState: any, formData: FormData) => {
    const city = formData.get('city');
    const API_KEY = import.meta.env.VITE_API_KEY;
    const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`;
    return fetch(url)
      .then((res) => res.json())
      .then((data) => data); // can be omitted
  };

  const [returnedData, formAction, isPending] = useActionState(getWeather, '');

  return (
    <div className="wrapper">
      <div className="container">
        <Title />
        {/* <Form setCity={setCity} getWeather={getWeather} /> */}
        {/* {loading ? <Loading /> : <Results results={results} />} */}
        <Form getWeather={formAction} />
        {isPending ? <Loading /> : <Results results={returnedData} />}
      </div>
    </div>
  );
};

export default App;
