
/*
2016/12/31

fe18


本节课主要介绍 6 个点
- 爬虫的原理(等上课讲解)
- 普通的爬虫(以豆瓣电影为例)
- 需要登录的爬虫(以知乎为例)
- 爬虫的奥秘(等上课讲解)
- 动态内容的爬取(以知乎的动态内容为例)
- 自定义模块的方法和使用方式

本节课大量使用学过的新概念
稍微注意一下
*/

// 这一行是套路, 给 node.js 用的
// 如果没有这一行, 就没办法使用一些 let const 这样的特性
"use strict"


const request = require('request')
const cheerio = require('cheerio')
const fs = require('fs')

/*
本文件需要安装两个基本的库
request 用于下载网页
cheerio 用于解析网页数据

安装命令如下
npm install request cheerio

本压缩包因为已经自带了这两个库, 所以你不用手动安装了
直接运行即可

课间问题 1
- 上次看了个爬虫教程  把爬虫吹成神了
- 有的人说什么网站有防止爬虫的策略，那是啥
- 所以正则用来干嘛。。。
function isEmail(str){
    var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
    return reg.test(str);
}
- 如何爬所有的 top250 页面


*/

// 定义一个类来保存电影的信息
// 这里只定义了 5 个要保存的数据
// 分别是  电影名 评分 引言 排名 封面图片地址
const Movie = function() {
    this.name = ''
    this.score = 0
    this.quote = ''
    this.ranking = 0
    this.coverUrl = ''
    this.country = ''
}


const log = function() {
    console.log.apply(console, arguments)
}

const newArray = []

// 查重函数
const dereplication = function(value) {
    for(var i = 0; i < newArray.length; i++) { 
      if(newArray[i].ranking == value.ranking) {
        return false
        break
      }
   }
    return true
}

// 冒泡算法排序
const bubbelSort = function(newArray) {
    var temp;
    for(var i=0; i<newArray.length; i++) {
        for(var j=0; j<newArray.length - 1 - i; j++) {
            var a = parseInt(newArray[j].ranking)
            var b = parseInt(newArray[j + 1].ranking)
            if(a > b) {
                var temp = newArray[j];
                newArray[j] = newArray[j+1];
                newArray[j+1] = temp;
            }
        }
    }
    return newArray;
}

// 重组爬虫数据
const recombine = function(array) {
  for(var i = 0; i < array.length; i++) { 
    if(dereplication(array[i])){
      newArray.push(array[i])
    }
  }
  var result = bubbelSort(newArray)
  return result
}

// 切出国家字符串
const sliceForCountry = function(introduction) {
    var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    for(let i = 0; i < introduction.length; i++) {
      if(number.includes(introduction[i])){
        var introductionNew = introduction.slice(i + 5)
            break
      }
    }

    for(let i = 1; i < introductionNew.length; i++) {
      if(introductionNew[i] === '/'){
        var country = introductionNew.slice(2, i - 1)
        break
      }
    }
    return country
}

// Div 抓取
const movieFromDiv = function(div) {
    // 这个函数来从一个电影 div 里面读取电影信息
    const movie = new Movie()
    // 使用 cheerio.load 函数来返回一个可以查询的特殊对象
    const e = cheerio.load(div)

    // 然后就可以使用 querySelector 语法来获取信息了
    // .text() 获取文本信息
    movie.name = e('.title').text()
    movie.score = e('.rating_num').text()
    movie.quote = e('.inq').text()

    const pic = e('.pic')
    movie.ranking = pic.find('em').text()
    // 元素的属性用 .attr('属性名') 确定
    movie.coverUrl = pic.find('img').attr('src')
    var introduction = e('.bd').children().first().text()
    movie.country = sliceForCountry(introduction)
    return movie
}

// 数据汇总数组
var allMovies = []

// 把数据写进 text
const saveMovies = function(movies) {
    allMovies.push(movies)
    console.log(allMovies, 'save allMovies.length', allMovies.length)
    // 这个函数用来把一个保存了所有电影对象的数组保存到文件中
    if(allMovies.length == 250) {
        var movieArr = recombine(allMovies)
        console.log('if 启动 length:', allMovies.length)
        const fs = require('fs')
        const path = 'douban.txt'
        // 第二个参数是 null 不用管
        // 第三个参数是 缩进层次
        const s = JSON.stringify(movieArr, null, 2)
        fs.writeFile(path, s, function(error) {
            if (error !== null) {
                log('*** 写入文件错误', error)
            } else {
                log('--- 保存成功')
            }
        })
    }
}

// 下载封面图片用
// const downloadCovers = function(movies) {
//     for (let i = 0; i < movies.length; i++) {
//         const m = movies[i]
//         const url = m.coverUrl
//         const path = m.name.split('/')[0] + '.jpg'
//         request(url).pipe(fs.createWriteStream(path))
//     }
// }

const moviesFromUrl = function(url) {
    // request 从一个 url 下载数据并调用回调函数
    request(url, function(error, response, body) {
        // 回调函数的三个参数分别是  错误, 响应, 响应数据
        // 检查请求是否成功, statusCode 200 是成功的代码
        if (error === null && response.statusCode == 200) {
            // cheerio.load 用字符串作为参数返回一个可以查询的特殊对象
            // body 就是 html 内容
            const e = cheerio.load(body)
            const movies = []
            // 查询对象的查询语法和 DOM API 中的 querySelector 一样
            const movieDivs = e('.item')
            for(let i = 0; i < movieDivs.length; i++) {
                let element = movieDivs[i]
                // 获取 div 的元素并且用 movieFromDiv 解析
                // 然后加入 movies 数组中
                const div = e(element).html()
                const m = movieFromDiv(div)
                // movies.push(m)
                saveMovies(m)
            }
            // 下载图片用的函数
            // downloadCovers(movies)
        } else {
            log('*** ERROR 请求失败 ', error)
        }
    })
}

const __main = function() {
    // 这是主函数
    // 下载网页, 解析出电影信息, 保存到文件
    var url = 'https://movie.douban.com/top250'
    moviesFromUrl(url)
    // 循环 url 以更换 path, 将每一页的数据拿下
    var pages = 25
    for (var i = 0; i < 10; i++) {
        var url = `https://movie.douban.com/top250?start=${pages}&filter=`
        console.log('url', url)
        moviesFromUrl(url)
        pages+=25
        console.log('pages', pages)

    }
}

// 程序开始的主函数
__main()
