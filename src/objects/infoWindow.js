import WINDOW_SIZE from '../config/infoWindow';

/** クリックしたときに出てくる吹き出し */
export default class InfoWindow
{
  constructor(googleApi, latLng)
  {
    // this.googleApi = googleApi;

    var contentString = '';

    contentString = contentString + "<div id='1'>";
    contentString = contentString + "管理番号";
    contentString = contentString + "<input type='text' name='controlNumber' class='form-control'>";

    contentString = contentString + "損傷評価";
    contentString = contentString + "<select name='damageDegree' class='form-control'>";
    contentString = contentString + "<option value='0'>a</option>";
    contentString = contentString + "<option value='1'>b</option>";
    contentString = contentString + "<option value='2'>c</option>";
    contentString = contentString + "</select>";

    contentString = contentString + "<button id='test' class='btn btn-info'>登録</button>";

    contentString = contentString + "</div>";

    /** 以下は、コントローラの操作 */
    /** イベントリスナの設置 */
    $(document).on('click', '#test', function(e) {
      var $button = $(e.currentTarget);
      var $form = $(e.currentTarget).parent();

      var controlNumber = $form.find('input[name=controlNumber]').val();
      var damageDegree  = $form.find('select[name=damageDegree]').val();

      console.log($button);
      console.log(damageDegree);
      console.log(controlNumber);
      /** modelに代入する */
    });

    this.gInfoWindow = new googleApi.maps.InfoWindow({
      position: latLng,
      content: contentString,
      maxWidth: WINDOW_SIZE
    });
  }

  /** 情報オブジェクトを取得 */
  getGInfoWindow()
  {
    return this.gInfoWindow;
  }

  /*
   * 情報窓を配置する
   * @param map google map オブジェクト
   * @param latLng google map latLng オブジェクト
   */
  setToMap(map)
  {
    this.gInfoWindow.open(map);
  }
}
