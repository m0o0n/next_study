import { MainLayout } from '../components/MainLayout';
import useTranslation from 'next-translate/useTranslation';

export default function Home() {
	const { t } = useTranslation('common');
	return (
		<MainLayout footer title={'Main Page'}>
			<h1>{t('greeting')}</h1>
		</MainLayout>
	);
}
