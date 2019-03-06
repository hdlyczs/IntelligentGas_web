import axios from 'axios';
// import { isUndef } from '@util/is';
import * as urlHandle from './query-string';
// const ak = sessionStorage.getItem('ak') || localStorage.getItem('ak');
axios.defaults.withCredentials = true;
// babel runtime plugin 通过局部变量的方式引入Promise
// axios是babel-loader加载之外的库，axios 内部依赖了Promise
// 所以需要全局定义Promise, 解决IE兼容性问题
if (!window.Promise) {
    window.Promise = Promise;
}

const showLoading = () => {

};

const hideLoading = () => {

};

const preCheckCode = (response) => { // 通用请求判断
    const data = response.data;
    return data;
    /*hideLoading();
    const data = response.data;
    if (isUndef(data.code) || data.code === 0) {
        return data;
    }
    if (data.code === 302) {
        window.location = data.message + window.location.hash;
        return false;
    }
    if (data.code === 4002 || data.code === 4000) {
        window.location = '/login.html';
        return false;
    }*/
    return Promise.reject(response.data, response);
};

const preReject = (err) => { // 请求丢失时触发
    hideLoading();
    let response = err.response || {};
    return Promise.reject(response.data || {}, response);
};

const getTimeSpan = () => {
    return new Date().getTime();
};

const common = ({ data = {}, params = {}, method = '', url = '', headers = {} } = {}) => {
    showLoading();
    const res = {
        method,
        url,
        data,
        params,
        headers: { 'X-Requested-With': 'XMLHttpRequest', 'Content-Type': 'application/json; charset=UTF-8' },
        responseType: 'json',
        // withCredentials: true,
    };
    Object.assign(res.headers, headers);
    Object.assign(res.params, { _: getTimeSpan() });
    return axios(res).then(preCheckCode, preReject);
};

export const getJSON = (url, params = {}) => {
    return common({
        url,
        method: 'GET',
        params,
    });
};

export const postJSON = (url, data = {}) => {
    return common({
        url,
        method: 'POST',
        data,
    });
};

// ** 注：登录时需使用formdata格式传输数据
export const postFormData = (url, formData = {}) => {
    const data = urlHandle.stringify(formData);
    return common({
        url,
        method: 'POST',
        data,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
};

export const putJSON = (url, data = {}) => {
    return common({
        url,
        method: 'PUT',
        data,
    });
};

export const delData = (url, data = {}) => {
    return common({
        url,
        method: 'DELETE',
        data,
    });
};

