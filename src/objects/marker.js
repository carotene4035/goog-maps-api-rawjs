export default class Marker
{
  constructor(
    googleApi,
    map,
    latLng
  )
  {
    // 緯度
    this.lat = latLng.lat();
    // 経度
    this.lng = latLng.lng();

    /** google api を使用してマーカを生成 */
    this.markerObject =
      new googleApi.maps.Marker({
        position: latLng
      });

    /** マーカを配置 */
    this.markerObject.setMap(map);

    // 情報窓の生成
    // 別クラスに切り分ける
    var contentString = 'こんなかんじだね。';
    contentString = contentString + "<div id='test'><br>管理番号<input type='text'>";
    contentString = contentString + "<br>評価<select name='hello'><option value='a'>a</option><option value='b'>b</option><option value='c'>c</option></select>";
    contentString = contentString + "<br><button>登録</button></div>";

    var infowindow = new googleApi.maps.InfoWindow({
      content: contentString,
      maxWidth: 200
    });

    infowindow.open(map, this.markerObject);
  }
}
