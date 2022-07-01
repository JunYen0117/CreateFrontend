import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ExhibitionExploreCards(props) {
  const { exhibitions } = props;
  const { level, setLevel } = props;
  const { city, setCity } = props;
  const { date, setDate } = props;

  const cities = [
    '台北市',
    '基隆市',
    '新北市',
    '宜蘭縣',
    '新竹市',
    '桃園縣',
    '苗栗縣',
    '台中市',
    '彰化縣',
    '南投縣',
    '嘉義縣',
    '雲林縣',
    '台南市',
    '高雄市',
    '澎湖縣',
    '屏東縣',
    '台東縣',
    '花蓮縣',
  ];

  return (
    <>
      <div className="d-flex justify-content-center">
        <select
          className="m-3"
          defaultValue={'DEFAULT'}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        >
          <option value="DEFAULT">選擇地區</option>
          {cities.map((item, index) => {
            return <option value={item}>{item}</option>;
          })}
        </select>
        <select
          className="m-3"
          defaultValue={'DEFAULT'}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        >
          <option value="DEFAULT">選擇日期</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <select
          className="m-3"
          defaultValue={'DEFAULT'}
          onChange={(e) => {
            setLevel(e.target.value);
          }}
        >
          <option value="DEFAULT">選擇價錢</option>
          <option value="1">150以內</option>
          <option value="2">150 ~ 300</option>
          <option value="3">300 ~ 500</option>
          <option value="4">500以上</option>
        </select>
      </div>

      <div className="card-scroll">
        {exhibitions.map((exhibition, index) => {
          return (
            <div key={exhibition.id} className="exhibition_card">
              <Link to={`/exhibition/${exhibition.id}`}>
                <div className="d-flex align-items-center">
                  <div className="img-date">
                    <div className="exhibition_img">
                      <img
                        src={`http://localhost:3003/images/exhibition/${exhibition.exhibition_img}`}
                        alt="..."
                      />
                    </div>
                    <div className="date">
                      <div>
                        {exhibition.start_date} - {exhibition.end_date}
                      </div>
                    </div>
                  </div>
                  <div className="mx-3 exhibition_text">
                    <h2 className="">{exhibition.exhibition_name}</h2>
                    <div className="line" />
                    <p
                      dangerouslySetInnerHTML={{
                        __html: `${exhibition.exhibition_intro}`,
                      }}
                    ></p>
                    <div className="">
                      <div className="d-flex justify-content-between">
                        <div>{exhibition.city}</div>
                        <div>NT{exhibition.exhibition_price}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default ExhibitionExploreCards;
