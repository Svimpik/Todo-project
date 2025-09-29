import './Header.scss'

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <a href="">
                    <img
                        src="/public/logo.svg"
                        alt="logo"
                        className="header__logo--img"
                    />
                </a>
                <h2>MyTodos</h2>
            </div>
            <div className="header__right">
                <button className="header__button">Вхід</button>
                <button className="header__button">Зареєструватись</button>
            </div>
        </header>
    )
}

export default Header;