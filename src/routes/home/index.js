import { h } from 'preact';
import style from './style.css';
import { useState, useEffect } from 'preact/hooks';

const Home = () => {
	return (
		<div class={style.home}>
			<RandomMedia />
		</div>
	);
};


const RandomMedia = () => {
	const [media, setMedia] = useState([])
	useEffect(() => {
		fetch(process.env.PREACT_APP_API_URL+'/random?limit=5&type=2')
		.then((res) => res.json())
		.then((json) => {
			setMedia(json)
		})
	}, [])

	return (
		<ul>
			{media.map(m => (
				<li>{m.title}</li>
			))}
		</ul>
	)
}

const Resource = props => {
	return (
		<a href={props.link} class={style.resource}>
			<h2>{props.title}</h2>
			<p>{props.description}</p>
		</a>
	);
};

export default Home;
