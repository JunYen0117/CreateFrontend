import {
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
  AiOutlineUndo,
} from 'react-icons/ai';
import { useState, useEffect } from 'react';

function ExhibitionOrder(props) {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

  const { exhibition } = props;
  return (
    <>
      {exhibition.map((item, index) => {
        return (
          <div className="exhibition-order mx-2">
            <div className="row my-4">
              <div className="col ex-title">
                <h1>{item.exhibition_name}</h1>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h2>
                  展覽時間 {item.start_date} ~ {item.end_date} (
                  {item.start_time} ~ {item.end_time})
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col">NT{item.exhibition_price}</div>
            </div>
            <div className="row">
              <div className="col">選擇張數</div>
              <div className="col text-end">
                <a
                  href="#/"
                  className="text-decoration-none icon"
                  style={{ color: '#903f23' }}
                  onClick={() => {}}
                >
                  <AiOutlineUndo />
                </a>
                <a
                  href="#/"
                  className="text-decoration-none "
                  style={{ color: '#903f23' }}
                  onClick={() => {}}
                >
                  重選
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-4">張數</div>
              <div className="col-4 per">NT{item.exhibition_price}/每張</div>
              <div className="col-4 text-end">
                <a
                  href="#/"
                  className={`icon ${count <= 0 ? 'icon-disable' : ''}`}
                  onClick={(e) => {
                    count <= 0 ? setCount(0) : setCount(count - 1);
                    setTotal(count * item.exhibition_price);
                    e.preventDefault();
                  }}
                >
                  <AiOutlineMinusCircle />
                </a>
                <a
                  href="#/"
                  className="text-decoration-none mx-4 tatol"
                  style={{ color: 'black' }}
                >
                  {count}
                </a>
                <a
                  href="#/"
                  className={`icon ${count >= 5 ? 'icon-disable' : ''}`}
                  onClick={(e) => {
                    count >= 5 ? setCount(5) : setCount(count + 1);
                    setTotal(count * item.exhibition_price);
                    e.preventDefault();
                  }}
                >
                  <AiOutlinePlusCircle />
                </a>
              </div>
            </div>

            <hr></hr>
            <div className="text-end">
              <div className="total-price my-2">
                總金額 <span>NT{total}</span>
              </div>
              <button className="my-4 submit-button">立即購買</button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ExhibitionOrder;
