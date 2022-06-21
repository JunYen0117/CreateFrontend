import ScrollspyNav from 'react-scrollspy-nav';
// import AnchorLink from 'react-anchor-link-smooth-scroll';
function ExhibitionSidebar() {
  return (
    <>
      <div className="exhibition-sidebar">
        <ScrollspyNav
          scrollTargetIds={[
            'exhibition-intro',
            'exhibition-note',
            'exhibition-des',
            'exhibition-buy',
          ]}
          offset={0}
          activeNavClass="is-active"
          scrollDuration="100"
          headerBackground="true"
        >
          <ul className="nav flex-column d-flex justify-content-center">
            <li className="nav-item">
              <a
                className="nav-link d-flex justify-content-end active"
                href="#exhibition-intro"
              >
                課程介紹
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link d-flex justify-content-end"
                href="#exhibition-des"
              >
                課程說明
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link d-flex justify-content-end"
                href="#exhibition-note"
              >
                購買須知
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link d-flex justify-content-end"
                href="#exhibition-buy"
              >
                商品購買
              </a>
            </li>
          </ul>
        </ScrollspyNav>
        {/* <ul className="nav flex-column d-flex justify-content-center">
          <li className="nav-item">
            <AnchorLink
              className="nav-link d-flex justify-content-end"
              href="#exhibition-intro"
            >
              課程介紹
            </AnchorLink>
          </li>
          <li className="nav-item">
            <AnchorLink
              className="nav-link d-flex justify-content-end"
              href="#exhibition-des"
            >
              課程說明
            </AnchorLink>
          </li>
          <li className="nav-item">
            <AnchorLink
              className="nav-link d-flex justify-content-end"
              href="#exhibition-note"
            >
              購買須知
            </AnchorLink>
          </li>
          <li className="nav-item">
            <AnchorLink
              className="nav-link d-flex justify-content-end"
              href="#exhibition-buy"
            >
              商品購買
            </AnchorLink>
          </li>
        </ul> */}
      </div>
    </>
  );
}

export default ExhibitionSidebar;

{
  /* <ScrollspyNav
          scrollTargetIds={[
            'exhibition-intro',
            'exhibition-note',
            'exhibition-des',
            'exhibition-buy',
          ]}
          offset={100}
          activeNavClass="is-active"
          scrollDuration="1000"
          headerBackground="true"
        >
        <ul className="nav flex-column d-flex justify-content-center">
          <li className="nav-item">
            <a className="nav-link d-flex justify-content-end" href="#exhibition-intro">
              課程介紹
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link d-flex justify-content-end" href="#exhibition-des">
              課程說明
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link d-flex justify-content-end" href="#exhibition-note">
              購買須知
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link d-flex justify-content-end" href="#exhibition-buy">
              商品購買
            </a>
          </li>
        </ul>
          </ScrollspyNav> */
}

// https://www.npmjs.com/package/react-anchor-link-smooth-scroll
// https://www.npmjs.com/package/react-scrollspy-nav
// https://www.npmjs.com/package/react-scrollspy-navigation
// https://www.npmjs.com/package/react-scroll