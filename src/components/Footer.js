import { ReactComponent as IGLogo } from '../img/IGLogo.svg';
import { ReactComponent as FBLogo } from '../img/FBLogo.svg';
import { ReactComponent as LineLogo } from '../img/LineLogo.svg';
import { ReactComponent as Logo } from '../img/logo.svg';

function Footer() {
  return (
    <>
      {/* 以下為桌機版畫面 */}
      <footer className="footer_desktop container-fluid d-none d-md-block">
        <div className="container">
          {/* footer_up */}
          <ul className="footer_up_title d-flex pt-4">
            <li>活動資訊</li>
            <li>幫助</li>
            <li>認識</li>
            <li className="small_item">社群</li>
          </ul>
          <ul className="footer_up_text d-flex py-4">
            <li>
              <p>電話：03-400000</p>
              <p>地址：桃園市中壢區新生路二段421號</p>
              <p>信箱：color123@example.com</p>
            </li>
            <li>
              <p>
                <a href="#/">Q&A</a>
              </p>
              <p>
                <a href="#/">客服</a>
              </p>
            </li>
            <li>
              <p>
                <a href="#/">關於迴廊</a>
              </p>
              <p>
                <a href="#/">Business</a>
              </p>
            </li>
            <li className="small_item d-flex">
              <div className="mx-2">
                <a href="#/">
                  <IGLogo />
                </a>
              </div>
              <div className="mx-2">
                <a href="#/">
                  <FBLogo />
                </a>
              </div>
              <div className="mx-2">
                <a href="#/">
                  <LineLogo />
                </a>
              </div>
            </li>
          </ul>

          {/* footer_down */}
          <div className="footer_down d-flex justify-content-between">
            <ul className="footer_down_left d-flex">
              <li className="me-2">
                <a href="#/">
                  <Logo />
                </a>
              </li>
              <li className="create_your_life align-self-center">
                Create your life.
              </li>
            </ul>
            <ul className="footer_down_right d-flex pt-3">
              <li className="ms-3">©2022</li>
              <li className="ms-3">
                <a href="#/">隱私權政策</a>
              </li>
              <li className="ms-3">
                <a href="#/">服務條款</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {/* 桌機版畫面結束 */}

      {/* 以下為手機版畫面 */}
      <footer className="footer_mobile d-flex flex-column d-md-none">
        {/* 以下為bootstrap accordion套件 */}
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                聯絡資訊
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>電話：03-400000</p>
                <p>地址：桃園市中壢區新生路二段421號</p>
                <p>信箱：color123@example.com</p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                幫助
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                  <a href="#/">Q&A</a>
                </p>
                <p>
                  <a href="#/">客服</a>
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                認識
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                  <a href="#/">關於迴廊</a>
                </p>
                <p>
                  <a href="#/">Business</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* bootstrap accordion套件結束 */}
        <div className="d-flex justify-content-center mt-3">
          <div className="mx-3">
            <a href="#/">
              <IGLogo />
            </a>
          </div>
          <div className="mx-3">
            <a href="#/">
              <FBLogo />
            </a>
          </div>
          <div className="mx-3">
            <a href="#/">
              <LineLogo />
            </a>
          </div>
        </div>
        <div className="d-flex py-2">
          <p className="create_your_life mx-auto mt-2">Create your life.</p>
        </div>
        <div className="d-flex justify-content-center pb-2">
          <div className="mx-4">©2022</div>
          <div className="mx-4">
            <a href="#/">隱私權政策</a>
          </div>
          <div className="mx-4">
            <a href="#/">服務條款</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
