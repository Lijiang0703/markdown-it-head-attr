>  plugin for markdown-it markdown parser,add heading attr id and class

### Install
---
node.js:

```
npm install markdown-it-head-attr --save
```


### API
----
```
var md = require('markdown-it')()
var headAttr = require('markdown-it-head-attr')

md.use(headAttr)
```

### Example:
---

* add class

	```
	var str = '### Hello World {.head-class}'
	var md = require('markdown-it')()
	var headAttr = require('markdown-it-head-attr')

	md.use(headAttr)
	md.render()  //<h3 class="head-class">Hello World</h3>
	```

* add Id 

	```
	var str = '### Hello World {#head-id}'
	var md = require('markdown-it')()
	var headAttr = require('markdown-it-head-attr')
	
	md.use(headAttr)
	md.render()  //<h3 id="head-id">Hello World</h3>
	```


### License
---
[MIT](https://github.com/markdown-it/markdown-it-container/blob/master/LICENSE)