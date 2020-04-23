import React from 'react';
import {Link} from 'react-router-dom';
import Select from 'react-select';
import useLocalStorage from './../utils/localStorage'

function Navbar(props) {
  // HTML Properties for each of the links in UI
  const navLinkProps = (path, animationDelay) => ({
    className: `fadeInUp ${window.location.pathname === path ? 'focused' : ''}`,
    style: {
      animationDelay: `${animationDelay}s`,
    },
  });

  const [language, setLanguage] = useLocalStorage('language', 'en');

  const languageChange = [
    {"label": "English", "value": "en"},
    {"label": "हिन्दी", "value": "hi-IN"},
    {"label": "मराठी", "value": "mr-IN"}
  ]

  async function changeLang (value){
    await setLanguage(value)
  }

  if (window.location.pathname !== '/summary') {
    return (
      <div
        className="Navbar"
        style={{
          animationDelay: '0.5s',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <img
          className="fadeInUp logo"
          alt="India COVID-19 Tracker"
          src="/icon.png"
          style={{
            animationDelay: '0.0s',
            transition: 'all 0.3s ease-in-out',
          }}
        />

        <div className="navbar-left">
          {props.pages.map((page, i) => {
            return (
              <Link to={page.pageLink} key={i}>
                <span
                  {...navLinkProps(page.pageLink, page.animationDelayForNavbar)}
                >
                  {page.displayName}
                </span>
              </Link>
            );
          })}
          <Select
            className="languageSelect"
            placeholder={'Select Language'}
            options={languageChange}
            onChange={
              (item) => changeLang(item.value).then(window.location.reload())
              // ()=> setTimeout(()=>{
              //         window.location.reload()
              //   }, 3000)
              }
          />
        </div>

        <div className="navbar-right">
          
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default Navbar;
