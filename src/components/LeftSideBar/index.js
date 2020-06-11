import React from 'react';
// import TopSection from './TopSection';
import LeftSection from './LeftSection';
import './style.scss';

export const LeftSideBarContext = React.createContext({})

const LeftSideBar = (props) => {
  // const [isShowSidebar, setIsShowSidebar] = useState(false);
  const onClickMenuHandler = ()=>{
    props.onClickSideNavMenu();
  }
  
  return (
    <LeftSideBarContext.Provider
      value={props.isShowSidebar }
    >
      <div className="LeftSideBar__container">
        <div
          className={`LeftSideBar__container__overlay LeftSideBar__container__overlay--${props.isShowSidebar ? 'show' : 'hide'}`}
          role="button"
          onClick={onClickMenuHandler}
        ></div>
        <LeftSection isShowSidebar={props.isShowSidebar}  onClickMenuHandler={onClickMenuHandler}/>
      </div>
    </LeftSideBarContext.Provider>
  );
};

export default LeftSideBar;
