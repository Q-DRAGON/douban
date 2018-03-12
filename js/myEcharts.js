// 基于准备好的dom，初始化echarts实例
var myBar = echarts.init(document.getElementById('douban-bar'));
var myPie = echarts.init(document.getElementById('douban-pie'));

// 指定图表的配置项和数据
var EChartsBar = function(type, data) {
    console.log('type', type)
    var option = {
        textStyle: {
            color:'#EEEEF0',
            show: true, 
            position: 'inside',
        },
        title: {
            text: '豆瓣 Top 250 制片方统计分析',
            textStyle: {
                color:'#EEEEF0',
            },
        },
        tooltip: {},
        legend: {
            data:['制片方']
        },
        xAxis: {
            data: type,
        },
        yAxis: {},
        series: [{
            name: '数量',
            type: 'bar',
            data: data,
            itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = [
                          '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                           '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                           '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                        ]
                        return colorList[params.dataIndex]
                    },
                },
            },
            label: {
                normal: {
                    show: true, 
                    position: 'top',
                    textStyle: {
                         color: '#EEEEF0',
                     }
                }
            },
        }]
    }

    // 使用刚指定的配置项和数据显示图表。
    myBar.setOption(option);
}

var EChartsPie = function(type, data) {
    var pieData = []
    for (var i = 0; i < type.length; i++) {
        var pieObj = {
            value: data[i],
            name: type[i],
        }
        pieData.push(pieObj)
    }

    var option = {
            textStyle: {
                color:'#EEEEF0',
                show: true, 
                position: 'inside',                 
            },
            title: {
                text: '豆瓣 Top 250 制片方统计分析',
                textStyle: {
                color:'#EEEEF0',
                show: true, 
                position: 'inside',
                },
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                bottom: 10,
                left: 'center',
                bottom: 10,
                data: type,
                textStyle: {
                    color:'#EEEEF0',
                },
            },
            series : [{
                name: '制片国家占有率',
                type: 'pie',
                radius : '65%',
                center: ['50%', '50%'],
                selectedMode: 'single',
                data: pieData,
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },
                    normal: {
                        color: function(params) {
                            // build a color map as your need.
                            var colorList = [
                                '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                                '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                                '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                            ]
                            return colorList[params.dataIndex]
                        },
                    },
                },  
            },
        ]
    }

    // 使用刚指定的配置项和数据显示图表。
    myPie.setOption(option);
        }