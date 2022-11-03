import { useEffect, useState } from 'react';
import { MainLayout } from '../../components/MainLayout';
import { useRouter } from 'next/router';
export default function City({ city: serverCity }) {
	const [city, setCity] = useState(serverCity);
	const router = useRouter();
	useEffect(() => {
		async function load() {
			const response = await fetch(
				`http://localhost:4200/cities/${router.query.id}`,
			);
			const city = await response.json();
			setCity(city);
		}
		if (!serverCity) {
			load();
		}
	}, []);
	if (!city) {
		return (
			<MainLayout>
				<span>Loading....</span>
			</MainLayout>
		);
	}
	return (
		<MainLayout>
			<h1>{city.name}</h1>
			<ul>
				{city.streets.map(s => {
					return <li key={s}>{s}</li>;
				})}
			</ul>
		</MainLayout>
	);
}

City.getInitialProps = async ({ query, req }) => {
	if (!req) {
		return { city: null };
	}
	const response = await fetch(`http://localhost:4200/cities/${query.id}`);
	const city = await response.json();
	return {
		city,
	};
};
