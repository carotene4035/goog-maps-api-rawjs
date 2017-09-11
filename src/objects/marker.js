/*
 * 地図上に表示するマーカオブジェクトを生成するクラス
 */
export default class Marker
{
  constructor(
    googleApi,
    latLng
  )
  {
    /** 緯度・経度 */
    this.lat = latLng.lat();
    this.lng = latLng.lng();

    /** google api を使用してマーカを生成 */
    this.gMarker =
      new googleApi.maps.Marker({
        position: latLng
      });
  }

  /** google maps apiが生成したmarkerオブジェクトを取得 */
  getGMarker()
  {
    return this.gMarker;
  }

  /*
   * マーカをマップに配置
   * @param google map オブジェクト
   */
  setToMap(map)
  {
    this.gMarker.setMap(map)
  }
}
