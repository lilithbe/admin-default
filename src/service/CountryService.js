import axios from 'axios'

export class CountryService {

    getCountries() {
        return axios.get('https://lilithbe.github.io/post-admin/assets/demo/data/countries.json')
            .then(res => res.data.data);
    }
}