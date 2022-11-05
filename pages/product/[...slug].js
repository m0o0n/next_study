import { MainLayout } from '../../components/MainLayout';
import useTranslation from 'next-translate/useTranslation';

export default function Products({ query, locale, catalog }) {
	// query.slug[0] -> id категории
   // query.slug[1] -> id подкатегории на которую был клик
   const { t } = useTranslation('common');
	const product =
	catalog[locale]
	.catalog[query.slug[0]]
	.categories
	.filter(el=> el.id == query.slug[1])[0].name;

	const products = catalog[locale].products.filter(el=>{
	return el.categoryID == query.slug[1];
	});
	return (
		<MainLayout footer title={`Catalog | ${product}`}>
			<h1>{product}</h1>
			<div className="product_container">

				{!products.length ?
				<span>{t('empty_products')}</span> :
				products.map(prod => {
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
