import { CENTER_PLACE } from '../config/map';
import { ZOOM } from '../config/map';

export default class Map
{

  /** map objectの生成 */
  constructor(domElement, googleApi)
  {
    this.gMap = new googleApi.maps.Map(domElement, {
      zoom: ZOOM,
      center: CENTER_PLACE
    });
  }

  /** google map api が生成したmapオブジェクトを取得 */
  getGMap()
  {
    return this.gMap;
  }

}
