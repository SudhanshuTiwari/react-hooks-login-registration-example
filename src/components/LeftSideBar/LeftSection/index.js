/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import BurgerButton from '../BurgerButton';
// import { LeftSideBarContext } from '../index';
import './style.scss';

const LeftSection = (props) => {
  //  const { isShowSidebar, setisShowSidebar } = useContext(LeftSideBarContext);
  const onClickMenuHandler= ()=>{
     props.onClickMenuHandler();
   }

  return (
    <div className={`LeftSideBar__LeftSection LeftSideBar__LeftSection--${props.isShowSidebar ? 'show' : 'hide'}`}>
      <div className="LeftSideBar__LeftSection__topWrapper">
        <BurgerButton
          onClick={onClickMenuHandler}
        />
      </div>
      <ul className="LeftSideBar__LeftSection__menuWrapper">
        <li>
          <a
            href="#"
          > 
             
            Home
           </a>
        </li>
        <li>
          <a
            href="#"
          >
            Gallery
          </a>
        </li>
        <li>
         <a
            href="#"
          >
            About
          </a>
        </li>
      </ul>
    </div>
  );
};

export default LeftSection;
