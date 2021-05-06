import React from 'react';
import './App.scss';
import {GoodsList} from "./components/GoodsList/GoodsList";
import {Basket} from "./components/Basket/Basket";

export const App = () => (
  <div className="starter">
    <GoodsList />
    <Basket />
  </div>
);
