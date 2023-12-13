import { Link } from "react-router-dom";
import "./navbar.css";


const Navbar = ({
  keyword,
  setKeyword,
  toggleTheme,
  theme
}: {
  keyword: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  toggleTheme: Function;
  theme:string;
}) => {
  const toggleHameburger = () => {
    let menubtn = document.getElementById("menuIcon") as HTMLDivElement;
    let closeIcon = document.getElementById("closeIcon") as HTMLDivElement;
    let sidenav = document.getElementById("navBarLeft") as HTMLDivElement;

    menubtn.onclick = () => (sidenav.style.right = "0");
    closeIcon.onclick = () => (sidenav.style.right = "-60%");
  };

  return (
    <nav id="navBar">
      <div className="navBarContainer">
        <Link to={'/'}>
        <h1>Hacker News</h1>
        </Link>
        

        <div id="menuIcon" onClick={toggleHameburger}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="hameBurgerIcon"
            fill="currentcolor"
          >
            <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
          </svg>
        </div>

        <div id="navBarLeft">
          <div id="closeIcon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="hameBurgerIcon"
              fill="currentcolor"
            >
              <path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"></path>
            </svg>
          </div>

          {/* searchBox */}
          <div className="searchBox">
            {/* search icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
            </svg>
            <input
              type="text"
              placeholder="Search images here..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </div>

          <ul id="navbarList">
            <li>
              {" "}
              <Link to="/">Home</Link>
            </li>
            <li>
              {" "}
              <Link to="/">Collection</Link>
            </li>
            <li>
              {" "}
              <Link to="/">Community</Link>
            </li>
          </ul>

          <div className="theme-switch-wrapper" onChange={()=>toggleTheme()}>
          <p>{theme}</p>
            <label className="theme-switch" htmlFor="checkbox" >
              <input type="checkbox" id="checkbox" />
              <div className="slider round"></div>
            </label>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
