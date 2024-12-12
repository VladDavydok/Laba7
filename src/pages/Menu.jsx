import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div className="menu">
      <h1>Головне меню</h1>
      <button>
        <Link to="/task1">Перейти до Завдання 1</Link>
      </button>
      <button>
        <Link to="/task2">Перейти до Завдання 2</Link>
      </button>
    </div>
  );
}

export default Menu;