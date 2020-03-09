import React from 'react';


function KeyButton({ buttonContent }) {
  return (
    <React.Fragment>
      <button>
        { buttonContent }
      </button>
    </React.Fragment>
  )
}

export default KeyButton;