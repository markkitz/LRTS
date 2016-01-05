const React = require('react');
const uniloc = require('uniloc')
import Viewtest from './views/Viewtest.js'
import HomeView from './views/HomeView.js'
import CoursePacksView from './views/CoursePacksView'


var routeInfo = [
  {routeType:'root', routePath:'GET /', view: <HomeView />, title:'Home'  },
    {routeType:'homeRoute', routePath:'GET /home', view: <HomeView />, title:'Home'},
    {routeType:'viewtestRoute', routePath:'GET /viewtest', view: <Viewtest />, title:'View Test'  },
    {routeType:'coursePacksRoute', routePath:'GET /coursepacks', view: <CoursePacksView />, title:'Course Packs'}
];

var routePath = {};
var routeViews = {};
var routeTitles = {};
for (var i = 0; i < routeInfo.length; i++ ){
  routePath[routeInfo[i].routeType] = routeInfo[i].routePath
  routeViews[routeInfo[i].routeType] = routeInfo[i].view
  routeTitles[routeInfo[i].routeType] = routeInfo[i].title
}
var routes = uniloc(routePath);
console.log(routeViews)
module.exports = {routes:routes, routeViews:routeViews, routeTitles:routeTitles}
