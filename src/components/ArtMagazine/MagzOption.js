function MagzOption() {
  return (
    <>
      <div className="row justify-content-between mt-2 gy-3">
        <div className="col-12 col-md-6 magz_button1">
          <a href="#/">
            <div className="magz_mask">
              <img src="" alt="" />
              <p className="magz_option_text">畢業季</p>
              <div className="magz_option_mask"></div>
            </div>
          </a>
        </div>
        <div className="col-12 col-md-6 magz_button2">
          <a href="#/">
            <div className="magz_mask">
              <img src="" alt="" />
              <p className="magz_option_text">全部文章</p>
              <div className="magz_option_mask"></div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default MagzOption;
