import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { SlMagnifier } from 'react-icons/sl';
import { BsThreeDotsVertical } from 'react-icons/bs';
import PropTypes from 'prop-types';

export default function Header(props) {
  const { namePage } = props;

  return (
    <header className="bg-black text-white flex justify-between items-center h-[3.5em] p-5">
      <span className="flex items-center">
        <GiHamburgerMenu />
        <h1 className="ml-8 text-lg">{namePage}</h1>
      </span>

      <span className="flex items-center">
        <SlMagnifier />
        <BsThreeDotsVertical className="ml-5" />
      </span>
    </header>
  );
}

Header.propTypes = {
  namePage: PropTypes.string.isRequired,
};
