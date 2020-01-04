## Useage

### add this to _config.yml

``` yml
langswitch:
  en: Read the English version
  tw: 閱讀中文版
```

### tag plugin usage

```
{% langswitch en [0,1] %}
```

`0` will not use lang as a part of url. 

example:

`{% langswitch en 0 %}` will generate a url: /<post-permalink>
`{% langswitch en %}` will generate a url: /en/<post-permalink>
