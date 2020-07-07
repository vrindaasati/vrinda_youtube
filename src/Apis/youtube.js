import axios from 'axios';

const KEY = 'AIzaSyCA8Vs04UJro3X4qFdi8KbKwcmZm_XfSDo';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet', 
      maxResults: 10,
      key: KEY
  }
})