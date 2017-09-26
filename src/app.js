import GoogleMapsApiLoader from 'google-maps-api-loader';
import Marker from './objects/marker';
import Map from './objects/map';
import InfoWindow from './objects/infoWindow';
import $ from 'jquery';

GoogleMapsApiLoader({
  apiKey: 'AIzaSyDfnrYNQtMC-PqTWvH9F36TehlAN6Zw3MM'
})
  .then(function(googleApi) {

    /** Mapを設置する場所をdomElementとして取得 */
    var domElement = document.getElementById('map');


    /** Mapの生成 */
    var map = new Map(domElement, googleApi);

    /** Mapにマーカを生成するイベントリスナを登録 */
    map.getGMap().addListener('click', function(event) {

      /*
       * マーカの生成と配置
       */
      var marker = new Marker(googleApi, event.latLng);
      marker.setToMap(map.getGMap());

      /*
       * 情報窓の生成と配置
       */
      var infoWindow = new InfoWindow(
        googleApi,
        marker.getGMarker().getPosition()
      );
      infoWindow.setToMap(
        map.getGMap()
      );
    });


  }, function(err) {
    console.error(err);
  });
