import React from 'react';
import { Article } from '../components/Article/Article';
import { urlBase, urlExtension } from '../api.js';

export const Search = (props) => {

	const [results, setResults] = React.useState([]);
	const [filteredRes, setfilteredRes] = React.useState([]);
	const [shown, setShown] = React.useState(['initial']);
	const [query, setQuery] = React.useState('');
	const [initial, setInitial] = React.useState(true);

	const findMatch = (value) => {
		setQuery(value);
		setShown(sorting(value))
	}

	const sorting = (value) => {
		if(filteredRes.length===20 && filteredRes[0].titleForSite==='characters') {
			return filteredRes.filter(result => result.name.toLowerCase().indexOf(value)>-1);
		} else if (filteredRes.length===20 && filteredRes[0].titleForSite==='comics' || filteredRes.length===20 && filteredRes[0].titleForSite==='series') {
			return filteredRes.filter(result => result.title.toLowerCase().indexOf(value)>-1);
		} else if (filteredRes.length===20 && filteredRes[0].titleForSite==='creators') {
			return filteredRes.filter(result => result.fullName.toLowerCase().indexOf(value)>-1);
		} else {
		 	const arr = [];
		 	for(let i=0; i<filteredRes.length;i++) {
		 		if(i===0) {
		 			arr.push(...filteredRes.slice(0,20).filter(result => result.name.toLowerCase().indexOf(value)>-1))
		 		} else if (i===20) {
		 			arr.push(...filteredRes.slice(20,40).filter(result => result.title.toLowerCase().indexOf(value)>-1))
		 		} else if (i===40) {
		 			arr.push(...filteredRes.slice(40,60).filter(result => result.fullName.toLowerCase().indexOf(value)>-1))
		 		}  else if (i===60) {
		 			arr.push(...filteredRes.slice(60,80).filter(result => result.title.toLowerCase().indexOf(value)>-1))
		 		}
		 	}
		 	return arr;
		}
	}

	const showResults = (data) => data.map (result =>  {
			switch(result.titleForSite) {
				case 'characters':
					return <Article key={result.id} image={result.thumbnail.path+'/standard_xlarge.'+result.thumbnail.extension} title={result.name} />;
				case 'comics':
					return <Article key={result.id} image={result.thumbnail.path+'/standard_xlarge.'+result.thumbnail.extension} title={result.title} />;
				case 'creators':
					return <Article key={result.id} image={result.thumbnail.path+'/standard_xlarge.'+result.thumbnail.extension} title={result.fullName} />;
				case 'series':
					return <Article key={result.id} image={result.thumbnail.path+'/standard_xlarge.'+result.thumbnail.extension} title={result.title} />;
			}
	})


	const filterResults = (filter) => {
		switch(filter) {
			case 'characters':
				setfilteredRes(results[0]);
				setShown([]);
				setInitial(false);
				break;
			case 'comics':
				setfilteredRes(results[1]);
				setShown([]);
				setInitial(false);
				break;
			case 'creators':
				setfilteredRes(results[2]);
				setShown([]);
				setInitial(false);
				break;
			case 'series':
				setfilteredRes(results[3]);
				setShown([]);
				setInitial(false);
				break;
			default:
				setfilteredRes([...results[0],...results[1],...results[2], ...results[3]]);
				initial ? setShown(['initial']) : setShown([]);
				setInitial(false);
		}
	}

	const getResults = () => {
		const datas = [];

		fetch(urlBase+'characters'+urlExtension)
		.then(data => data.json())
		.then(results => {
			results.data.results.forEach(result=> result.titleForSite='characters')
			datas.push(results.data.results)
			fetch(urlBase+'comics'+urlExtension)
			.then(data => data.json())
			.then(results => {
				results.data.results.forEach(result=> result.titleForSite='comics')
				datas.push(results.data.results)
				fetch(urlBase+'creators'+urlExtension)
				.then(data => data.json())
				.then(results => {
					results.data.results.forEach(result=> result.titleForSite='creators')
					datas.push(results.data.results)
					fetch(urlBase+'series'+urlExtension)
					.then(data => data.json())
					.then(results => {
						results.data.results.forEach(result=> result.titleForSite='series')
						datas.push(results.data.results)
						setResults(datas);
					})
				})
			})
		})
	}

	React.useEffect(getResults,[]);

	if (results.length===4) {
		return (
			<main className='search'>
				<div className='wrapper' >
					<input type='text' onChange={(e)=>findMatch(e.target.value)} value={query}/>
					<ul>
						<li onClick={()=>filterResults('')}><a href='#'>ALL</a></li>
						<li onClick={()=>filterResults('characters')}><a href='#'>CHARACTERS</a></li>
						<li onClick={()=>filterResults('comics')}><a href='#'>COMICS</a></li>
						<li onClick={()=>filterResults('creators')}><a href='#'>CREATORS</a></li>
						<li onClick={()=>filterResults('series')}><a href='#'>SERIES</a></li>
					</ul>
					<section>
						{initial && shown.length===1 && filterResults('')}
						{typeof shown[0] ==='string' && showResults(filteredRes)} 
						{shown.length && query ? showResults(shown):null}
						{!shown.length && query ? <div className='no-match'>X No matching results!</div>:null}
						{!shown.length && !query && showResults(filteredRes)}
						{shown.length && !query && showResults(filteredRes)}
					</section>
				</div>
			</main>
		)
	} else {
		return (
			<main className='search'>
				<div className='wrapper loading'>Loading...</div>
			</main>
		)
	}
}