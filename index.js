var md = require('markdown-it')();
var str = "### hello"

// module.exports = function(md, options) {
	
// }
md.block.ruler.after("heading",'h_attr',function(state){
	console.log(state)
	var tokens = state.tokens;
})

md.render(str)