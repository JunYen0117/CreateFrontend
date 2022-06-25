import { useState } from 'react';

function Starter() {
  const [cssFlying1, setCssFlying1] = useState('noflying');
  const [cssFlying2, setCssFlying2] = useState('noflying');
  const [cssFlying3, setCssFlying3] = useState('noflying');
  const changeCss1 = () => {
    setCssFlying2('flying');
    setCssFlying3('flying');
  };
  const changeCss2 = () => {
    setCssFlying1('flying');
    setCssFlying3('flying');
  };
  const changeCss3 = () => {
    setCssFlying1('flying');
    setCssFlying2('flying');
  };

  return (
    <>
      <ul className="starter_flex d-flex flex-column flex-md-row">
        <li className={`starter_flex_item_left ${cssFlying1}`}>
          <a className="link" href="#/" alt="#/" onClick={changeCss1}>
            <span className="text">課程展覽</span>
          </a>
        </li>
        <li className={`starter_flex_item_mid ${cssFlying2}`}>
          <a className="link" href="#/" alt="#/" onClick={changeCss2}>
            <span className="text">買禮物</span>
          </a>
        </li>
        <li className={`starter_flex_item_right ${cssFlying3}`}>
          <a className="link" href="#/" alt="#/" onClick={changeCss3}>
            <span className="text">藝文誌</span>
          </a>
        </li>
      </ul>
      <a className="starter_skip p-2" href="#/" alt="#/">
        ＳＫＩＰ
      </a>
    </>
  );
}

export default Starter;
