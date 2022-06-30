function ActivityCard(props) {
  const { avtivity } = props;
  avtivity.map((item, index) => {
    if (item.state === 1) {
      return (item.state_text = '已報名');
    } else if (item.state === 2) {
      return (item.state_text = '已取消');
    } else {
      return (item.state_text = '已使用');
    }
  });
  // const handleClick = async () => {
  //   try {
  //     let response = await axios.put(API_URL + '/activity', {
  //       params: {
  //         order_id: order_id,
  //         change_state:change_state
  //       },
  //     });
  //     console.log(response.data);
  //     Swal.fire({
  //       title: '購買成功',
  //       icon: 'success',
  //     }).then((result) => {
  //       if (result.isConfirmed) {
  //       }
  //     });
  //   } catch (e) {
  //     console.error(e);
  //   }
  return (
    <>
      <div className="container-fluid mb-5 px-0">
        <div className="row">
          {avtivity.map((item, index) => {
            return (
              <div
                key={index}
                className="Fac_card d-flex border mb-4 ms-2 rounded-3 w-100 position-relative"
              >
                <div className="Fac_cardimg  col-4 p-0 me-3 ">
                  <img
                    src={`http://localhost:3003/images/exhibition/${item.exhibition_img}`}
                    alt=""
                    className="Fac_img "
                  />
                </div>
                <div className="col-8 pt-3">
                  <h2>{item.exhibition_name} &nbsp;</h2>

                  <table className="Fac_table">
                    <tbody>
                      <tr>
                        <th>展覽日期</th>
                        <td>
                          {item.start_date} ~ {item.end_date}
                        </td>
                      </tr>
                      <tr>
                        <th>展覽時間</th>
                        <td>
                          {item.start_time} ~ {item.end_time}
                        </td>
                      </tr>
                      <tr>
                        <th>活動地點</th>
                        <td>{item.exhibition_location}</td>
                      </tr>
                      <tr>
                        <th>狀態</th>
                        <td>{item.state_text}</td>
                      </tr>
                      <tr>
                        <th>數量</th>
                        <td>{item.count}</td>
                      </tr>
                      <tr className="Fac_tr">
                        <th>總價</th>
                        <td>NT ${item.total}</td>
                      </tr>
                    </tbody>
                  </table>
                  <button
                    className="text-white  d-block Fac_button m-0 btn btn-danger"
                    // onClick={handleClick}
                  >
                    取消
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default ActivityCard;
