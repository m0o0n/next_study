import { MainLayout } from '../../components/MainLayout';


export default function City({ city }) {
	return (
		<MainLayout footer>
			<h1>{city.name}</h1>
			<ul>
				{city.streets.map(s => {
					return <li key={s}>{s}</li>;
				})}
			</ul>

		</MainLayout>
	);
}

export async function getServerSideProps({ query }) {
	const response = await fetch(`http://localhost:4200/cities/${query.id}`);
	const city = await response.json();
	return {
		props: { city }, // will be passed to the page component as props
	};
}
