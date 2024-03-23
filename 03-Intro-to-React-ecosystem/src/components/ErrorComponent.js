import { useRouteError } from "react-router-dom";
const ErrorComponent = () => {
  const err = useRouteError();

  console.log(err);

  return (
    <div className="error">
      <h1>Error page</h1>
      <h3>
        {err.status}
        {err.statusText}
      </h3>
    </div>
  );
};

export default ErrorComponent;
