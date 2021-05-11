import React from 'react';
import './Header.scss';
import logo from '../../images/logo.jpg';
import { Link } from 'react-router-dom';

import { ListItem } from '../ListItem/ListItem';
import profile from '../../images/header-icons/profile.png';
import search from '../../images/header-icons/search.png';
import menu from '../../images/header-icons/menu.png';

export const Header = () => {

	const [showMenuOnSmallRes, setShowMenuOnSmallRes] = React.useState(false);

	return (
		<header className='clearfix'>
			<div className='wrapper' >
				<Link to='./'><img src={logo} alt="Marvel logo"/></Link>
				<ul className={` ${showMenuOnSmallRes ? 'show' : ''}`}>
					<ListItem  filter='characters'/>
					<ListItem  filter='comics'/>
					<ListItem  filter='creators'/>
					<ListItem  filter='series'/>
					<ListItem  filter='stories'/>
				</ul>
				<div className='icons clearfix'>
					<a><img src={profile} alt='profile'/></a>
					<Link to='./search'><img src={search} alt='search'/></Link>
					<a><img src={menu} alt='menu' onClick={()=>setShowMenuOnSmallRes(!showMenuOnSmallRes)}/></a>
				</div>
			</div>
		</header>
	)
}