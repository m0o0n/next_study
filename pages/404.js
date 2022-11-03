import Link from 'next/link';
import { MainLayout } from '../components/MainLayout';
import classes from './../styles/error.module.css';
export default function ErrorPage() {
	return (
		<MainLayout title={'Error Page'}>
			<h1 className={classes.error}>Error</h1>
			<div>
				Please{' '}
				<Link href={'/'}>
					<span className={classes.link}>go back</span>{' '}
				</Link>
				to safety
			</div>
		</MainLayout>
	);
}
