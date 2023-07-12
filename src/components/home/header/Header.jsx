import "./Header.scss";
import * as RiICon from "react-icons/ri";
import Navbar from "../../../container/navbar/Navbar";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Navbar />
        <div className="container h-100 d-flex align-items-center flex-column justify-content-center">
          <p className="header-container__title">
            با آکادمی <h1>سبز لرن</h1> برنامه نویسی رو با خیال راحت یاد بگیر و
            پیشرفت کن
          </p>
          <form className="header-container__form">
            <input type="text" placeholder="جستجو..." />
            <RiICon.RiSearch2Line
              size={33}
              className="header-container__form-icon"
            />
          </form>
          <div className="header-container__data">
            <div className="header-container__data-box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                />
              </svg>
              <h6> 5014</h6>
              <p>نفر دانشجو</p>
            </div>
            <div className="header-container__data-box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                />
              </svg>
              <h6> 8</h6>
              <p>دوره آموزشی</p>
            </div>
            <div className="header-container__data-box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h6>12541</h6>
              <p>دقیقه آموزش</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
