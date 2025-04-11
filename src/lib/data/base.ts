const firstName = 'Kunal';
const lastName = 'Gandhre';
const suffix = 'Kunal Gandhre Portfolio';

const BaseData = {
	firstName,
	lastName,
	suffix,
	get fullName() {
		return `${firstName} ${lastName}`;
	}
};

export default BaseData;
