(function () {
  'use strict';

  angular
    .module('userprojects')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(menuService) {
    // Set top bar menu items
    menuService.addMenuItem('topbar', {
      title: 'User Projects',
      state: 'userprojects',
      type: 'dropdown',
      roles: ['user']
    });

    // Add the dropdown list item
    menuService.addSubMenuItem('topbar', 'userprojects', {
      title: 'List User Project',
      state: 'userprojects.list'
    });

    // Add the dropdown create item
    menuService.addSubMenuItem('topbar', 'userprojects', {
      title: 'Create User Project',
      state: 'userprojects.create',
      roles: ['admin']
    });

    menuService.addSubMenuItem('topbar', 'admin', {
    title: 'Manage Projects',
    state: 'userprojects.list'

    });

        menuService.addSubMenuItem('topbar', 'admin', {
    title: 'Add New Project',
    state: 'userprojects.create'

    });
  }
}());
