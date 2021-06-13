import React from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
  const history = useHistory();

  // React.useEffect(() => {
  //   history.goBack();
  // }, [])

  return (
    <div>
      <h1>This page does not exist</h1>
      <button type="button" onClick={() => history.goBack()}>
        Go to HOME
      </button>
    </div>
  );
};
