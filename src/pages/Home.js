import React from 'react';
import banner0 from '../images/banners/banner0.jpg';
import banner1 from '../images/banners/banner1.jpg';
import banner2 from '../images/banners/banner2.jpg';
import banner3 from '../images/banners/banner3.jpg';
import banner4 from '../images/banners/banner4.jpg';


export const Home = () => {

	const [current, setCurrent] = React.useState(0);

	React.useEffect(() => {
	  const timer = setTimeout(slider, 6000);
	  return () => clearTimeout(timer);
	});

	const slider = () => {
		if (current === 4) {
			setCurrent(0)
		} else {
			setCurrent(current+1);
		}	
		console.log(current)
	}

	const zero = () => (
		<div className='zero'>
			<img src={banner0} alt='banner0'/>
			<div>
				<h1>Lorem ipsum dolor sit amet</h1>
				<p> Praesent pharetra, diam sit amet sagittis viverra, 
				lectus nisi consequat augue, eu molestie est mi id leo. 
				Nulla facilisi. Vestibulum volutpat fermentum erat, at pellentesque dolor. 
				Suspendisse iaculis pretium risus, gravida tempor elit faucibus a. 
				Integer pulvinar pellentesque purus, vitae aliquam neque aliquam at.</p>
			</div>

		</div>
	)

	const one = () => (
		<div  className='one'>
			<img src={banner1} alt='banner1'/>
			<div>
				<h1>Maecenas sem tortor</h1>
				<p> Nam ac ultricies neque. Fusce at turpis a sapien dictum tempus. 
				Phasellus sagittis massa nibh, a posuere metus ornare ut. 
				Fusce eleifend convallis lorem. Vestibulum imperdiet justo vel nibh eleifend vulputate. 
				Phasellus dictum auctor nisl interdum ullamcor</p>
			</div>
		</div>
	)

	const two = () => (
		<div  className='two'>
			<img src={banner2} alt='banner2'/>
			<div>
				<h1>Morbi et imperdiet felis.</h1>
				<p> Praesent pharetra, diam sit amet sagittis viverra, 
				lectus nisi consequat augue, eu molestie est mi id leo. 
				Nulla facilisi. Vestibulum volutpat fermentum erat, at pellentesque dolor.</p>
			</div>
		</div>		
	)

	const three = () => (
		<div  className='three'>
			<img src={banner3} alt='banner3'/>
			<div>
				<h1>Nulla facilisi.</h1>
				<p> Praesent pharetra, diam sit amet sagittis viverra, 
				lectus nisi consequat augue, eu molestie est mi id leo. 
				Nulla facilisi. Vestibulum volutpat fermentum erat, at pellentesque dolor. 
				Suspendisse iaculis pretium risus, gravida tempor elit faucibus a.</p>
			</div>
		</div>
	)

	const four = () => (
		<div  className='four'>
			<img src={banner4} alt='banner4'/>
			<div>
				<h1>Donec sollicitudin pellentesque tortor</h1>
				<p> Duis ornare ligula vitae ante iaculis laoreet. 
				Suspendisse ac leo convallis, sagittis risus a, sagittis purus. 
				Vivamus et porttitor risus. Vivamus dictum vehicula tellus nec lobortis. 
				Duis enim nisi, vehicula at tristique ut, ullamcorper sed nisl. </p>
			</div>
		</div>
	)

	return (
		<main className='home'>
			<div className='wrapper'>
				{current===0 && zero()}
				{current===1 && one()}
				{current===2 && two()}
				{current===3 && three()}
				{current===4 && four()}
			</div>
				<div className='cards clearfix'>
					<div className='card'>Lorem ipsum dolor sit amet
						{current===0 && <p></p>}
					</div >
					<div className='card'>Maecenas sem tortor
						{current===1 && <p></p>}
					</div>
					<div className='card'>Morbi et imperdiet felis.
						{current===2 && <p></p>}
					</div>
					<div className='card'>Nulla facilisi.
						{current===3 && <p></p>}
					</div>
					<div className='card'>Donec sollicitudin pellentesque tortor
						{current===4 && <p></p>}
					</div>
				</div>
		</main>
	)
}