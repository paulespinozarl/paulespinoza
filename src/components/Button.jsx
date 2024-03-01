const Button = ({ isActive, toggleActive }) => {
  return (
    <>
      <div>
        <button
          className={`hamburger hamburger--spin ${isActive ? "is-active" : ""}`}
          type="button"
          onClick={toggleActive}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </div>
    </>
  );
};

export default Button;
