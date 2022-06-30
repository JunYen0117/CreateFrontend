const ActivityTitle = (props) => {
  return (
    <>
      <h1>我的訂單</h1>
      <div className="border-bottom w-100 my-3">
        <a
          href="#/"
          className="me-5"
          onClick={() => {
            props.setState(1);
          }}
        >
          已報名
        </a>
        <a
          href="#/"
          className="me-5"
          onClick={() => {
            props.setState(2);
          }}
        >
          已取消
        </a>
        <a
          href="#/"
          onClick={() => {
            props.setState(0);
          }}
        >
          已結束
        </a>
      </div>
    </>
  );
};

export default ActivityTitle;
