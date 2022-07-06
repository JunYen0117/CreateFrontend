function ActivityCard() {
  return (
    <>
      <div className="container-fluid mb-5 px-0">
        <div className="row ">
          {[1, 2, 3, 4].map(() => {
            return (
              <>
                <div className="Fac_card d-flex border mb-4 ms-2 rounded-3 w-100 position-relative">
                  <div className="Fac_cardimg  col-4 p-0 me-3 ">
                    <img
                      src="https://picsum.photos/id/237/200/300"
                      alt=""
                      className="Fac_img "
                    />
                  </div>
                  <div className="col-8 pt-3">
                    <h2>可愛巧虎展 Meow &nbsp;</h2>

                    <table className="Fac_table">
                      <tr>
                        <th>展覽日期</th>
                        <td>2050 年 03 月 07 日 - 2070年 12 月 12 日</td>
                      </tr>
                      <tr>
                        <th>展覽時間</th>
                        <td>23:00 - 24:00</td>
                      </tr>
                      <tr>
                        <th>活動地點</th>
                        <td>台北市信義區光復南路133號</td>
                      </tr>
                      <tr>
                        <th>狀態</th>
                        <td>已報名</td>
                      </tr>
                      <tr>
                        <th>數量</th>
                        <td>2</td>
                      </tr>
                      <tr className="Fac_tr">
                        <th>總價</th>
                        <td>NT $400</td>
                        <button className="text-white  d-block Fac_button m-0 btn btn-danger">
                          取消
                        </button>
                      </tr>
                    </table>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default ActivityCard;
