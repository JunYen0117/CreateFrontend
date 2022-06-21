import { useEffect } from 'react';

import { productSidebarClass, productSidebarCategory } from '../../utils/api';

import { ReactComponent as CategoryIcon } from '../../img/products/product_category.svg';

function ProductSidebar(props) {
  const { classifications, setClassifications } = props;
  const { categorys, setCategorys } = props;

  // 類別 id
  const { classificationId, setClassificationId } = props;
  // 種類 id
  const { categoryId, setCategoryId } = props;
  // 設回第一頁
  const { setPage } = props;

  // Classification
  useEffect(() => {
    let getClassification = async () => {
      let response = await productSidebarClass({
        withCredentials: true,
      });
      setClassifications(response.data);
    };
    getClassification();
  }, []);

  // 依 Classification 顯示 category
  useEffect(() => {
    if (classificationId > 0) {
      let getCategory = async () => {
        let response = await productSidebarCategory(classificationId, {
          withCredentials: true,
        });
        setCategorys(response.data);
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
                        setPage(1);
                      }
                    : () => {
                        setClassificationId(classification.id);
                        setCategoryId(-1);
                        setPage(1);
                      }
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
                          categoryId === category.id ? 'active' : ''
                        }`}
                        onClick={() => {
                          setCategoryId(category.id);
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
