import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import BurgerButton  from '../BurgerButton';
import LeftSideBar from '../index';
import Breadcrumb from '../../Breadcrum/Breadcrumb'
import './style.scss';

// const BreadcrumbData = [
//   {
//     id: 'home',
//     label: 'Home',
//     active: false
//   }, {
//     id: 'kitchen',
//     label: 'Kitchen',
//     active: false
//   }, {
//     id: 'appliances',
//     label: 'Appliances',
//     active: false
//   }, {
//     id: 'wM',
//     label: 'Washing Machine',
//     active: false
//   }
// ];
const Separator = ({ children, ...props }) => (
  <span style={{ color: 'teal' }} {...props}>
    {children}
  </span>
)

const items = [
  { to: '/home', label: 'Home' },
  { to: '/gallery', label: 'Gallery' },
  // { to: '/contact', label: 'Contact' },
  { to: '/about', label: 'About' },
  // { to: '/blog', label: 'Blog' },
]

const TopSection = () => {
  const  [isShowSidebar, setisShowSidebar]= useState(false);

  const onClickSideNavMenu= ()=>{
    if(!isShowSidebar){
      setisShowSidebar(true);
    }else{
      setisShowSidebar(false);
    }
  }

  return (
    <div className="LeftSideBar__TopSection">
      <BurgerButton
        onClick={onClickSideNavMenu}
      />
    <LeftSideBar isShowSidebar={isShowSidebar}  onClickSideNavMenu={onClickSideNavMenu}/>
    <Breadcrumb separator={<Separator>></Separator>}>
        {items.map(({ to, label }) => (
          <Link key={to} to={to}>
            {label}
          </Link>
        ))}
    </Breadcrumb>
    {/* <BreadcrumbView items={BreadcrumbData}/> */}
    </div>
  );
};

export default TopSection;
