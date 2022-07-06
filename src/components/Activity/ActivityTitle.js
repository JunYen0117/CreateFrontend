const ActivityTitle = () => {
  return (
    <>
      <h1>我的訂單</h1>
      <div className="border-bottom w-100 my-3">
        <a href="#/" className="me-5">
          已報名
        </a>
        <a href="#/" className="me-5">
          已取消
        </a>
        <a href="#/">已結束</a>
      </div>
    </>
  );
};

export default ActivityTitle;
