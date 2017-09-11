import GoogleMapsApiLoader from 'google-maps-api-loader';
import MapController from './controllers/MapController';
import $ from 'jquery';

GoogleMapsApiLoader({
  apiKey: 'AIzaSyDfnrYNQtMC-PqTWvH9F36TehlAN6Zw3MM'
})
  .then(function(googleApi) {

    /** いろんな操作を統括するコントローラ */
    new MapController(googleApi);

  }, function(err) {
    console.error(err);
  });
