function ExhibitionExploreCards() {
  return (
    <>
      <div className="exhibition_card col-6 d-flex justify-content-between">
        <a href="/#">
          <div className="d-flex align-items-center">
            <div className="flex-shrink-0 exhibition_img">
              {/* localhost:3001/img/name/pic.jpg */}
              <img src="https://picsum.photos/id/237/500/600" alt="..." />
            </div>
            <div className="flex-grow-1 ms-3 d-flex flex-wrap exhibition_text">
              <h3 className="">安安你好展</h3>
              <div className="line" />
              <p>喔喔喔喔喔喔</p>
            </div>
          </div>
          <div className="row">
            <div className="col-5"> 2022/6/3 - 2022/9/13</div>
            <div className="col-6 d-flex justify-content-between">
              <div className="city">桃園市</div>
              <div>NT200</div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}
export default ExhibitionExploreCards;
