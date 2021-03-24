import artistInfo from '../../components/artistInfo';
import printLyrics from '../../components/printLyrics';
import getLyrics from '../getLyrics';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('search-songs')) {
      e.preventDefault();
      const artist = document.querySelector('#artist').value;
      const title = document.querySelector('#title').value;
      getLyrics(artist, title).then((response) => printLyrics(response));
      artistInfo(artist.toUpperCase(), title.toUpperCase());
    }
  });
};

export default domEvents;
