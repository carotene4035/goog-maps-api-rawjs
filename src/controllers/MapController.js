import Marker from '../objects/marker';
import Map from '../objects/map';
import InfoWindow from '../objects/infoWindow';

export default class MapController
{
  constructor(googleApi)
  {

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

  }
}
