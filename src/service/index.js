/**
 * Created by walter.zhou
 */

import axios from 'axios'
import router from '../router/index'
import { Loading, Message } from 'element-ui'
import * as aes from '../utils/aes'
/*

import {loginService} from './user/login.service'
import {logoutService} from './user/logout.service'
import {userService} from './user/user.service'
*/

//漏洞挖掘的请求封装
import {indexManagementService} from './index-manangement/index-management-service.js'

axios.defaults.withCredentials = true;
// axios.defaults.headers.common['processMap'] = JSON.stringify({"processDefinitionKey":"topstechfin-process"});
// axios.defaults.headers.common['processInstanceId'] = '';
// axios.defaults.headers.common['operation'] = '';
// let asd = aes.decrypt(test,'abcdefgrbcdefg12')
//         console.log (asd);
axios.interceptors.request.use(
  config => {
    // let checkToken = JSON.parse(sessionStorage.getItem('token'))
    // let cookie = JSON.parse(sessionStorage.getItem('cookie'))
    // let checkToken = JSON.parse(sessionStorage.getItem('token'))

    if (config.url !='/oauth/login') {  // 判断是否存在token，如果存在的话且不是登陆请求的话，则每个http header都加上token

      let checkToken = JSON.parse(localStorage.getItem('checkt'))
      let cookie = JSON.parse(localStorage.getItem('checkc'))
      if (checkToken && cookie) {
        checkToken = aes.decrypt(checkToken,'abcdefgrbcdefg12')
        cookie = aes.decrypt(cookie,'abcdefgrbcdefg12')
      }

      config.headers.AccessToken = checkToken;
      config.headers.Authorization = cookie;
    }
    // console.log (66,checkToken);
    return config;
  }
);

axios.interceptors.response.use(
  response => {
    // console.log(666,response)
    if (response.status == 200) {
      // 如果是node正常情况，java失败的时候
      if (response.data.data.status == 201) {
        localStorage.removeItem('checkt');
        localStorage.removeItem('checkc');
        Message.error({
          message: response.data.data.message
        })
        if (window.location.protocol == "https:") {
          window.location.href = "https://"+window.location.host +"/#/login";
        } else {
          window.location.href = "http://"+window.location.host +"/#/login";
        }
        return
      }else{
        return Promise.resolve(response.data);
      }
      // return Promise.resolve(response.data);

    } else if(response.status == 442){
      // 如果是未登录，那么把响应reject掉，并重定向到登录模块
      if (window.location.protocol == "https:") {
        window.location.href = "https://"+window.location.host +"/#/login";
      } else {
        window.location.href = "http://"+window.location.host +"/#/login";
      }
      // return Promise.reject(response.data);
    } else if(response.status == 201){
      // 如果是未登录，那么把响应reject掉，并重定向到登录模块
      if (window.location.protocol == "https:") {
        window.location.href = "https://"+window.location.host +"/#/login";
      } else {
        window.location.href = "http://"+window.location.host +"/#/login";
      }
      // return Promise.reject(response.data);
    } else {
      // 如果是其他错误，那么把响应reject掉，并返回错误对象
      return Promise.reject(response.data);
    }
    // return Promise.resolve(response.data);

  },
  err => {
    // console.log (777,err,err.response,err.response.status,err.response.config.url);
    let hash = err.response.config.url;
    if(err.response.status == 442 && hash!='/oauth/unlogin'){
      Message.error({
        //message: 'token失效'
        message:'登录失效，请重新登录'
      })
      localStorage.removeItem('checkt');
      localStorage.removeItem('checkc');
      // 如果是未登录或者是token失效，重定向到登录模块，让用户重新登

      if (window.location.protocol == "https:") {
        window.location.href = "https://"+window.location.host +"/#/login";
      } else {
        window.location.href = "http://"+window.location.host +"/#/login";
      }
      // return Promise.reject(response.data);
    }else if (err.response.status == 404) {
      // localStorage.removeItem('token');//退出的时候清空urlkey
      if (window.location.protocol == "https:") {
        window.location.href = "https://"+window.location.host +"/#/404";
      } else {
        window.location.href = "http://"+window.location.host +"/#/404";
      }

    }
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          err.response.data.message = '请求错误'
          break

        case 401:
          err.response.data.message = '未授权，请登录'
          break

        case 403:
          err.response.data.message = '拒绝访问'
          break

        case 404:
          err.response.data.message = `请求地址出错`
          break

        case 408:
          err.response.data.message = '请求超时'
          break
        case 442:
          err.response.data.message = 'token验证失败'
          // return Promise.reject(err.response.data)
          break
        case 500:
          err.response.data.message = '服务器内部错误'
          break

        case 501:
          err.response.data.message = '服务未实现'
          break

        case 502:
          err.response.data.message = '网关错误'
          break

        case 503:
          err.response.data.message = '服务不可用'
          break

        case 504:
          err.response.data.message = '网关超时'
          break

        case 505:
          err.response.data.message = 'HTTP版本不受支持'
          break

        default:
      }
    }
    // 如果是响应失败，那么返回失败时的数据对象
    return Promise.reject(err.response.data);
  }
);

export{
  indexManagementService
}


