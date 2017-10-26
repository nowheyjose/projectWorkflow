(function () {
  'use strict';

  angular
    .module('projects', ['geolocation'])
    .controller('ProjectsListController', ProjectsListController);

  ProjectsListController.$inject = ['ProjectsService'];

  function ProjectsListController(ProjectsService, geolocation) {
    var vm = this;

    vm.projects = ProjectsService.query();
  }
}());
