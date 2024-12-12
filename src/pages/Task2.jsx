import React from 'react';
import { Link } from 'react-router-dom';
import GoodsCard from '../components/GoodsCard';

const goods = [
  { id: 1, image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSYojHfqjrSw8RpgIaJIu4q8SaIH3XZtRJzO_wC7vpDrZSFVBXm', name: 'Apple', price: '15 грн' },
  { id: 2, image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR1A4rT5bYyD9aPZDh5mJjoSG9NMmEa-23imqsm41nVxqpZeRU-', name: 'Pear', price: '20 грн' },
  { id: 3, image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ-irKKzuYlMVvKkk5NWG1jk_Jz_8j3CP3C0OjHRKF5Q-YUhKL4', name: 'Grape', price: '25 грн' },
  { id: 4, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlh4xx3-n1yZdMnuDDfwaaGCEaEyCyZkL4lIQBfb6jU1JE1Z23', name: 'Peach', price: '18 грн' },
  { id: 5, image: 'https://media.istockphoto.com/id/804495812/vector/yellow-not-peeled-banana.jpg?s=612x612&w=0&k=20&c=cv7wUTj9DF_au1biwWb27c09G_a-9F2KpRhgP_sth80=', name: 'Banana', price: '12 грн' },
  { id: 6, image: 'https://media.istockphoto.com/id/165974969/vector/florida-orange.jpg?s=612x612&w=0&k=20&c=MBErgzy-4tpUyXx0rrkvOyyF1X6vps_bm970ozvNpRk=', name: 'Orange', price: '22 грн' },
];

function Task2() {
  return (
    <div>
      <button>
        <Link to="/">Повернутися в меню</Link>
      </button>
      <h1>Галерея товарів</h1>
      <div className="goods-list">
        {goods.map((good) => (
          <GoodsCard key={good.id} image={good.image} name={good.name} price={good.price} />
        ))}
      </div>
    </div>
  );
}

export default Task2;