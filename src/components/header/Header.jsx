import "./Header.scss";
import imgSearch from "./imageSearch.png";
import object from "./obj";

function Header() {
  return (
    <div className="header">
      <div className="header-top">
        <div className="header-top_search">
          <div className="header_logo">
            <i class="bx bxl-unsplash"></i>
          </div>
          <div className="header_search-input">
            <i class="bx bx-search-alt-2 header-search_icon"></i>
            <input
              className="hello"
              type="text"
              placeholder="Search free high-resolution photos"
            />
            <div className="header_search-img">
              <img src={imgSearch} alt="" />
            </div>
          </div>
        </div>
        <div className="header-top_links">
          <a href="">Advertise</a>
          <a href="https://unsplash.com/blog/">Blog</a>
          <button>Submit a photo</button>
          <i class="bx bxs-bell-ring header-bell"></i>
          <i class="bx bx-menu header_list-menue"></i>
        </div>
      </div>
      <div className="header_bottom">
        <div className="header-editional-list">
          <p>{object[0].name}</p>
          <p>{object[1].name}</p>
        </div>
        <div className="header-lists">
          <ul>
            {object.map((el) => {
              return <li>{el.name}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
