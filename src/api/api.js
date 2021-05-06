const BASE_URL = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

export const getGoodsFromServer = async () => {
  const response = await fetch(BASE_URL);

  return response.json();
}
