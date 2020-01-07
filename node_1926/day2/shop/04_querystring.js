const querystring = require('querystring');

// encode 编码
const params = querystring.parse('ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=如何解决node安装错误&oq=node&rsv_pq=f1a3f6c10037924b&rsv_t=0e72euLMxxTaLSiGxs%2FqBpHrrdgVdDwRA3GMa4zVZkhx0vPSslaHCiMsxNA&rqlang=cn&rsv_enter=1&rsv_dl=tb&inputT=19669&rsv_sug3=32&rsv_sug1=18&rsv_sug7=101&rsv_sug2=0&rsv_sug4=22844')

console.log(params);
params.wd = "怎么安装node"

const qs = querystring.stringify(params)

console.log(qs)