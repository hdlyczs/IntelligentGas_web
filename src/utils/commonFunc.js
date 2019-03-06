import { Message } from 'element-ui';

export const moneyFormat = (s, n) => {
    let isNum = Number(s);
    if (isNaN(isNum)) {
        return s;
    }

    if (isNum === 0) {
        s = '0';
    }

    if (null == s || s == '' ) return '';
    let oldS = s;
    if (s < 0) {
        s = 0 - s;
    }

    n = n >= 0 && n <= 20 ? n : 2;
    s = parseFloat((s + '').replace(/[^\d\.-]/g, '')).toFixed(n) + '';
    let l = s.split('.')[0].split('').reverse(),
        r = s.split('.')[1];
    let t = '';
    for (let i = 0; i < l.length; i++) {
        t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? ',' : '');
    }
    if (oldS < 0) {
        return '-' + t.split('').reverse().join('') + '.' + r;
    } else {
        return t.split('').reverse().join('') + '.' + r;
    }
};

// 时间字符串变为时间戳
export const timestamp = (stringTime) => {
    if (typeof stringTime !== 'string') {
        Message.error('必须是一个字符串');
        return;
    }

    let t = Date.parse(new Date(stringTime));
    t = t / 1000;

    return t;
};

// 时间戳格式化
export const tampDate = (stringTime) => {
    const reg = /^[0-9]*$/;
    if (typeof stringTime !== 'string' && typeof stringTime !== 'number') {
        Message.error('必须是一个字符串或数字');
        return;
    }
    if (!reg.test(stringTime)) {
        Message.error('时间戳有误');
        return;
    }

    const newDate = new Date();
    newDate.setTime(stringTime * 1000);
    let tempDate = newDate.toJSON();
    tempDate = tempDate.split('T')[0];

    return tempDate;
};

// 时间加
export const addTime = (stringTime, n) => {
    const reg = /^[0-9]*$/;
    let isTamp = true;
    let newDate = '';
    if (typeof n !== 'string' && typeof n !== 'number') {
        Message.error('天数类型错误');
        return;
    }

    if (!reg.test(stringTime)) {
        isTamp = false;
    }

    if (isTamp) {
        newDate = (Number(stringTime) * 1000) + (Number(n) * 24 * 60 * 60 * 1000);
    } else {
        const t = Date.parse(new Date(stringTime));
        newDate = (Number(t)) + (Number(n) * 24 * 60 * 60 * 1000);
    }

    const newTime = new Date();
    newTime.setTime(newDate);
    newDate = newTime.toJSON();
    newDate = newDate.split('T')[0];

    return newDate;
};

// 时间减
export const subTime = (stringTime, n) => {
    const reg = /^[0-9]*$/;
    let isTamp = true;
    let newDate = '';
    if (typeof n !== 'string' && typeof n !== 'number') {
        Message.error('天数类型错误');
        return;
    }

    if (!reg.test(stringTime)) {
        isTamp = false;
    }

    if (isTamp) {
        newDate = (Number(stringTime) * 1000) - (Number(n) * 24 * 60 * 60 * 1000);
    } else {
        const t = Date.parse(new Date(stringTime));
        newDate = (Number(t)) - (Number(n) * 24 * 60 * 60 * 1000);
    }

    const newTime = new Date();
    newTime.setTime(newDate);
    newDate = newTime.toJSON();
    newDate = newDate.split('T')[0];

    return newDate;
};

// 列表序号
export const formatListIndex = (list, config) => {
    for (let i = 0, len = list.length; i < len; i++) {
        const elem = list[i];
        if (!elem) {
            continue;
        }
        elem['index'] = config.pageSize * (config.pageIndex - 1) + (i + 1);
    }

    return list;
};


//两个时间日期差值-（相差分钟数）
    export const dateDiff=(date1, date2)=>{  
        var type1 = typeof date1, type2 = typeof date2;       
        if(type1 == 'string')       
            date1 = stringToTime(date1);       
        else if(date1.getTime)       
            date1 = date1.getTime();       
        if(type2 == 'string')       
            date2 = stringToTime(date2);       
        else if(date2.getTime)       
            date2 = date2.getTime();   
        return (date2 - date1) / 1000 / 60;//除1000是毫秒，不加是秒-（此为相差分钟数）
    }   
    //字符串转成Time(dateDiff)所需方法
    function stringToTime(string){       
        var f = string.split(' ', 2);       
        var d = (f[0] ? f[0] : '').split('-', 3);       
        var t = (f[1] ? f[1] : '').split(':', 3);       
        return (new Date(       
        parseInt(d[0], 10) || null,       
        (parseInt(d[1], 10) || 1)-1,       
        parseInt(d[2], 10) || null,       
        parseInt(t[0], 10) || null,      
        parseInt(t[1], 10) || null,       
        parseInt(t[2], 10) || null)).getTime();   
    }  