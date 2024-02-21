const jsonplaceholderURL = 'https://jsonplaceholder.typicode.com'
const carsAPIURL = 'http://owu.linkpc.net/carsAPI/v1'

const users = '/users'
const comments = '/comments'
const cars = {
    cars: '/cars',
    byId: (id) => `${cars.cars}/${id}`
}

const urls = {
    users,
    comments,
    cars
}

export {urls, jsonplaceholderURL, carsAPIURL}