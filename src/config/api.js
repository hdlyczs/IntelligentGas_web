
// 配置API接口地址
let root = process.env.API_ROOT;
// root = '//'+window.location.host;
export default {
  /*
   * @action 鉴权服务
   */
  OAUTH: {
    // LOGIN: `${process.env.API_ROOT}/user/login`,
    //登入
    LOGIN: '/oauth/login',
    //登出
    LOGOUT: '/oauth/logout',
    //免登陆验证
    UNLOGIN: '/oauth/unlogin',
    // 获取用户信息
    GET_USER_INFO: '/oauth/info',
    // 更新用户信息
    UPDATE_USER_INFO:'/oauth/update',
    // 修改用户密码信息
    FIX_USER_INFO:'/oauth/resetPwd',
    // 获取菜单鉴权信息
    GET_MENU_LIST: '/oauth/menuList',

  },

  /*
   * @action 首页管理
   */
  HOME_MANAGE:{
    //获取首页数据
    GET_INDEX_DATA_INFO_LIST:'/home/dataInfoList'

  },
  /*
   * @action 任务管理
   */
  TASK_MANAGE:{
    // 新建任务
    NEW_TASK: '/scavengingTask/add',
    // 任务列表
    TASK_LIST: '/scavengingTask/taskList',
    //查看详情任务信息
    CHECK_DETAIL_INFO:'/scavengingTask/detail',
    // 启动任务扫描
    TASK_START: '/scavengingTask/start',
    // 暂停任务扫描
    TASK_STOP: '/scavengingTask/stop',
    // 强制任务停止
    TASK_FORCE_STOP: '/scavengingTask/forceStop',
    // 删除任务
    TASK_DEL: '/scavengingTask/del',
    //检查任务状态
    CHECK_TASK_STATUS:'/scavengingTask/canTask',

    //详情页面相关接口
    // 任务详情信息
    TASK_DETAIL: '/scavengingTask/detail',
    // 扫描进度接口
    TASK_PROGRESS: '/scavengingTask/progress',
    // 存在漏洞的信息，可以整合的任务详情接口里
    TASK_DETAIL_LEAK: '/scavengingTask/detailLeak',

  },
  /*
   * @action 资产管理
   */
  ASSET_MANAGE:{
    // 资产信息列表
    ASSET_LIST: '/asset/assetList',
    //资产漏洞信息列表
    ASSET_DETAIL_LEAK: '/asset/Leak',
    //查看漏洞详情
    CHECK_DETAIL_LEAK:'/asset/detail',
    //根据任务ID查询资产信息
    TASKID_CHECK_ASSET:'/asset/list',
    //查询厂商名称
    CHECK_PRONAMES_INFO:'/asset/pronames',
    //查询厂商信息
    CHECK_PRODUCTS_INFO:'asset/products',
    //获取所有资产类型
    ASSET_TYPES:'/asset/types',


  },
  /*
   * @action 检查报告管理
   */
  CHECK_MANAGE:{
    // 获取检查报告信息
    GET_REPORT_LIST: '/checkReport/list',
    // 导出报告
    EXPRESS_REPORT: '/checkReport/expressall',
    // 导出一条报告
    EXPRESS_ONE_REPORT: '/checkReport/expressone',
    //检查报告详情接口
    // 报告详情
    REPORT_DETAIL: '/checkReport/detail',

  },
  /*
   * @action 系统管理
   */
  SYSTEM_MANAGE:{
    //用户管理页面
    // 获取用户列表信息
    GET_USER_LIST: '/sysUser/list',
    // 创建用户信息
    ADD_USER_INFO:'/sysUser/add',
    // 编辑用户信息
    EDIT_USER_INFO: '/sysUser/update',
    // 更新密码
    RESET_USER_PASSWORD_INFO: '/sysUser/updatepass',
    // 启用用户状态管理
    CHANGE_RELEASE_USER_STATUS:'/sysUser/relstatus',
    // 禁用用户状态管理
    CHANGE_BAN_USER_STATUS:'/sysUser/banstatus',
    // 删除用户信息
    DEL_USER_INFO: '/sysUser/delete',
    // 批量删除用户信息
    DEL_USER_LIST_INFO: '/sysUser/deleteList',

    //日志管理页面
    //获取搜索日志列表信息
    GET_LOG_LIST: '/sysLog/list',
    //删除日志信息
    DEL_LOG_INFO: '/sysLog/delete',
    //根据id查询日志信息
    CHECK_LOG_INFO: '/sysLog/info',
    //日志导出信息
    EXPORT_LOG_INFO: '/sysLog/export',

    //系统管理管理页面
    // 获取网络信息列表信息
    SYSTEM_CONFIG_LIST: '/sysNet/list',
    // 修改网络信息
    EDIT_SYSTEM_CONFIG:'/sysNet/update',
    // // 实时获取性能信息
    // SYSTEM_PERFORMANCE: '/sysNet/realInfo',
    // // 实时网络信息
    // SYSTEM_NET:'/sysNet/realNet',
    // 重置网络
    RESET_SYSTEM_NET: '/sysNet/restartNet',
    // 重启电脑
    RESTART_COMPUTER: '/sysNet/restartPC',
    // 关机
    SHUTDOWN_COMPUTER:'/sysNet/powerOff',

    // 上传文件
    UPDATE_FILE:'/sys/upload',
    // 系统升级
    SYSTEM_UPDATE:'/sysNet/updateVersion',
    // 版本信息
    COPYRIGHT_INFO:'/sysNet/version',

  },
  /*
   * @action 漏洞挖掘
   */



};
