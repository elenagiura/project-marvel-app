import React from 'react';
import './ListItem.scss';
import { Link } from 'react-router-dom';
import { urlBase, urlExtension } from '../../api.js';
import { Article } from '../Article/Article';

export const ListItem = (props) => {

	const [fetchResults, setFetchResults] = React.useState([]);
	const [query, setQuery] = React.useState('');

	const getThumbnails = (filter) => {
		if (filter) {
			fetch(urlBase+filter+urlExtension)
			.then(data => data.json())
			.then(results => {
				setFetchResults(results.data.results.splice(16));
				setQuery(filter);
			})
		} else {
			setFetchResults([]);
			setQuery('')
		}
	} 

	const switching = (result) => {
		switch (query) {
			case 'characters':
				return <Article key={result.id} image={result.thumbnail.path+'/standard_xlarge.'+result.thumbnail.extension} title={result.name}/>
			case 'comics':
				return <Article key={result.id} image={result.thumbnail.path+'/standard_xlarge.'+result.thumbnail.extension} title={result.title}/>
			case 'creators':
				return <Article key={result.id} image={result.thumbnail.path+'/standard_xlarge.'+result.thumbnail.extension} title={result.fullName}/>
			case 'series':
				return <Article key={result.id} image={result.thumbnail.path+'/standard_xlarge.'+result.thumbnail.extension} title={result.title}/>
			case 'stories':
				return <Article key={result.id} image={''} title={result.title}/>
			default:
				return null;
		}
	}

	return (
		<Link to={`./${props.filter}`} >
			<li onMouseOver = {() => getThumbnails(props.filter)}> {props.filter}
				<div className='thumbnails'>
					<div className='wrapper'> 	
						{fetchResults.length!==0 && fetchResults.map(result => switching(result))}
					</div>
				</div>
			</li>
		</Link>
	)
}