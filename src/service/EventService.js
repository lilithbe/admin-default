import axios from 'axios';

export class EventService {

    getEvents() {
        return axios.get('https://lilithbe.github.io/post-admin/assets/demo/data/events.json')
            .then(res => res.data.data);
    }
}
