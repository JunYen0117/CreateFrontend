import { Button } from 'react-bootstrap';
import { FaShoppingCart, FaFireAlt } from 'react-icons/fa';
import HeartActivity from './HeartActivity';
import Milu from '../../img/Milu.jpg';

const FavActivity = (props) => {
  const { data } = props;

  return (
    <>
      <div
        className=" col-3 position-relative "
        style={{ width: '10rem', height: '10rem' }}
      >
        <img className="Far_img" src={Milu} alt="" />
      </div>
      <div className="col-9 mx-3 mt-2 position-relative">
        <HeartActivity data={data} />
        <table className="Fac_table">
          <tbody>
            <tr>
              <th>展覽日期</th>
              <td>
                {data.start_date} - {data.end_date}
              </td>
            </tr>
            <tr>
              <th>展覽時間</th>
              <td>
                {data.start_time} - {data.end_time}
              </td>
            </tr>
            <tr>
              <th>活動地點</th>
              <td>{data.exhibition_location}</td>
            </tr>
            <tr className="Fac_tr">
              <th>票價</th>
              <td>NT$ {data.exhibition_price}</td>
            </tr>
          </tbody>
        </table>
        <Button
          variant="primary"
          className="text-white  d-block Fac_button m-0"
        >
          <FaShoppingCart className="me-3 " />
          購票去
        </Button>
      </div>
    </>
  );
};

export default FavActivity;
