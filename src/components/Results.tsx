// type ResultsProps = {
//   results: {
//      country: string;
//      cityName: string;
//      temperature: string;
//      conditionText: string;
//      icon: string;
//   };
// };
type ResultsProps = {
  results: {
    location: {
      country: string;
      name: string;
    };
    current: {
      temp_c: string;
      condition: {
        icon: string;
        text: string;
      };
    };
  };
};

const Results = (props: ResultsProps) => {
  return (
    <>
      {/* {props.results.country && (
        <>
          <div className="results-country">{props.results.country}</div>
          <div className="results-city">{props.results.cityName}</div>
          <div className="results-temp">
            {props.results.temperature}
            <span>℃</span>
          </div>
          <div className="results-condition">
            <img src={props.results.icon} alt="icon" />
            <span>{props.results.conditionText}</span>
          </div>
        </>
      )} */}
      {props.results.location?.country && (
        <>
          <div className="results-country">
            {props.results.location.country}
          </div>
          <div className="results-city">{props.results.location.name}</div>
          <div className="results-temp">
            {props.results.current.temp_c}
            <span>℃</span>
          </div>
          <div className="results-condition">
            <img src={props.results.current.condition.icon} alt="icon" />
            <span>{props.results.current.condition.text}</span>
          </div>
        </>
      )}
    </>
  );
};

export default Results;
