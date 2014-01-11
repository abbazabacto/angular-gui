'use strict';

angular.module('toolApp')
  .service('Gui', [function Gui() {
    var gui, folders = {};

    return {
      destroy: function(){
        if(gui){ gui.destroy(); }
        folders = {};
      },
      create: function(){
        gui = new window.dat.GUI({
          autoPlace: false
        });
        angular.element(document).find('body').append(
          angular.element(gui.domElement).addClass('a'));
        return gui;
      },
      folder: function(obj, key, change, folder, parentKey, parseKey){
        var that = this;

        folder = folder || gui || this.create();
        parentKey = parentKey || key;
        parseKey = (parseKey ? parseKey + '.' : '') + key;

        if(angular.isObject(obj[key])){
          folder[key] = folder.addFolder(key);

          Object.keys(obj[key]).forEach(function(keySub){
            that.folder(obj[key], keySub, change, folder[key], parentKey, parseKey);
          });
        }else{
          folder.add(obj, key).onChange(function(){
            change(obj, key, parentKey, parseKey);
          });
        }
      },
      update: function(){
        if(!gui){ return; }
        //TODO: update all or specific controller
        for (var i in gui.__controllers) {
          gui.__controllers[i].updateDisplay();
        }
      },
      settings: function(){
        //TODO: save and get settings from GUI itself not mixed in controller
      }
    };
  }]);
