import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Loading = () => (
    <div>
      <FontAwesomeIcon
        icon={faSpinner}
        style={{ color: 'rgb(96, 178, 255)', fontSize: '50px', marginTop: '1%' }}
      />
    </div>
  );

  export default Loading;