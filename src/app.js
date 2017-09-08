import GoogleMapsApiLoader from 'google-maps-api-loader';
import Marker from './objects/marker';
import $ from 'jquery';

GoogleMapsApiLoader({
  apiKey: 'AIzaSyDfnrYNQtMC-PqTWvH9F36TehlAN6Zw3MM'
})
  .then(function(googleApi) {
    // 基本的に、全てこの中に記述していく

    // mapの生成
    var uluru = {lat: -25.363, lng: 131.044};
    var map = new googleApi.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: uluru
    });

    // mapをクリックすることによって
    // マーカーが出るようにするイベントを登録
    map.addListener('click', function(event) {

      // マーカの生成
      new Marker(googleApi, map, event.latLng);

      // それぞれ別のイベントにする必要があるので、
      // #testの部分は変数にしなくてはならない
      $(document).on('click', '#test', function() {
        // これでうまくいくはず.
        console.log('aaaaaaa');
      });
    });

  }, function(err) {
    console.error(err);
  });
