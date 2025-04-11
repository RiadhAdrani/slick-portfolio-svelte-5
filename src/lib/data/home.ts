import BaseData from './base';
import { getSkills } from './skills';
import type { Skill } from './types';

const title = 'Home';

const hero: {
	title: string;
	description: string;
	links: Array<{ label: string; href: string; icon: `i-carbon-${string}` }>;
} = {
	title: `${BaseData.fullName},`,
	description:
		'Senior Manager & Tech Lead at Fidelity Investments, Ex HP Inc, Ericsson, Microsoft & AWS certified',
	links: [
		{ label: 'GitHub', href: 'https://github.com/kunal-gandhre', icon: 'i-carbon-logo-github' },
		{ label: 'LinkedIn', href: 'https://linkedin.com/in/kunal-gandhre/', icon: 'i-carbon-logo-linkedin' },
		{ label: 'Twitter', href: 'https://twitter.com/@gandhre', icon: 'i-carbon-logo-twitter' },
		{ label: 'Email', href: 'mailto:gandhre.kunal@gmail.com', icon: 'i-carbon-at' }
	]
};

const carousel: Array<Skill> = getSkills();

const HomeData = {
	title,
	hero,
	carousel
};

export default HomeData;
