import { useEffect } from 'react';
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
        // 清除重複的 category_name
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

  return (
    <>
      <ul className="product_sidebar">
        {classifications.map((classification, i) => {
          return (
            <li key={classification.id}>
              <a
                href="#/"
                alt=""
                className={
                  classificationId === classification.id ? 'active' : ''
                }
                onClick={
                  classificationId === classification.id
                    ? () => {
                        setClassificationId(-1);
                        setCategoryId(-1);
                      }
                    : () => setClassificationId(classification.id)
                }
              >
                <CategoryIcon /> {classification.classification_name}
              </a>
              {classificationId === classification.id && (
                <div className="product_category">
                  {categorys.map((category, i) => {
                    return (
                      <a
                        key={category.id}
                        href="#/"
                        alt=""
                        className={`ms-3 ${
                          categoryId === category.category_id ? 'active' : ''
                        }`}
                        onClick={() => {
                          setCategoryId(category.category_id);
                        }}
                      >
                        {category.category_name}
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
