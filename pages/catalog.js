import useTranslation from 'next-translate/useTranslation';
import { MainLayout } from '../components/MainLayout';

import styles from '../styles/catalog.module.scss';
import Link from 'next/link';
export default function Catalog({ catalog, locale }) {
	const catalogPrint = catalog[locale].catalog;
	const { t } = useTranslation('common');
	return (
		<MainLayout footer>
			<h1>{t('catalog')}</h1>
			<div className={styles.catalog}>
				{catalogPrint.map(el => {
					return (
						<div key={el.id} className={styles.catalog_col}>
							<h5>{el.name}</h5>
							<div className={styles.catalog_col__in}>
								{el.categories.map((categories, index) => {
									return (
										<span key={categories}>
											<Link
												href={`/product/[...slug]`}
												as={`/product/${el.id}/${index}`}
											>
												{categories}
											</Link>
										</span>
									);
								})}
							</div>
						</div>
					);
				})}

				<div className={styles.catalog_col}>
					<h5>Разбрасыватели и опрыскиватели</h5>
					<div className={styles.catalog_col__in}>
						<span>Разбрасыватели удобрений</span>
						<span>Опрыскиватели</span>
					</div>
				</div>

				<div className={styles.catalog_col}>
					<h5>Собирательство</h5>
					<div className={styles.catalog_col__in}>
						<span>Пресс подборщики и валы</span>
						<span>Топперы</span>
						<span>Грабли</span>
						<span>Кормовое оборудование прочее</span>
					</div>
				</div>

				<div className={styles.catalog_col}>
					<h5>Обработка почвы</h5>
					<div className={styles.catalog_col__in}>
						<span>Культиваторы</span>
						<span>Плуги</span>
						<span>Посевные комплексы</span>
						<span>Дисковые бороны и компакт-диски</span>
						<span>Силовые бороны</span>
					</div>
				</div>

				<div className={styles.catalog_col}>
					<h5>Более</h5>
					<div className={styles.catalog_col__in}>
						<span>Животноводческое оборудование</span>
						<span>Навесное оборудование</span>
						<span>Бульдо-Экскаваторы</span>
						<span>Перегрузчики зерна</span>
						<span>Дополнительные высевающие техники</span>
						<span>Бетоносмесители</span>
						<span>Строительная техника прочая</span>
						<span>Цепные косилки</span>
						<span>Прямой высев</span>
						<span>высев</span>
						<span>Диско-высевная комбинация</span>
						<span>Думперы</span>
						<span>Экскаваторы</span>
						<span>Гусеничные экскаваторы</span>
						<span>Мини-экскаваторы</span>
						<span>Экскаваторы прочие</span>
						<span>Колесныe экскаваторы</span>
						<span>Кормораздатчики другой</span>
						<span>Прицепные кормоуборочные комбайны</span>
						<span>Транспортировщики кормов</span>
						<span>Лесообрабатывающие техники</span>
						<span>Лесообрабатывающие комбайн</span>
						<span>Лесозаготовительные косилки</span>
						<span>Лесовозные прицепы</span>
						<span>Вилочные погрузчики</span>
						<span>Форвардеры</span>
						<span>Точный высев и GPS</span>
						<span>Обработка зернохранилищ</span>
						<span>Виноградоуборочные комбайны</span>
						<span>Тапёры</span>
						<span>Жатки</span>
						<span>Триммер для живой изгороди</span>
						<span>Хмелевое оборудование</span>
						<span>Ирригация</span>
						<span>Газонокосилки</span>
						<span>Разбрасыватели навоза и компоста</span>
						<span>Механическое удаление сорняков</span>
						<span>Мини погрузчики</span>
						<span>Доильное оборудование</span>
						<span>Кормосмесители</span>
						<span>Мототехника</span>
						<span>Муниципальная техника</span>
						<span>Техника для садов и виноградников и прочее</span>
						<span>Запчасти</span>
						<span>сеялки</span>
						<span>Картофельные техники</span>
						<span>Высокоточный высев</span>
						<span>Дорожные катки</span>
						<span>Пилы и разделители</span>
						<span>Самоходные разбрасыватели жидкого навоза</span>
					</div>
				</div>
			</div>

		</MainLayout>
	);
}

export async function getServerSideProps({ locale }) {
	const response = await fetch(`http://localhost:4200/language`);
	const catalog = await response.json();
	return {
		props: { catalog, locale }, // will be passed to the page component as props
	};
}
