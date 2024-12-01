import { useRouteError } from 'react-router';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>hmmm...</h1>
      <p>an unexpected error has occurred:</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
