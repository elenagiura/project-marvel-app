import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';

import cartoons from '../../images/cartoons.png';
import logo from '../../images/logo2.png';
import instagram from '../../images/social-icons/instagram.png';
import facebook from '../../images/social-icons/facebook.png';
import twitter from '../../images/social-icons/twitter.png';
import youtube from '../../images/social-icons/youtube.png';


const title = "This link doesn't work! Purpose is for construction :)";

export const Footer = () => {
	return(
		<footer>
			<div className='wrapper clearfix'>
				<Link to='./'><img src={logo} alt='Marvel logo'/></Link>
				<ul>
					<li title={title}>About Marvel</li>
					<li title={title}>Help</li>
					<li title={title}>Careers</li>
					<li title={title}>Internship</li>
				</ul>
				<div className='society-networks'>
					<p>Follow Marvel</p>
					<ul>
						<li><a href="https://www.facebook.com/Marvel/" target="#"><img src={facebook} alt='facebook'/></a></li>
						<li><a href="https://www.instagram.com/marvel/" target="#"><img src={instagram} alt='instagram'/></a></li>
						<li><a href="https://twitter.com/marvel" target="#"><img src={twitter} alt='twitter'/></a></li>
						<li><a href="https://www.youtube.com/marvel" target="#"><img src={youtube} alt='youtube'/></a></li>
					</ul>
				</div>
				<img className='cartoon' src={cartoons} alt='Cartoon characters'/>
			</div>
		</footer>
	)
}