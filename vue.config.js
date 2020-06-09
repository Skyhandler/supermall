module.exports={
    configureWebpack:{
        resolve:{
            alias:{//路径别名设置
                'assets':'@/assets',
                'components':'@/components',
                'network':'@/network',
                'common':'@/common',
                'store':'@/store',
                'views':'@/views',
            }
        },
    }
}