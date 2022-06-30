import React from 'react';
import Card from './Card';
import Pagination from 'react-bootstrap/Pagination';
import { useState } from 'react';

let data = {};
let page = '';

function Common(props) {
  const {
    prompt,
    pass,
    use,
    availableList,
    setNowPage,
    lastPage,
    setLastPage,
    receiveLastPage,
    receiveList,
    invalidList,
    invalidLastPage,
    changeState,
    notUse,
    setNotUse,
  } = props;

  switch (changeState) {
    case 1: {
      data = availableList;
      page = lastPage;
      break;
    }
    case 2: {
      data = receiveList;
      page = receiveLastPage;
      break;
    }
    case 3: {
      data = invalidList;
      page = invalidLastPage;
      break;
    }
    default: {
      break;
    }
  }
  console.log('changeState:', changeState);
  console.log('data:', data);

  // 正規寫法寫不出來，棄用
  // const [data, setData] = useState({});
  // const [page, setPage] = useState('');
  // switch (changeState) {
  //   case 1: {
  //     setData(availableList);
  //     setPage(lastPage);
  //     break;
  //   }
  //   case 2: {
  //     setData(receiveList);
  //     setPage(receiveLastPage);
  //     break;
  //   }
  //   case 3: {
  //     setData(invalidList);
  //     setPage(invalidLastPage);
  //     break;
  //   }
  //   default: {
  //     break;
  //   }
  // }
  // console.log('changeState:', changeState);
  // console.log('data:', data);

  const [active, setActive] = useState(1);
  let items = [];
  // console.log('receive',page)
  for (let number = 1; number <= page; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={(e) => {
          setActive(number);
          setNowPage(number);
          setLastPage(number);
        }}
      >
        {number}
      </Pagination.Item>
    );
  }
  console.log(data);
  // console.log('receiveList', receiveList);

  return (
    <>
      <div className="container_coupon">
        <h4 className="coupon_prompt my-4 ms-1">
          {/* 這是 每筆訂單僅可使用一張優惠券 的變數 */}
          {prompt}
        </h4>
        {/* div不能放在map裡面，因為這樣 d-flex 會一直重複生成，所以要放在外面 */}
        <div className="coupon d-flex d-grid flex-wrap justify-content-between mx-1 row">
          {data &&
            data.map((coupon, index) => {
              return (
                <Card
                  key={index}
                  pass={pass}
                  use={use}
                  coupon={coupon}
                  notUse={notUse}
                  setNotUse={setNotUse}
                />
              );
            })}
        </div>
      </div>
      <div className="coupon pt-5">
        <Pagination
          size="sm"
          className="justify-content-center coupon_pagination d-none"
        >
          {items}
        </Pagination>
      </div>
    </>
  );
}

export default Common;
