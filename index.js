'use strict'

var hexo = hexo || {};

hexo.extend.tag.register('langswitch', function(args, content) {
  var path = this.path
  var lang = args[0];
  var permalink = '/' + lang + '/' + path;
  return '<a class="btn" href="' + permalink + '"><i class="fa fa-language fa-fw"></i>' + hexo.config.alangbtn[lang] + '</a>';   
}, -999);
