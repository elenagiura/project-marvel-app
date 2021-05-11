import React from 'react';
import './Article.scss';

const Article = (props) => {
	return (
		<article className={props.articType}>
			{props.image && <div><img src={props.image} alt=''/></div>}
			<p>{props.title}</p>
		</article>
	)
}

export { Article };