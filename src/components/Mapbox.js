import Mapbox from '@mapbox/react-native-mapbox-gl';
import { MAPBOX_KEY } from 'react-native-dotenv';

Mapbox.setAccessToken(MAPBOX_KEY);

export default Mapbox;
