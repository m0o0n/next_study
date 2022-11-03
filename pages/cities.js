import Link from 'next/link';
import { useEffect, useState } from 'react';
import { MainLayout } from '../components/MainLayout';
import '../styles/cities.module.css';
export default function Cities({ cities: serverCities }) {
	const [cities, setCities] = useState(serverCities);
	useEffect(() => {
		async function load() {
			const response = await fetch('http://localhost:4200/cities');
			const cities = await response.json();
			setCities(cities);
		}
		if (!serverCities) {
			load();
		}
	}, []);
	if (!cities) {
		return (
			<MainLayout>
				<span>Loading....</span>
			</MainLayout>
		);
	}
	return (
		<MainLayout title={'Cities'}>
			<ul className="cities_list">
				{cities.map(city => {
					return (
						<li key={city.id}>
							<Link href={`/city/[id]`} as={`/city/${city.id}`}>
								{city.name}
							</Link>
						</li>
					);
				})}
			</ul>
		</MainLayout>
	);
}

Cities.getInitialProps = async ({ req }) => {
	if (!req) {
		return { cities: null };
	}
	const response = await fetch('http://localhost:4200/cities');
	const cities = await response.json();
	return {
		cities,
	};
};
