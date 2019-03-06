/**
 * Created by candice on 2018/6/9.
 */
const indexManagementComponent = resolve => {
  require(['../../views/index-management/index-management.vue'], resolve)
};

const indexManagementRoutes = [
  {
    path: 'index-management',
    name: 'index-management',
    component:indexManagementComponent
  }
];

export default  indexManagementRoutes
