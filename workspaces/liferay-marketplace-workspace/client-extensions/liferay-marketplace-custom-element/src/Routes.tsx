// import {AppCreationFlow} from './pages/AppCreationFlow/AppCreationFlow';

import personFill from './assets/icons/person-fill.svg';
import {GetAppModal} from './components/GetAppModal/GetAppModal';
import {PublishedAppsDashboardPage} from './pages/PublishedAppsDashboardPage/PublishedAppsDashboardPage';

interface AppRoutesProps {
	route: string;
}

const account = {
	name: 'Hourglass',
	email: 'mauren.hall@acme.com',
	image: personFill,
};

const addresses = [
	{
		title: 'Mareen Hall 1',
		description:
			'24029 W Archer Blvd, New York, NY 02881, United States (714) 718-4565',
	},
	{
		title: 'Mareen Hall 2',
		description:
			'24029 W Archer Blvd, New York, NY 02881, United States (714) 718-4565',
	},
];

const app = {
	id: 0,
	externalReferenceCode: 'string',
	name: 'Chameleon Intranet',
	version: 'v0.01 by Smart Co.',
	price: 179.99,
	image: personFill,
	paymentMethods: ['trial', 'pay', 'order'],
	createdBy: '',
};

export default function AppRoutes({route}: AppRoutesProps) {
	if (route === 'create-new-app') {
		return (
			<GetAppModal
				account={account}
				addresses={addresses}
				app={app}
				channelId={0}
				handleClose={() => {}}
				paid
			/>
		);

		// return <AppCreationFlow />;

	}

	return <PublishedAppsDashboardPage />;
}
