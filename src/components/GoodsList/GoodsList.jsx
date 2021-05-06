import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";

import {getGoodsFromServer} from "../../api/api";
import {actions} from "../../redux/basket";

export const GoodsList = () => {
  const [goods, setGoods] = useState([]);
  const dispatch = useDispatch();

  const getGoods = async () => {
    const goodsFromServer = await getGoodsFromServer();

    setGoods(goodsFromServer);
  }

  useEffect(() => {
    getGoods();
  }, [])

  return (
    <div>
      <h2>Goods</h2>
      <ul>
        {goods.map(good => (
          <React.Fragment key={good.id}>
            <li>
              {good.name}
            </li>
            <button
              onClick={() => {
                dispatch(actions.addGood(good));
              }}
            >
              Add
            </button>
          </React.Fragment>
        ))}
      </ul>
    </div>
  )
};
