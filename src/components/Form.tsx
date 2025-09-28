type FormProps = {
  // setCity: React.Dispatch<React.SetStateAction<string>>;
  // getWeather: (e: React.FormEvent<HTMLFormElement>) => void;
  getWeather: (payload: FormData) => void;
};

const Form = (props: FormProps) => {
  return (
    // <form onSubmit={props.getWeather}>
    <form action={props.getWeather}>
      <input
        type="text"
        name="city"
        placeholder="Enter a city name"
        // onChange={(e) => props.setCity(e.target.value)}
      />
      <button type="submit">Get the Weather</button>
    </form>
  );
};

export default Form;
