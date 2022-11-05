import { MainLayout } from '../../components/MainLayout';

export default function ProductCart({ product, locale, query }) {
	const currentProduct = product[locale].products.filter(
		el => el.id == query.id,
	)[0];

	return (
		<MainLayout footer>
			<h1>{currentProduct.name}</h1>
			<span>{currentProduct.cost}</span>
			<span>{currentProduct.year}</span>
		</MainLayout>
	);
}

export async function getServerSideProps({ locale, query }) {
	const response = await fetch(`http://localhost:4200/language`);
	const product = await response.json();
	return {
		props: { product, locale, query },
	};
}
