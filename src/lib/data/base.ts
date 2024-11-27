const firstName = 'Riadh';
const lastName = 'Adrani';
const suffix = 'Riadh Adrani';

const BaseData = {
	firstName,
	lastName,
	suffix,
	get fullName() {
		return `${firstName} ${lastName}`;
	}
};

export default BaseData;
