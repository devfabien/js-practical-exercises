
const john = {
	age:20,
	address: {
		country: 'USA',
		city: 'New York'
	}
}

const mark = {
	age:20,
	address: john.address
}

mark.address.city = 'Frolida'

console.log(john)
console.log(mark)



