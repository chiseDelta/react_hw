const jsonplaceholderURL = 'https://jsonplaceholder.typicode.com'
const carsAPIURL = 'http://owu.linkpc.net/carsAPI/v1'

const users = '/users'
const comments = '/comments'
const cars = '/cars'

const urls = {
    users,
    comments,
    cars: {
        base: cars,
        byId: (id) => `${cars}/${id}`
    }
}

export {urls, jsonplaceholderURL, carsAPIURL}