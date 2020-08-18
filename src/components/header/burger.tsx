import React from 'react';
import Dropdown from './dropdown';

const Burger = () => {
  const dropdownMenu = React.useRef(null);

  interface SelectProtected {
    readonly wrapperElement: HTMLDivElement;
    readonly inputElement: HTMLInputElement;
  }

  const selectProtected: SelectProtected = {
    wrapperElement: document.createElement('div'),
    inputElement: document.createElement('input'),
  };

  return (
    <div>
      <div
        ref={dropdownMenu}
        style={{
          visibility: 'hidden',
          opacity: '0',
          transition: 'opacity 600ms, visibility 600ms',
        }}
      >
        <Dropdown />
      </div>
      <button
        className="burger"
        onClick={() => {
          let x: any;
          x = dropdownMenu.current;
          if (x.style.visibility === 'visible') {
            x.style.visibility = 'hidden';
            x.style.opacity = '0';
          } else {
            x.style.visibility = 'visible';
            x.style.opacity = '1';
          }
        }}
      >
        <div />
        <div />
        <div />
      </button>
    </div>
  );
};

export default Burger;
