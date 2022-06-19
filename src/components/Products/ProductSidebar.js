import { useState, useEffect } from 'react';
import axios from 'axios';

import { ReactComponent as CategoryIcon } from '../../img/products/product_category.svg';

function ProductSidebar(props) {
  const { classifications, setClassifications } = props;
  const { categorys, setCategorys } = props;

  // 類別 id
  const { classificationId, setClassificationId } = props;
  // 種類 id
  const { categoryId, setCategoryId } = props;

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
    if (classificationId > 0) {
      let getCategory = async () => {
        let response = await axios.get(
          `http://localhost:3003/api/product/classification/${classificationId}}`,
          {
            withCredentials: true,
          }
        );
        let newCategorys = response.data.filter((category, index, arr) => {
          return (
            arr.findIndex((c) => category.category_name === c.category_name) ===
            index
          );
        });
        setCategorys(newCategorys);
      };
      getCategory();
    }
  }, [classificationId]);

  const handleOption = (classId) => () => {
    setClassificationId(classId);
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
                  classificationId === v.id
                    ? () => setClassificationId(-1)
                    : handleOption(v.id)
                }
              >
                <CategoryIcon /> {v.classification_name}
              </a>
              {classificationId === v.id && (
                <div className="product_name">
                  {categorys.map((v, i) => {
                    return (
                      <a
                        key={v.id}
                        className="ms-3"
                        href="#/"
                        alt=""
                        onClick={() => {
                          setCategoryId(v.category_id);
                        }}
                      >
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
