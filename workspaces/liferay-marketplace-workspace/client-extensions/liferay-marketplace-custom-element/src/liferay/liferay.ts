interface ILiferay {
	MarketplaceCustomerFlow: {appId: number};
	Service: Function;
	ThemeDisplay: {
		getCanonicalURL: () => string;
		getCompanyId: () => string;
		getCompanyGroupId: () => string;
		getLanguageId: () => string;
		getPathContext: () => string;
		getPathThemeImages: () => string;
		getPortalURL: () => string;
		getUserId: () => string;
		isSignedIn: () => boolean;
	};
	authToken: string;
	detach: Function;
	on: Function;
}
declare global {
	interface Window {
		Liferay: ILiferay;
	}
}

export const Liferay = window.Liferay || {
	MarketplaceCustomerFlow: 0,
	Service: {},
	ThemeDisplay: {
		getCanonicalURL: () => window.location.href,
		getCompanyId: () => '',
		getCompanyGroupId: () => '',
		getPathContext: () => '',
		getPathThemeImages: () => '',
		getLanguageId: () => '',
		getPortalURL: () => '',
		getUserId: () => '',
		isSignedIn: () => {
			return false;
		},
	},
	detach: (
		type: keyof WindowEventMap,
		callback: EventListenerOrEventListenerObject
	) => window.removeEventListener(type, callback),
	on: (
		type: keyof WindowEventMap,
		callback: EventListenerOrEventListenerObject
	) => window.addEventListener(type, callback),
};
