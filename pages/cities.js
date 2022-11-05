import Link from 'next/link';

import { MainLayout } from '../components/MainLayout';
import '../styles/cities.module.css';
export default function Cities({ cities }) {
	return (
		<MainLayout footer title={'Cities'}>
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

export async function getServerSideProps() {
	const response = await fetch('http://localhost:4200/cities');
	const cities = await response.json();
	return {
		props: { cities }, // will be passed to the page component as props
	};
}
