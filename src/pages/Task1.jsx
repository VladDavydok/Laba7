import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Content from '../components/Content';
import Image from '../components/Image';

function Task1() {
  return (
    <div>
      <button>
        <Link to="/">Повернутися в меню</Link>
      </button>
      <Header />
      <Content />
      <Image />
    </div>
  );
}

export default Task1;