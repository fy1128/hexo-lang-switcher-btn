'use strict'

var hexo = hexo || {};

hexo.extend.tag.register('langswitch', function(args, content) {
  var path = this.path
  var lang = args[0];
  var permalink = '';
  
  if (args[1] != undefined && args[1] == 0) {
    permalink = '/' + path;
  } else {
    permalink = '/' + lang + '/' + path;
  }
  
  return '<a class="btn" href="' + permalink + '"><i class="fa fa-language fa-fw"></i>' + hexo.config.langswitch[lang] + '</a>';   
}, -999);
