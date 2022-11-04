import useTranslation from 'next-translate/useTranslation';
import { MainLayout } from '../components/MainLayout';
export default function About() {
	const { t } = useTranslation('common');
	console.log(useTranslation('common'));
	return (
		<MainLayout>
			<h1>{t('about')}</h1>
		</MainLayout>
	);
}
