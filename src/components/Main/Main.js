import React from 'react';
import './Main.scss';
import { urlBase, urlExtension } from '../../api.js';
import { Article } from '../Article/Article';

export const Main = (props) => {

	const [fetchResults, setFetchResults] = React.useState([]);

	const getResults = () => {
		fetch(urlBase+props.page+urlExtension)
		.then(data => data.json())
		.then(results => setFetchResults(results.data.results))
	}

	const switching = (result) => {
		switch (props.page) {
			case 'characters':
				return <Article key={result.id} image={result.thumbnail.path+'/standard_xlarge.'+result.thumbnail.extension} title={result.name} articType={props.page}/>
			case 'comics':
				return <Article key={result.id} image={result.thumbnail.path+'/standard_xlarge.'+result.thumbnail.extension} title={result.title} articType={props.page}/>
			case 'creators':
				return <Article key={result.id} image={result.thumbnail.path+'/standard_xlarge.'+result.thumbnail.extension} title={result.fullName} articType={props.page}/>
			case 'series':
				return <Article key={result.id} image={result.thumbnail.path+'/standard_xlarge.'+result.thumbnail.extension} title={result.title} articType={props.page}/>
			case 'stories':
				return <Article key={result.id} image={''} title={result.title} articType={props.page}/>
			default:
				return null;
		}
	}

	return (
		<main className={props.page}>
			<div className='wrapper'>
				{fetchResults.map(result => switching(result))}
				{getResults()}
			</div>
		</main>
	)
}