const React = require('react');
const uniloc = require('uniloc')
import Viewtest from './views/Viewtest.js'
import HomeView from './views/HomeView.js'
import CoursePackListingView from './views/CoursePackListingView'
import CoursePackView from './views/CoursePackView'
import CourseListingView from './views/CourseListingView'
import CourseView from './views/CourseView'

var routeInfo = [
    {routeType:'root', routePath:'GET /', view: <HomeView />, title:'Home', showSearchBar:true  },
    {routeType:'homeRoute', routePath:'GET /home', view: <HomeView />, title:'Home', showSearchBar:true },
    {routeType:'coursePacksRoute', routePath:'GET /coursepacks', view: <CoursePackListingView />, title:'Course Packs', showSearchBar:true },
    {routeType:'coursePackRoute', routePath:'GET /coursepack/:id', view: <CoursePackView />, title:'Course Pack', showSearchBar:false },
    {routeType:'coursesRoute', routePath:'GET /courses', view: <CourseListingView />, title:'Courses', showSearchBar:true },
    {routeType:'courseRoute', routePath:'GET /course/:id', view: <CourseView />, title:'Course', showSearchBar:false }
];

var routePath = {};
var routeViews = {};
var routeTitles = {};
var showSearchBar = {};

for (var i = 0; i < routeInfo.length; i++ ){
  routePath[routeInfo[i].routeType] = routeInfo[i].routePath
  routeViews[routeInfo[i].routeType] = routeInfo[i].view
  routeTitles[routeInfo[i].routeType] = routeInfo[i].title
  showSearchBar[routeInfo[i].routeType] = routeInfo[i].showSearchBar
}
var routes = uniloc(routePath);

module.exports = {uniloc:routes, routeViews, routeTitles, showSearchBar}
