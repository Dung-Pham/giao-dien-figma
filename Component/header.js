import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <header className="base-rectangle1" />
      <div className="items">
        <div className="about-services">
          <div className="about">Trang chủ</div>
        </div>
        <div className="services">Bác sĩ</div>
        <div className="about-services1">
          <div className="team">Cơ sở y tế</div>
        </div>
        <div className="careers">Cẩm nang</div>
      </div>
      <div className="shadowed-frame">
        <div className="button-fill-rounded-frame">
          <div className="enabledisable-shadow">
            <div className="shadow" />
          </div>
          <img
            className="system-componentsbuttonfill-icon"
            loading="lazy"
            alt=""
            src="/system-componentsbuttonfillrounded--border@2x.png"
          />
          <b className="field">Tư vấn</b>
        </div>
        <button className="enabled-shadow-mask-frame">
          <div className="enabledisable-shadow1">
            <div className="shadow1" />
            <div className="mask" />
            <div className="mask1" />
          </div>
          <b className="field1">Đăng nhập</b>
        </button>
      </div>
    </div>
  );
};

export default Header;
