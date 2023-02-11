import { useRouteError } from "react-router-dom";

const ErrorMsg = () => {
  const error = useRouteError();
  return (
    <div>
      You done Goofed up boy
      <h1>Details: {error.statusText || error.message} </h1>
    </div>
  );
};

export default ErrorMsg;
