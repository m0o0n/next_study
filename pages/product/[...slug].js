import { MainLayout } from '../../components/MainLayout';


export default function City({ query, locale, catalog }) {
	const product =
		catalog[locale].catalog[query.slug[0]].categories[query.slug[1]];

	const products = catalog[locale].products;
	return (
		<MainLayout footer>
			<h1>{product}</h1>
			<div className="product_container">
				{products.map(prod => {
					return (
						<div className="product" key={prod.id}>
							<h1>{prod.name}</h1>
							<span>{prod.cost}</span>
							<span>{prod.year}</span>
						</div>
					);
				})}
			</div>

		</MainLayout>
	);
}

export async function getServerSideProps({ query, locale }) {
	const response = await fetch(`http://localhost:4200/language`);
	const catalog = await response.json();
	return {
		props: { query, locale, catalog },
	};
}
