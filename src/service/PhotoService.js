import axios from 'axios';

export class PhotoService {

    getImages() {
        return axios.get('https://lilithbe.github.io/post-admin/assets/demo/data/photos.json').then(res => res.data.data);
    }
}
