const bast_url = 'https://api.icndb.com'

export const joke_url_name = (first_name, last_name) => `${bast_url}/jokes/random?firstName=${first_name}&lastName=${last_name}`

export const joke_url_number = (number) => `${bast_url}/jokes/random/${number}`