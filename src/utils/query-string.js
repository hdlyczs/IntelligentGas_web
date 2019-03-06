/**
 * 解析url的 queryString ,  foo=bar&search=123  => {foo: 'bar', search: 123}
 * @param {String} str
 * @return {Object}
 */
export const parse = (str) => {
    const ret = {};
    str.replace(/^\?/, '').split('&').forEach((item) => {
        const s = item.split('=');
        const key = s[0];
        const value = s[1];
        ret[key] = decodeURIComponent(s[1]);
    });
    return ret;
}

/**
 * 生成queryString , {foo: 'bar', search: 123}  => foo=bar&search=123
 * @param data
 * @return {String}
 */
export const stringify = (data) => {
    const ret = [];
    for(let k in data) {
        const value = encodeURIComponent(data[k])
        ret.push(`${k}=${value}`)
    }
    return ret.join('&');
}
