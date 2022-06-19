import { useState, useEffect } from 'react';
import axios from 'axios';

import { ReactComponent as CategoryIcon } from '../../img/products/product_category.svg';

function ProductSidebar(props) {
  const { classifications, setClassifications } = props;
  const { categorys, setCategorys } = props;
  const [open, setOpen] = useState(-1);

  // Classification
  useEffect(() => {
    let getClassification = async () => {
      let response = await axios.get(
        'http://localhost:3003/api/product/classification',
        {
          withCredentials: true,
        }
      );
      setClassifications(response.data);
    };
    getClassification();
  }, []);

  // category
  useEffect(() => {
    let getCategory = async () => {
      let response = await axios.get(
        `http://localhost:3003/api/product/classification/${open}`,
        {
          withCredentials: true,
        }
      );
      setCategorys(response.data);
    };
    getCategory();
  }, [open]);

  const handleOption = (type) => () => {
    switch (type) {
      case '居家生活': {
        setOpen(1);
        break;
      }
      case '香氛系列': {
        setOpen(2);
        break;
      }
      case '配件飾品': {
        setOpen(3);
        break;
      }
      case '家電3C': {
        setOpen(4);
        break;
      }
      case '辦公文具': {
        setOpen(5);
        break;
      }
      case '玩偶玩具': {
        setOpen(6);
        break;
      }
      case '包包提袋': {
        setOpen(7);
        break;
      }
      default: {
        break;
      }
    }
  };

  return (
    <>
      <ul className="product_sidebar">
        {classifications.map((v, i) => {
          return (
            <li key={v.id}>
              <a
                href="#/"
                alt=""
                onClick={
                  open === v.id
                    ? () => setOpen(-1)
                    : handleOption(v.classification_name)
                }
              >
                <CategoryIcon /> {v.classification_name}
              </a>
              {open === v.id && (
                <div className="product_name">
                  {categorys.map((v, i) => {
                    return (
                      <a key={v.id} href="#/" className="ms-3" alt="">
                        {v.category_name}
                      </a>
                    );
                  })}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ProductSidebar;
