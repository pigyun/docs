import type { SIDEBAR } from '../config';
type LanguagesInUse = keyof typeof SIDEBAR;

const en = {
	// Left Sidebar tab headings
	'leftSidebar.learnTab': 'Learn',
	'leftSidebar.referenceTab': 'Reference',
	// Right Sidebar
	'rightSidebar.onThisPage': 'On this page',
	'rightSidebar.overview': 'Overview',
	'rightSidebar.more': 'More',
	'rightSidebar.editPage': 'Edit this page',
	'rightSidebar.translatePage': 'Translate this page',
	'rightSidebar.joinCommunity': 'Join our community',
	// Used in previous/next page links at the bottom of pages
	'articleNav.nextPage': 'Next Page',
	'articleNav.prevPage': 'Back',
	// Used in `<Since>`: Added in: v0.24.0 [NEW]
	'since.addedIn': 'Added in:',
	'since.new': 'New',
};

const checkLanguages = <T extends Record<LanguagesInUse, Partial<typeof en>>>(config: T): T => config;

export const translations = checkLanguages({
	en,
	de: {},
	nl: {},
	fi: {},
	es: {},
	'zh-CN': {},
	'zh-TW': {},
	bg: {},
	fr: {},
	bn: {},
	kr: {},
	ar: {},
	da: {},
	ja: {},
	ru: {},
	it: {},
	pl: {},
	hu: {},
});
