import Assets from './assets';
import type { Education } from './types';

const title = 'Education';

export const items: Array<Education> = [
	{
		degree: 'Bachelor degree of Industrial Computing',
		description: '',
		location: 'Borj Cédria, Tunisia',
		logo: Assets.Unknown,
		name: '',
		organization: 'ISTIC',
		period: { from: new Date(2017, 8, 15), to: new Date(2020, 6, 19) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['Algorithm', 'C', 'C++', 'HTML', 'CSS', 'Javascript']
	}
];

const EducationData = { title, items };

export default EducationData;
