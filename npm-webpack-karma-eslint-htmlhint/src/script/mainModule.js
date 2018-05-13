var myModule = angular.module('myModule', []);

import mainService from "./mainService";
myModule.service("mainService", mainService);

import mainController from"./mainController";
myModule.controller("mainController", mainController);