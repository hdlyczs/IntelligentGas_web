import axios from 'axios'
import APICONFIG from '../../config/api';
axios.defaults.withCredentials = true;
var indexManagementService = {
  //获取首页表图数据
  getIndexDataInfoList(){
    return axios.get(APICONFIG.HOME_MANAGE.GET_INDEX_DATA_INFO_LIST);
  },
};
export {indexManagementService}
