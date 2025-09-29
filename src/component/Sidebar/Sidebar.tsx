import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="user">
        <img
          src="/public/user-photo.svg"
          alt="userPhoto"
          className="user__photo"
        />
        <h3 className="user__name">І'мя</h3>
      </div>

      <div className="sidebar__block">
        <div>
          <button className="sidebar__button button--active">
            <img
              src="/public/today-svg.svg"
              alt="today"
              className="sidebar__img"
            />
            Сьогодні
          </button>
        </div>
        <div>
          <button className="sidebar__button">
            <img
              src="/public/planned.svg"
              alt="today"
              className="sidebar__img"
            />
            Заплановані
          </button>
        </div>
        <div>
          <button className="sidebar__button">
            <img
              src="/public/importantly.svg"
              alt="today"
              className="sidebar__img"
            />
            Важливі
          </button>
        </div>
        <div>
          <button className="sidebar__button">
            <img
              src="/public/project.svg"
              alt="today"
              className="sidebar__img"
            />
            Проекти
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
