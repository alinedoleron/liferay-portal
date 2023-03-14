import personFill from './assets/icons/person-fill.svg';
import {GetAppModal} from './components/GetAppModal/GetAppModal';
import {AppCreationFlow} from './pages/AppCreationFlow/AppCreationFlow';
import {DashboardPage} from './pages/DashboardPage/DashboardPage';

interface AppRoutesProps {
	route: string;
}

const account = {
	name: 'Hourglass',
	email: 'mauren.hall@acme.com',
	image: personFill,
};

const app = {
	name: 'Chameleon Intranet',
	version: 'v0.01 by Smart Co.',
	price: '$179.99',
	image: personFill,
	paymentMethods: ['trial', 'card', 'purchase'],
	createdBy: '',
};

export default function AppRoutes({route}: AppRoutesProps) {
	if (route === 'create-new-app') {
		return <GetAppModal account={account} app={app} paid />;

		// return <AppCreationFlow />;

	}

	return <DashboardPage />;
}
