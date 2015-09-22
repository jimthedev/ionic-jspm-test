import angular from 'angular'
import 'ionic'
import { ionic } from 'ionic/js/ionic'

console.log('angular', angular)
console.log('ionic', ionic)

// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function() {
  ionic.Platform.ready(function() {
    console.log('device ready')
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true)
    }
    if(window.StatusBar) {
      StatusBar.styleDefault()
    }
  })
})