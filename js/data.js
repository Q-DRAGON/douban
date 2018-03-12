
// 重组数据
var dataReconstitution = function(array) {
  var newArray =  []
  for (var i = 0; i < array.length; i++) {  
      var movies = {
        "movieName": array[i].name,
        "movieCountry": array[i].country,
        "movieScore": array[i].score,
      }
      newArray.push(movies)
  }
  return newArray
}

// 统计各国家数目
var countryStatistics = function(newArray) {
  var countryObj = {
      "中国": 0,
      "日本": 0,
      "韩国": 0,
      "美国": 0,
      "意大利": 0,
      "法国": 0,
      "印度": 0,
      "德国": 0,
      "英国": 0,
      "伊朗": 0,
      "西班牙": 0,
      "泰国": 0, 
      "瑞典": 0,
      "爱尔兰": 0,
      "多国合资": 0,
  }

  for(var i = 0; i < newArray.length; i++) {  
    if(newArray[i].movieCountry === '美国') {
        countryObj['美国'] += 1
    } else if (newArray[i].movieCountry === '日本'){
        countryObj['日本'] += 1   
    } else if (newArray[i].movieCountry === '韩国'){
        countryObj['韩国'] += 1   
    } else if (newArray[i].movieCountry === '意大利'){
        countryObj['意大利'] += 1   
    } else if (newArray[i].movieCountry === '法国'){
        countryObj['法国'] += 1   
    } else if (newArray[i].movieCountry === '印度'){
        countryObj['印度'] += 1   
    } else if (newArray[i].movieCountry === '德国'){
        countryObj['德国'] += 1   
    } else if (newArray[i].movieCountry === '英国'){
        countryObj['英国'] += 1   
    } else if (newArray[i].movieCountry === '伊朗'){
        countryObj['伊朗'] += 1   
    } else if (newArray[i].movieCountry === '西班牙'){
        countryObj['西班牙'] += 1   
    } else if (newArray[i].movieCountry === '泰国'){
        countryObj['泰国'] += 1   
    } else if (newArray[i].movieCountry === '瑞典'){
        countryObj['瑞典'] += 1   
    } else if (newArray[i].movieCountry === '爱尔兰'){
        countryObj['爱尔兰'] += 1   
    } else if (newArray[i].movieCountry === '中国大陆 香港' || newArray[i].movieCountry === '香港 中国大陆' || newArray[i].movieCountry === "中国大陆" || newArray[i].movieCountry === "香港 台湾" || newArray[i].movieCountry === "台湾"){
        countryObj['中国'] += 1   
    } else {
      countryObj['多国合资'] += 1 
    }
  }
  return countryObj
}

// 分组以便 Echarts 图标生成
var grouping = function(countryObj) {
  var country = []
  var countryData = []
    for(var countryName in countryObj) {
        country.push(countryName)
        countryData.push(countryObj[countryName])
    }
    EChartsBar(country, countryData)
    EChartsPie(country, countryData)
}

var _main = function() {
  var array = [
    {
      "name": "肖申克的救赎 / The Shawshank Redemption",
      "score": "9.6",
      "quote": "希望让人自由。",
      "ranking": "1",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p480747492.jpg",
      "country": "美国"
    },
    {
      "name": "霸王别姬",
      "score": "9.5",
      "quote": "风华绝代。",
      "ranking": "2",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1910813120.jpg",
      "country": "中国大陆 香港"
    },
    {
      "name": "这个杀手不太冷 / Léon",
      "score": "9.4",
      "quote": "怪蜀黍和小萝莉不得不说的故事。",
      "ranking": "3",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p511118051.jpg",
      "country": "法国"
    },
    {
      "name": "阿甘正传 / Forrest Gump",
      "score": "9.4",
      "quote": "一部美国近现代史。",
      "ranking": "4",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p510876377.jpg",
      "country": "美国"
    },
    {
      "name": "美丽人生 / La vita è bella",
      "score": "9.5",
      "quote": "最美的谎言。",
      "ranking": "5",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p510861873.jpg",
      "country": "意大利"
    },
    {
      "name": "千与千寻 / 千と千尋の神隠し",
      "score": "9.2",
      "quote": "最好的宫崎骏，最好的久石让。 ",
      "ranking": "6",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1606727862.jpg",
      "country": "日本"
    },
    {
      "name": "泰坦尼克号 / Titanic",
      "score": "9.2",
      "quote": "失去的才是永恒的。 ",
      "ranking": "7",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p457760035.jpg",
      "country": "美国"
    },
    {
      "name": "辛德勒的名单 / Schindler's List",
      "score": "9.4",
      "quote": "拯救一个人，就是拯救整个世界。",
      "ranking": "8",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p492406163.jpg",
      "country": "美国"
    },
    {
      "name": "盗梦空间 / Inception",
      "score": "9.3",
      "quote": "诺兰给了我们一场无法盗取的梦。",
      "ranking": "9",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p513344864.jpg",
      "country": "美国 英国"
    },
    {
      "name": "机器人总动员 / WALL·E",
      "score": "9.3",
      "quote": "小瓦力，大人生。",
      "ranking": "10",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1461851991.jpg",
      "country": "美国"
    },
    {
      "name": "海上钢琴师 / La leggenda del pianista sull'oceano",
      "score": "9.2",
      "quote": "每个人都要走一条自己坚定了的路，就算是粉身碎骨。 ",
      "ranking": "11",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p511146807.jpg",
      "country": "意大利"
    },
    {
      "name": "三傻大闹宝莱坞 / 3 Idiots",
      "score": "9.2",
      "quote": "英俊版憨豆，高情商版谢耳朵。",
      "ranking": "12",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p579729551.jpg",
      "country": "印度"
    },
    {
      "name": "忠犬八公的故事 / Hachi: A Dog's Tale",
      "score": "9.2",
      "quote": "永远都不能忘记你所爱的人。",
      "ranking": "13",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p524964016.jpg",
      "country": "美国 英国"
    },
    {
      "name": "放牛班的春天 / Les choristes",
      "score": "9.2",
      "quote": "天籁一般的童声，是最接近上帝的存在。 ",
      "ranking": "14",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1910824951.jpg",
      "country": "法国 瑞士 德国"
    },
    {
      "name": "大话西游之大圣娶亲 / 西遊記大結局之仙履奇緣",
      "score": "9.2",
      "quote": "一生所爱。",
      "ranking": "15",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2455050536.jpg",
      "country": "香港 中国大陆"
    },
    {
      "name": "教父 / The Godfather",
      "score": "9.2",
      "quote": "千万不要记恨你的对手，这样会让你失去理智。",
      "ranking": "16",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2190556185.jpg",
      "country": "美国"
    },
    {
      "name": "龙猫 / となりのトトロ",
      "score": "9.1",
      "quote": "人人心中都有个龙猫，童年就永远不会消失。",
      "ranking": "17",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p537668599.jpg",
      "country": "日本"
    },
    {
      "name": "楚门的世界 / The Truman Show",
      "score": "9.1",
      "quote": "如果再也不能见到你，祝你早安，午安，晚安。",
      "ranking": "18",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p479682972.jpg",
      "country": "美国"
    },
    {
      "name": "熔炉 / 도가니",
      "score": "9.2",
      "quote": "我们一路奋战不是为了改变世界，而是为了不让世界改变我们。",
      "ranking": "19",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1363250216.jpg",
      "country": "韩国"
    },
    {
      "name": "乱世佳人 / Gone with the Wind",
      "score": "9.2",
      "quote": "Tomorrow is another day.",
      "ranking": "20",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1963126880.jpg",
      "country": "美国"
    },
    {
      "name": "星际穿越 / Interstellar",
      "score": "9.2",
      "quote": "爱是一种力量，让我们超越时空感知它的存在。",
      "ranking": "21",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2206088801.jpg",
      "country": "美国 英国 加拿大 冰岛"
    },
    {
      "name": "触不可及 / Intouchables",
      "score": "9.1",
      "quote": "满满温情的高雅喜剧。",
      "ranking": "22",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1454261925.jpg",
      "country": "法国"
    },
    {
      "name": "无间道 / 無間道",
      "score": "9.0",
      "quote": "香港电影史上永不过时的杰作。",
      "ranking": "23",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2233971046.jpg",
      "country": "香港"
    },
    {
      "name": "当幸福来敲门 / The Pursuit of Happyness",
      "score": "8.9",
      "quote": "平民励志片。 ",
      "ranking": "24",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1312700628.jpg",
      "country": "美国"
    },
    {
      "name": "天堂电影院 / Nuovo Cinema Paradiso",
      "score": "9.1",
      "quote": "那些吻戏，那些青春，都在影院的黑暗里被泪水冲刷得无比清晰。",
      "ranking": "25",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1910901025.jpg",
      "country": "意大利 法国"
    },
    {
      "name": "怦然心动 / Flipped",
      "score": "8.9",
      "quote": "真正的幸福是来自内心深处。",
      "ranking": "26",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p663036666.jpg",
      "country": "美国"
    },
    {
      "name": "十二怒汉 / 12 Angry Men",
      "score": "9.4",
      "quote": "1957年的理想主义。 ",
      "ranking": "27",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2173577632.jpg",
      "country": "美国"
    },
    {
      "name": "搏击俱乐部 / Fight Club",
      "score": "9.0",
      "quote": "邪恶与平庸蛰伏于同一个母体，在特定的时间互相对峙。",
      "ranking": "28",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1910926158.jpg",
      "country": "美国 德国"
    },
    {
      "name": "少年派的奇幻漂流 / Life of Pi",
      "score": "9.0",
      "quote": "瑰丽壮观、无人能及的冒险之旅。",
      "ranking": "29",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1784592701.jpg",
      "country": "美国 台湾 英国 加拿大"
    },
    {
      "name": "指环王3：王者无敌 / The Lord of the Rings: The Return of the King",
      "score": "9.1",
      "quote": "史诗的终章。",
      "ranking": "30",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1910825503.jpg",
      "country": "美国 新西兰"
    },
    {
      "name": "鬼子来了",
      "score": "9.2",
      "quote": "对敌人的仁慈，就是对自己残忍。",
      "ranking": "31",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1181775734.jpg",
      "country": "中国大陆"
    },
    {
      "name": "蝙蝠侠：黑暗骑士 / The Dark Knight",
      "score": "9.0",
      "quote": "无尽的黑暗。",
      "ranking": "32",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p462657443.jpg",
      "country": "美国 英国"
    },
    {
      "name": "活着",
      "score": "9.1",
      "quote": "张艺谋最好的电影。",
      "ranking": "33",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2513253791.jpg",
      "country": "中国大陆 香港"
    },
    {
      "name": "天空之城 / 天空の城ラピュタ",
      "score": "9.0",
      "quote": "对天空的追逐，永不停止。 ",
      "ranking": "34",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1446261379.jpg",
      "country": "日本"
    },
    {
      "name": "罗马假日 / Roman Holiday",
      "score": "8.9",
      "quote": "爱情哪怕只有一天。",
      "ranking": "35",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2189265085.jpg",
      "country": "美国"
    },
    {
      "name": "大话西游之月光宝盒 / 西遊記第壹佰零壹回之月光寶盒",
      "score": "8.9",
      "quote": "旷古烁今。",
      "ranking": "36",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1280323646.jpg",
      "country": "香港 中国大陆"
    },
    {
      "name": "飞屋环游记 / Up",
      "score": "8.9",
      "quote": "最后那些最无聊的事情，才是最值得怀念的。 ",
      "ranking": "37",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p485887754.jpg",
      "country": "美国"
    },
    {
      "name": "疯狂动物城 / Zootopia",
      "score": "9.2",
      "quote": "迪士尼给我们营造的乌托邦就是这样，永远善良勇敢，永远出乎意料。",
      "ranking": "38",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2315672647.jpg",
      "country": "美国"
    },
    {
      "name": "窃听风暴 / Das Leben der Anderen",
      "score": "9.1",
      "quote": "别样人生。",
      "ranking": "39",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1808872109.jpg",
      "country": "德国"
    },
    {
      "name": "两杆大烟枪 / Lock, Stock and Two Smoking Barrels",
      "score": "9.1",
      "quote": "4个臭皮匠顶个诸葛亮，盖·里奇果然不是盖的。",
      "ranking": "40",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p792443418.jpg",
      "country": "英国"
    },
    {
      "name": "飞越疯人院 / One Flew Over the Cuckoo's Nest",
      "score": "9.0",
      "quote": "自由万岁。",
      "ranking": "41",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p792238287.jpg",
      "country": "美国"
    },
    {
      "name": "控方证人 / Witness for the Prosecution",
      "score": "9.6",
      "quote": "比利·怀德满分作品。",
      "ranking": "42",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1505392928.jpg",
      "country": "美国"
    },
    {
      "name": "闻香识女人 / Scent of a Woman",
      "score": "8.9",
      "quote": "史上最美的探戈。",
      "ranking": "43",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p925123037.jpg",
      "country": "美国"
    },
    {
      "name": "海豚湾 / The Cove",
      "score": "9.3",
      "quote": "海豚的微笑，是世界上最高明的伪装。",
      "ranking": "44",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p455222172.jpg",
      "country": "美国"
    },
    {
      "name": "哈尔的移动城堡 / ハウルの動く城",
      "score": "8.9",
      "quote": "带着心爱的人在天空飞翔。",
      "ranking": "45",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2174346180.jpg",
      "country": "日本"
    },
    {
      "name": "V字仇杀队 / V for Vendetta",
      "score": "8.8",
      "quote": "一张面具背后的理想与革命。",
      "ranking": "46",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1465235231.jpg",
      "country": "美国 英国 德国"
    },
    {
      "name": "辩护人 / 변호인",
      "score": "9.1",
      "quote": "电影的现实意义大过电影本身。",
      "ranking": "47",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2158166535.jpg",
      "country": "韩国"
    },
    {
      "name": "死亡诗社 / Dead Poets Society",
      "score": "8.9",
      "quote": "当一个死水般的体制内出现一个活跃的变数时，所有的腐臭都站在了光明的对面。",
      "ranking": "48",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1910824340.jpg",
      "country": "美国"
    },
    {
      "name": "教父2 / The Godfather: Part Ⅱ",
      "score": "9.1",
      "quote": "优雅的孤独。",
      "ranking": "49",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2194138787.jpg",
      "country": "美国"
    },
    {
      "name": "美丽心灵 / A Beautiful Mind",
      "score": "8.9",
      "quote": "爱是一切逻辑和原由。",
      "ranking": "50",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1665997400.jpg",
      "country": "美国"
    },
    {
      "name": "指环王2：双塔奇兵 / The Lord of the Rings: The Two Towers",
      "score": "9.0",
      "quote": "承前启后的史诗篇章。",
      "ranking": "51",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p909265336.jpg",
      "country": "美国 新西兰"
    },
    {
      "name": "指环王1：魔戒再现 / The Lord of the Rings: The Fellowship of the Ring",
      "score": "8.9",
      "quote": "传说的开始。",
      "ranking": "52",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1354436051.jpg",
      "country": "新西兰 美国"
    },
    {
      "name": "情书 / Love Letter",
      "score": "8.8",
      "quote": "暗恋的极致。",
      "ranking": "53",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p449897379.jpg",
      "country": "日本"
    },
    {
      "name": "饮食男女 / 飲食男女",
      "score": "9.1",
      "quote": "人生不能像做菜，把所有的料都准备好了才下锅。",
      "ranking": "54",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1910899751.jpg",
      "country": "台湾 美国"
    },
    {
      "name": "美国往事 / Once Upon a Time in America",
      "score": "9.1",
      "quote": "往事如烟，无处祭奠。",
      "ranking": "55",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p477229647.jpg",
      "country": "意大利 美国"
    },
    {
      "name": "狮子王 / The Lion King",
      "score": "8.9",
      "quote": "动物版《哈姆雷特》。",
      "ranking": "56",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p726659067.jpg",
      "country": "美国"
    },
    {
      "name": "天使爱美丽 / Le fabuleux destin d'Amélie Poulain",
      "score": "8.7",
      "quote": "法式小清新。 ",
      "ranking": "57",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p803896904.jpg",
      "country": "法国 德国"
    },
    {
      "name": "钢琴家 / The Pianist",
      "score": "9.0",
      "quote": "音乐能化解仇恨。",
      "ranking": "58",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p792484461.jpg",
      "country": "法国 德国 英国 波兰"
    },
    {
      "name": "七宗罪 / Se7en",
      "score": "8.7",
      "quote": "警察抓小偷，老鼠玩死猫。",
      "ranking": "59",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p457631605.jpg",
      "country": "美国"
    },
    {
      "name": "被嫌弃的松子的一生 / 嫌われ松子の一生",
      "score": "8.9",
      "quote": "以戏谑来戏谑戏谑。",
      "ranking": "60",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p453723669.jpg",
      "country": "日本"
    },
    {
      "name": "小鞋子 / بچههای آسمان",
      "score": "9.2",
      "quote": "奔跑的孩子是天使。",
      "ranking": "61",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2173580603.jpg",
      "country": "伊朗"
    },
    {
      "name": "素媛 / 소원",
      "score": "9.1",
      "quote": "受过伤害的人总是笑得最开心，因为他们不愿意让身边的人承受一样的痛苦。",
      "ranking": "62",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2118532944.jpg",
      "country": "韩国"
    },
    {
      "name": "致命魔术 / The Prestige",
      "score": "8.8",
      "quote": "孪生蝙蝠侠大战克隆金刚狼。",
      "ranking": "63",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p480383375.jpg",
      "country": "美国 英国"
    },
    {
      "name": "摔跤吧！爸爸 / Dangal",
      "score": "9.1",
      "quote": "你不是在为你一个人战斗，你要让千千万万的女性看到女生并不是只能相夫教子。",
      "ranking": "64",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2457983084.jpg",
      "country": "印度"
    },
    {
      "name": "勇敢的心 / Braveheart",
      "score": "8.8",
      "quote": "史诗大片的典范。",
      "ranking": "65",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1374546770.jpg",
      "country": "美国"
    },
    {
      "name": "音乐之声 / The Sound of Music",
      "score": "8.9",
      "quote": "用音乐化解仇恨，让歌声串起美好。",
      "ranking": "66",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p453788577.jpg",
      "country": "美国"
    },
    {
      "name": "剪刀手爱德华 / Edward Scissorhands",
      "score": "8.7",
      "quote": "浪漫忧郁的成人童话。",
      "ranking": "67",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p480956937.jpg",
      "country": "美国"
    },
    {
      "name": "本杰明·巴顿奇事 / The Curious Case of Benjamin Button",
      "score": "8.7",
      "quote": "在时间之河里感受溺水之苦。",
      "ranking": "68",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2192535722.jpg",
      "country": "美国"
    },
    {
      "name": "低俗小说 / Pulp Fiction",
      "score": "8.8",
      "quote": "故事的高级讲法。",
      "ranking": "69",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1910902213.jpg",
      "country": "美国"
    },
    {
      "name": "看不见的客人 / Contratiempo",
      "score": "8.8",
      "quote": "你以为你以为的就是你以为的。",
      "ranking": "70",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2498971355.jpg",
      "country": "西班牙"
    },
    {
      "name": "西西里的美丽传说 / Malèna",
      "score": "8.7",
      "quote": "美丽无罪。",
      "ranking": "71",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p792400696.jpg",
      "country": "意大利 美国"
    },
    {
      "name": "黑客帝国 / The Matrix",
      "score": "8.8",
      "quote": "视觉革命。",
      "ranking": "72",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1910908765.jpg",
      "country": "美国 澳大利亚"
    },
    {
      "name": "拯救大兵瑞恩 / Saving Private Ryan",
      "score": "8.9",
      "quote": "美利坚精神输出大片No1.",
      "ranking": "73",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1014542496.jpg",
      "country": "美国"
    },
    {
      "name": "沉默的羔羊 / The Silence of the Lambs",
      "score": "8.7",
      "quote": "安东尼·霍普金斯的顶级表演。",
      "ranking": "74",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1593414327.jpg",
      "country": "美国"
    },
    {
      "name": "入殓师 / おくりびと",
      "score": "8.8",
      "quote": "死可能是一道门，逝去并不是终结，而是超越，走向下一程。",
      "ranking": "75",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p594972928.jpg",
      "country": "日本"
    },
    {
      "name": "蝴蝶效应 / The Butterfly Effect",
      "score": "8.7",
      "quote": "人的命运被自己瞬间的抉择改变。",
      "ranking": "76",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2209066019.jpg",
      "country": "美国 加拿大"
    },
    {
      "name": "玛丽和马克思 / Mary and Max",
      "score": "8.9",
      "quote": "你是我最好的朋友，你是我唯一的朋友 。",
      "ranking": "77",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1820615077.jpg",
      "country": "澳大利亚"
    },
    {
      "name": "让子弹飞",
      "score": "8.7",
      "quote": "你给我翻译翻译，神马叫做TMD的惊喜。",
      "ranking": "78",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1512562287.jpg",
      "country": "中国大陆 香港"
    },
    {
      "name": "春光乍泄 / 春光乍洩",
      "score": "8.8",
      "quote": "爱情纠缠，男女一致。",
      "ranking": "79",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p465939041.jpg",
      "country": "香港 日本 韩国"
    },
    {
      "name": "大闹天宫",
      "score": "9.2",
      "quote": "经典之作，历久弥新。",
      "ranking": "80",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2184505167.jpg",
      "country": "大陆)"
    },
    {
      "name": "心灵捕手 / Good Will Hunting",
      "score": "8.8",
      "quote": "人生中应该拥有这样的一段豁然开朗。",
      "ranking": "81",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p480965695.jpg",
      "country": "美国"
    },
    {
      "name": "幽灵公主 / もののけ姫",
      "score": "8.8",
      "quote": "人与自然的战争史诗。",
      "ranking": "82",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1613191025.jpg",
      "country": "日本"
    },
    {
      "name": "阳光灿烂的日子",
      "score": "8.8",
      "quote": "一场华丽的意淫。",
      "ranking": "83",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p967457079.jpg",
      "country": "中国大陆 香港"
    },
    {
      "name": "第六感 / The Sixth Sense",
      "score": "8.8",
      "quote": "深入内心的恐怖，出人意料的结局。",
      "ranking": "84",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2220184425.jpg",
      "country": "美国"
    },
    {
      "name": "末代皇帝 / The Last Emperor",
      "score": "8.9",
      "quote": "“不要跟我比惨，我比你更惨”再适合这部电影不过了。",
      "ranking": "85",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p452088641.jpg",
      "country": "意大利 中国大陆 英国 法国"
    },
    {
      "name": "重庆森林 / 重慶森林",
      "score": "8.7",
      "quote": "寂寞没有期限。",
      "ranking": "86",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p792381411.jpg",
      "country": "香港"
    },
    {
      "name": "禁闭岛 / Shutter Island",
      "score": "8.6",
      "quote": "昔日翩翩少年，今日大腹便便。",
      "ranking": "87",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1832875827.jpg",
      "country": "美国"
    },
    {
      "name": "大鱼 / Big Fish",
      "score": "8.7",
      "quote": "抱着梦想而活着的人是幸福的，怀抱梦想而死去的人是不朽的。",
      "ranking": "88",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p692813374.jpg",
      "country": "美国"
    },
    {
      "name": "狩猎 / Jagten",
      "score": "9.0",
      "quote": "人言可畏。",
      "ranking": "89",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1546987967.jpg",
      "country": "丹麦 瑞典"
    },
    {
      "name": "布达佩斯大饭店 / The Grand Budapest Hotel",
      "score": "8.8",
      "quote": "小清新的故事里注入了大历史的情怀。",
      "ranking": "90",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2178872593.jpg",
      "country": "美国 德国 英国"
    },
    {
      "name": "射雕英雄传之东成西就 / 射鵰英雄傳之東成西就",
      "score": "8.7",
      "quote": "百看不厌。 ",
      "ranking": "91",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1993903133.jpg",
      "country": "香港"
    },
    {
      "name": "甜蜜蜜",
      "score": "8.8",
      "quote": "相逢只要一瞬间，等待却像是一辈子。",
      "ranking": "92",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1962839732.jpg",
      "country": "香港"
    },
    {
      "name": "致命ID / Identity",
      "score": "8.6",
      "quote": "最不可能的那个人永远是最可能的。",
      "ranking": "93",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p453720880.jpg",
      "country": "美国"
    },
    {
      "name": "哈利·波特与魔法石 / Harry Potter and the Sorcerer's Stone",
      "score": "8.7",
      "quote": "童话世界的开端。",
      "ranking": "94",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p804947166.jpg",
      "country": "美国 英国"
    },
    {
      "name": "一一",
      "score": "8.9",
      "quote": "我们都曾经是一一。",
      "ranking": "95",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2119675128.jpg",
      "country": "台湾 日本"
    },
    {
      "name": "阳光姐妹淘 / 써니",
      "score": "8.8",
      "quote": "再多各自牛逼的时光，也比不上一起傻逼的岁月。 ",
      "ranking": "96",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1374786017.jpg",
      "country": "韩国"
    },
    {
      "name": "断背山 / Brokeback Mountain",
      "score": "8.6",
      "quote": "每个人心中都有一座断背山。",
      "ranking": "97",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p513535588.jpg",
      "country": "美国 加拿大"
    },
    {
      "name": "告白",
      "score": "8.7",
      "quote": "没有一人完全善，也没有一人完全恶。",
      "ranking": "98",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p689520756.jpg",
      "country": "日本"
    },
    {
      "name": "上帝之城 / Cidade de Deus",
      "score": "8.9",
      "quote": "被上帝抛弃了的上帝之城。",
      "ranking": "99",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p455677490.jpg",
      "country": "巴西 法国"
    },
    {
      "name": "猫鼠游戏 / Catch Me If You Can",
      "score": "8.7",
      "quote": "骗子大师和执著警探的你追我跑故事。 ",
      "ranking": "100",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p453924541.jpg",
      "country": "美国 加拿大"
    },
    {
      "name": "加勒比海盗 / Pirates of the Caribbean: The Curse of the Black Pearl",
      "score": "8.6",
      "quote": "约翰尼·德普的独角戏。",
      "ranking": "101",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1596085504.jpg",
      "country": "美国"
    },
    {
      "name": "摩登时代 / Modern Times",
      "score": "9.2",
      "quote": "大时代中的人生，小人物的悲喜。",
      "ranking": "102",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2173707976.jpg",
      "country": "美国"
    },
    {
      "name": "阿凡达 / Avatar",
      "score": "8.6",
      "quote": "绝对意义上的美轮美奂。",
      "ranking": "103",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p492458287.jpg",
      "country": "美国 英国"
    },
    {
      "name": "穿条纹睡衣的男孩 / The Boy in the Striped Pajamas",
      "score": "8.9",
      "quote": "尽管有些不切实际的幻想，这部电影依旧是一部感人肺腑的佳作。",
      "ranking": "104",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1473670352.jpg",
      "country": "英国 美国"
    },
    {
      "name": "爱在黎明破晓前 / Before Sunrise",
      "score": "8.7",
      "quote": "缘分是个连绵词，最美不过一瞬。",
      "ranking": "105",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p452582315.jpg",
      "country": "美国 奥地利 瑞士"
    },
    {
      "name": "风之谷 / 風の谷のナウシカ",
      "score": "8.8",
      "quote": "动画片的圣经。",
      "ranking": "106",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1917567652.jpg",
      "country": "日本"
    },
    {
      "name": "消失的爱人 / Gone Girl",
      "score": "8.7",
      "quote": "年度最佳date movie。",
      "ranking": "107",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2221768894.jpg",
      "country": "美国"
    },
    {
      "name": "爱在日落黄昏时 / Before Sunset",
      "score": "8.7",
      "quote": "九年后的重逢是世俗和责任的交叠，没了悸动和青涩，沧桑而温暖。",
      "ranking": "108",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1910924055.jpg",
      "country": "美国"
    },
    {
      "name": "侧耳倾听 / 耳をすませば",
      "score": "8.8",
      "quote": "少女情怀总是诗。",
      "ranking": "109",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p456692072.jpg",
      "country": "日本"
    },
    {
      "name": "超脱 / Detachment",
      "score": "8.8",
      "quote": "穷尽一生，我们要学会的，不过是彼此拥抱。",
      "ranking": "110",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1305562621.jpg",
      "country": "美国"
    },
    {
      "name": "倩女幽魂",
      "score": "8.6",
      "quote": "两张绝世的脸。 ",
      "ranking": "111",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2414157745.jpg",
      "country": "香港"
    },
    {
      "name": "红辣椒 / パプリカ",
      "score": "8.9",
      "quote": "梦的勾结。",
      "ranking": "112",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p672363704.jpg",
      "country": "日本"
    },
    {
      "name": "萤火虫之墓 / 火垂るの墓",
      "score": "8.7",
      "quote": "幸福是生生不息，却难以触及的远。 ",
      "ranking": "113",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1157334208.jpg",
      "country": "日本"
    },
    {
      "name": "恐怖直播 / 더 테러 라이브",
      "score": "8.7",
      "quote": "恐怖分子的“秋菊打官司”。",
      "ranking": "114",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2016930906.jpg",
      "country": "韩国"
    },
    {
      "name": "驯龙高手 / How to Train Your Dragon",
      "score": "8.7",
      "quote": "和谐的生活离不开摸头与被摸头。",
      "ranking": "115",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p450042258.jpg",
      "country": "美国"
    },
    {
      "name": "菊次郎的夏天 / 菊次郎の夏",
      "score": "8.7",
      "quote": "从没见过那么流氓的温柔，从没见过那么温柔的流氓。",
      "ranking": "116",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p751835224.jpg",
      "country": "日本"
    },
    {
      "name": "幸福终点站 / The Terminal",
      "score": "8.6",
      "quote": "有时候幸福需要等一等。 ",
      "ranking": "117",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p792263736.jpg",
      "country": "美国"
    },
    {
      "name": "岁月神偷 / 歲月神偷",
      "score": "8.6",
      "quote": "岁月流逝，来日可追。",
      "ranking": "118",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p456666151.jpg",
      "country": "香港 中国大陆"
    },
    {
      "name": "借东西的小人阿莉埃蒂 / 借りぐらしのアリエッティ",
      "score": "8.7",
      "quote": "曾经的那段美好会沉淀为一辈子的记忆。",
      "ranking": "119",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p617533616.jpg",
      "country": "日本"
    },
    {
      "name": "神偷奶爸 / Despicable Me",
      "score": "8.5",
      "quote": "Mr. I Don't Care其实也有Care的时候。",
      "ranking": "120",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p792776858.jpg",
      "country": "美国 法国"
    },
    {
      "name": "七武士 / 七人の侍",
      "score": "9.2",
      "quote": "时代悲歌。",
      "ranking": "121",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p647099823.jpg",
      "country": "日本"
    },
    {
      "name": "小森林 夏秋篇 / リトル・フォレスト 夏・秋",
      "score": "8.9",
      "quote": "那些静得只能听见呼吸的日子里，你明白孤独即生活。",
      "ranking": "122",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2221319641.jpg",
      "country": "日本"
    },
    {
      "name": "喜剧之王 / 喜劇之王",
      "score": "8.5",
      "quote": "我是一个演员。",
      "ranking": "123",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1043597424.jpg",
      "country": "香港"
    },
    {
      "name": "海洋 / Océans",
      "score": "9.0",
      "quote": "大海啊，不全是水。",
      "ranking": "124",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p497010372.jpg",
      "country": "法国 瑞士 西班牙 美国 阿联酋"
    },
    {
      "name": "真爱至上 / Love Actually",
      "score": "8.5",
      "quote": "爱，是个动词。",
      "ranking": "125",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p475600770.jpg",
      "country": "英国 美国 法国"
    },
    {
      "name": "杀人回忆 / 살인의 추억",
      "score": "8.6",
      "quote": "关于连环杀人悬案的集体回忆。",
      "ranking": "126",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p480225538.jpg",
      "country": "韩国"
    },
    {
      "name": "电锯惊魂 / Saw",
      "score": "8.7",
      "quote": "真相就在眼前。",
      "ranking": "127",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2163771304.jpg",
      "country": "美国"
    },
    {
      "name": "谍影重重3 / The Bourne Ultimatum",
      "score": "8.7",
      "quote": "像吃了苏打饼一样干脆的电影。",
      "ranking": "128",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p792223507.jpg",
      "country": "美国 德国"
    },
    {
      "name": "贫民窟的百万富翁 / Slumdog Millionaire",
      "score": "8.5",
      "quote": "上帝之城+猜火车+阿甘正传+开心辞典=山寨富翁",
      "ranking": "129",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p470476887.jpg",
      "country": "英国 美国"
    },
    {
      "name": "雨人 / Rain Man",
      "score": "8.6",
      "quote": "生活在自己的世界里，也可以让周围的人显得可笑和渺小。",
      "ranking": "130",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p942376281.jpg",
      "country": "美国"
    },
    {
      "name": "记忆碎片 / Memento",
      "score": "8.5",
      "quote": "一个针管引发的血案。",
      "ranking": "131",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p641688453.jpg",
      "country": "美国"
    },
    {
      "name": "东邪西毒 / 東邪西毒",
      "score": "8.6",
      "quote": "电影诗。",
      "ranking": "132",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1982176012.jpg",
      "country": "香港 台湾"
    },
    {
      "name": "喜宴 / 囍宴",
      "score": "8.8",
      "quote": "中国家庭的喜怒哀乐忍。",
      "ranking": "133",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2173713676.jpg",
      "country": "台湾 美国"
    },
    {
      "name": "怪兽电力公司 / Monsters, Inc.",
      "score": "8.6",
      "quote": "不要给它起名字，起了名字就有感情了。",
      "ranking": "134",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2513247938.jpg",
      "country": "美国"
    },
    {
      "name": "疯狂原始人 / The Croods",
      "score": "8.7",
      "quote": "老少皆宜，这就是好莱坞动画的魅力。",
      "ranking": "135",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1867084027.jpg",
      "country": "美国"
    },
    {
      "name": "黑天鹅 / Black Swan",
      "score": "8.5",
      "quote": "黑暗之美。",
      "ranking": "136",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p719282906.jpg",
      "country": "美国"
    },
    {
      "name": "燃情岁月 / Legends of the Fall",
      "score": "8.7",
      "quote": "传奇，不是每个人都可以拥有。",
      "ranking": "137",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1023654037.jpg",
      "country": "美国"
    },
    {
      "name": "英雄本色",
      "score": "8.7",
      "quote": "英雄泪短，兄弟情长。 ",
      "ranking": "138",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2504997087.jpg",
      "country": "香港"
    },
    {
      "name": "虎口脱险 / La grande vadrouille",
      "score": "8.9",
      "quote": "永远看不腻的喜剧。",
      "ranking": "139",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2399597512.jpg",
      "country": "法国 英国"
    },
    {
      "name": "卢旺达饭店 / Hotel Rwanda",
      "score": "8.8",
      "quote": "当这个世界闭上双眼，他却敞开了怀抱。",
      "ranking": "140",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2159368352.jpg",
      "country": "英国 南非 意大利 美国"
    },
    {
      "name": "恋恋笔记本 / The Notebook",
      "score": "8.5",
      "quote": "爱情没有那么多借口，如果不能圆满，只能说明爱的不够。 ",
      "ranking": "141",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p483604864.jpg",
      "country": "美国"
    },
    {
      "name": "傲慢与偏见 / Pride & Prejudice",
      "score": "8.4",
      "quote": "爱是摈弃傲慢与偏见之后的曙光。",
      "ranking": "142",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p452005185.jpg",
      "country": "法国 英国 美国"
    },
    {
      "name": "7号房的礼物 / 7번방의 선물",
      "score": "8.7",
      "quote": "《我是山姆》的《美丽人生》。",
      "ranking": "143",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1816276065.jpg",
      "country": "韩国"
    },
    {
      "name": "猜火车 / Trainspotting",
      "score": "8.5",
      "quote": "不可猜的青春迷笛。 ",
      "ranking": "144",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p513567548.jpg",
      "country": "英国"
    },
    {
      "name": "魂断蓝桥 / Waterloo Bridge",
      "score": "8.8",
      "quote": "中国式内在的美国电影。",
      "ranking": "145",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2351134499.jpg",
      "country": "美国"
    },
    {
      "name": "海边的曼彻斯特 / Manchester by the Sea",
      "score": "8.6",
      "quote": "我们都有权利不与自己的过去和解。",
      "ranking": "146",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2496940327.jpg",
      "country": "美国"
    },
    {
      "name": "穿越时空的少女 / 時をかける少女",
      "score": "8.6",
      "quote": "爱上未来的你。 ",
      "ranking": "147",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2079334286.jpg",
      "country": "日本"
    },
    {
      "name": "教父3 / The Godfather: Part III",
      "score": "8.8",
      "quote": "任何信念的力量，都无法改变命运。",
      "ranking": "148",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2169664351.jpg",
      "country": "美国"
    },
    {
      "name": "哈利·波特与死亡圣器(下) / Harry Potter and the Deathly Hallows: Part 2",
      "score": "8.6",
      "quote": "10年的完美句点。",
      "ranking": "149",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p917846733.jpg",
      "country": "美国 英国"
    },
    {
      "name": "萤火之森 / 蛍火の杜へ",
      "score": "8.7",
      "quote": "触不到的恋人。",
      "ranking": "150",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1272904657.jpg",
      "country": "日本"
    },
    {
      "name": "完美的世界 / A Perfect World",
      "score": "9.0",
      "quote": "坏人的好总是比好人的好来得更感人。",
      "ranking": "151",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p792403691.jpg",
      "country": "美国"
    },
    {
      "name": "纵横四海 / 緃横四海",
      "score": "8.7",
      "quote": "香港浪漫主义警匪动作片的巅峰之作。",
      "ranking": "152",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2272146906.jpg",
      "country": "香港"
    },
    {
      "name": "玩具总动员3 / Toy Story 3",
      "score": "8.8",
      "quote": "跨度十五年的欢乐与泪水。",
      "ranking": "153",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1283675359.jpg",
      "country": "美国"
    },
    {
      "name": "雨中曲 / Singin' in the Rain",
      "score": "8.9",
      "quote": "骨灰级歌舞片。",
      "ranking": "154",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1612355875.jpg",
      "country": "美国"
    },
    {
      "name": "小森林 冬春篇 / リトル・フォレスト 冬・春",
      "score": "8.9",
      "quote": "尊敬他人，尊敬你生活的这片土地，明白孤独是人生的常态。",
      "ranking": "155",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2215147728.jpg",
      "country": "日本"
    },
    {
      "name": "荒蛮故事 / Relatos salvajes",
      "score": "8.8",
      "quote": "始于荒诞，止于更荒诞。",
      "ranking": "156",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2192834364.jpg",
      "country": "阿根廷 西班牙"
    },
    {
      "name": "花样年华 / 花樣年華",
      "score": "8.5",
      "quote": "偷情本没有这样美。",
      "ranking": "157",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1910828286.jpg",
      "country": "香港 法国"
    },
    {
      "name": "二十二",
      "score": "8.8",
      "quote": "有一些东西不应该被遗忘。",
      "ranking": "158",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2457609817.jpg",
      "country": "中国大陆"
    },
    {
      "name": "我是山姆 / I Am Sam",
      "score": "8.8",
      "quote": "爱并不需要智商 。",
      "ranking": "159",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p652417775.jpg",
      "country": "美国"
    },
    {
      "name": "超能陆战队 / Big Hero 6",
      "score": "8.6",
      "quote": "Balalala~~~",
      "ranking": "160",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2224568669.jpg",
      "country": "美国"
    },
    {
      "name": "唐伯虎点秋香 / 唐伯虎點秋香",
      "score": "8.4",
      "quote": "华太师是黄霑，吴镇宇四大才子之一。",
      "ranking": "161",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1946455272.jpg",
      "country": "香港"
    },
    {
      "name": "时空恋旅人 / About Time",
      "score": "8.6",
      "quote": "把每天当作最后一天般珍惜度过，积极拥抱生活，就是幸福。",
      "ranking": "162",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2070153774.jpg",
      "country": "英国"
    },
    {
      "name": "人工智能 / Artificial Intelligence: AI",
      "score": "8.6",
      "quote": "对爱的执着，可以超越一切。",
      "ranking": "163",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p792257137.jpg",
      "country": "美国"
    },
    {
      "name": "浪潮 / Die Welle",
      "score": "8.7",
      "quote": "世界离独裁只有五天。",
      "ranking": "164",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1344888983.jpg",
      "country": "德国"
    },
    {
      "name": "蝙蝠侠：黑暗骑士崛起 / The Dark Knight Rises",
      "score": "8.6",
      "quote": "诺兰就是保证。",
      "ranking": "165",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1706428744.jpg",
      "country": "美国 英国"
    },
    {
      "name": "冰川时代 / Ice Age",
      "score": "8.4",
      "quote": "松鼠才是角儿。",
      "ranking": "166",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1910895719.jpg",
      "country": "美国"
    },
    {
      "name": "香水 / Perfume: The Story of a Murderer",
      "score": "8.4",
      "quote": "一个单凭体香达到高潮的男人。",
      "ranking": "167",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p470006658.jpg",
      "country": "德国 法国 西班牙 美国"
    },
    {
      "name": "朗读者 / The Reader",
      "score": "8.5",
      "quote": "当爱情跨越年龄的界限，它似乎能变得更久远一点，成为一种责任，一种水到渠成的相濡以沫。 ",
      "ranking": "168",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1140984198.jpg",
      "country": "美国 德国"
    },
    {
      "name": "心迷宫",
      "score": "8.6",
      "quote": "荒诞讽刺，千奇百巧，抽丝剥茧，百转千回。",
      "ranking": "169",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2275298525.jpg",
      "country": "中国大陆"
    },
    {
      "name": "罗生门 / 羅生門",
      "score": "8.7",
      "quote": "人生的N种可能性。",
      "ranking": "170",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1864872647.jpg",
      "country": "日本"
    },
    {
      "name": "追随 / Following",
      "score": "8.9",
      "quote": "诺兰的牛逼来源于内心散发出的恐惧。",
      "ranking": "171",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1150103377.jpg",
      "country": "英国"
    },
    {
      "name": "一次别离 / جدایی نادر از سیمین",
      "score": "8.7",
      "quote": "只有有信仰的人才能说出事实真相。",
      "ranking": "172",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2189835254.jpg",
      "country": "伊朗 法国"
    },
    {
      "name": "撞车 / Crash",
      "score": "8.6",
      "quote": "天使与魔鬼的冲撞。",
      "ranking": "173",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2075132390.jpg",
      "country": "美国 德国"
    },
    {
      "name": "爆裂鼓手 / Whiplash",
      "score": "8.6",
      "quote": "这个世界从不善待努力的人，努力了也不一定会成功，但是知道自己在努力，就是活下去的动力。",
      "ranking": "174",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2220776342.jpg",
      "country": "美国"
    },
    {
      "name": "未麻的部屋 / Perfect Blue",
      "score": "8.8",
      "quote": "好的剧本是，就算你猜到了结局也猜不到全部。",
      "ranking": "175",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1351050722.jpg",
      "country": "日本"
    },
    {
      "name": "可可西里",
      "score": "8.7",
      "quote": "坚硬的信仰。",
      "ranking": "176",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2363208684.jpg",
      "country": "中国大陆 香港"
    },
    {
      "name": "战争之王 / Lord of War",
      "score": "8.5",
      "quote": "做一颗让别人需要你的棋子。",
      "ranking": "177",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p453719066.jpg",
      "country": "美国 法国"
    },
    {
      "name": "地球上的星星 / Taare Zameen Par",
      "score": "8.8",
      "quote": "天使保护事件始末。",
      "ranking": "178",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1973489335.jpg",
      "country": "印度"
    },
    {
      "name": "梦之安魂曲 / Requiem for a Dream",
      "score": "8.7",
      "quote": "一场没有春天的噩梦。",
      "ranking": "179",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p884936202.jpg",
      "country": "美国"
    },
    {
      "name": "恐怖游轮 / Triangle",
      "score": "8.3",
      "quote": "不要企图在重复中寻找已经失去的爱。",
      "ranking": "180",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p462470694.jpg",
      "country": "英国 澳大利亚"
    },
    {
      "name": "达拉斯买家俱乐部 / Dallas Buyers Club",
      "score": "8.6",
      "quote": "Jared Leto的腿比女人还美！",
      "ranking": "181",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2166160837.jpg",
      "country": "美国"
    },
    {
      "name": "被解救的姜戈 / Django Unchained",
      "score": "8.5",
      "quote": "热血沸腾，那个低俗、性感的无耻混蛋又来了。",
      "ranking": "182",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1959232369.jpg",
      "country": "美国"
    },
    {
      "name": "阿飞正传 / 阿飛正傳",
      "score": "8.5",
      "quote": "王家卫是一种风格，张国荣是一个代表。",
      "ranking": "183",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p924558512.jpg",
      "country": "香港"
    },
    {
      "name": "牯岭街少年杀人事件 / 牯嶺街少年殺人事件",
      "score": "8.7",
      "quote": "弱者送给弱者的一刀。",
      "ranking": "184",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p848381236.jpg",
      "country": "台湾"
    },
    {
      "name": "谍影重重 / The Bourne Identity",
      "score": "8.5",
      "quote": "哗啦啦啦啦，天在下雨，哗啦啦啦啦，云在哭泣……找自己。",
      "ranking": "185",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1597183981.jpg",
      "country": "美国 德国 捷克"
    },
    {
      "name": "谍影重重2 / The Bourne Supremacy",
      "score": "8.5",
      "quote": "谁说王家卫镜头很晃？",
      "ranking": "186",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p667644866.jpg",
      "country": "美国 德国"
    },
    {
      "name": "碧海蓝天 / Le grand bleu",
      "score": "8.7",
      "quote": "在那片深蓝中，感受来自大海的忧伤寂寞与美丽自由。",
      "ranking": "187",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p455722535.jpg",
      "country": "法国 美国 意大利"
    },
    {
      "name": "魔女宅急便 / 魔女の宅急便",
      "score": "8.5",
      "quote": "宫崎骏的电影总让人感觉世界是美好的，阳光明媚的。",
      "ranking": "188",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1637195618.jpg",
      "country": "日本"
    },
    {
      "name": "血战钢锯岭 / Hacksaw Ridge",
      "score": "8.7",
      "quote": "优秀的战争片不会美化战场，不会粉饰死亡，不会矮化敌人，不会无视常识，最重要的，不会宣扬战争。",
      "ranking": "189",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2397337958.jpg",
      "country": "美国 澳大利亚"
    },
    {
      "name": "惊魂记 / Psycho",
      "score": "8.9",
      "quote": "故事的反转与反转，分裂电影的始祖。",
      "ranking": "190",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1021883305.jpg",
      "country": "美国"
    },
    {
      "name": "忠犬八公物语 / ハチ公物語",
      "score": "9.0",
      "quote": "养狗三日，便会对你终其一生。",
      "ranking": "191",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2297934945.jpg",
      "country": "日本"
    },
    {
      "name": "秒速5厘米 / 秒速5センチメートル",
      "score": "8.3",
      "quote": "青春就是放弃和怀念。",
      "ranking": "192",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p982896012.jpg",
      "country": "日本"
    },
    {
      "name": "再次出发之纽约遇见你 / Begin Again",
      "score": "8.5",
      "quote": "爱我就给我看你的播放列表。",
      "ranking": "193",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2250287733.jpg",
      "country": "美国"
    },
    {
      "name": "青蛇",
      "score": "8.4",
      "quote": "人生如此，浮生如斯。谁人言，花彼岸，此生情长意短。谁都是不懂爱的罢了。",
      "ranking": "194",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p584021784.jpg",
      "country": "香港"
    },
    {
      "name": "海盗电台 / The Boat That Rocked",
      "score": "8.6",
      "quote": "生命不止，摇滚不死。",
      "ranking": "195",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p769608791.jpg",
      "country": "英国 德国 法国"
    },
    {
      "name": "头脑特工队 / Inside Out",
      "score": "8.7",
      "quote": "愿我们都不用长大，每一座城堡都能永远存在。",
      "ranking": "196",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2266293606.jpg",
      "country": "美国"
    },
    {
      "name": "哪吒闹海",
      "score": "8.9",
      "quote": "想你时你在闹海。",
      "ranking": "197",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2163636038.jpg",
      "country": "中国大陆"
    },
    {
      "name": "房间 / Room",
      "score": "8.8",
      "quote": "被偷走的岁月，被伤害的生命，被禁锢的灵魂，终将被希望和善意救赎。",
      "ranking": "198",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2259715855.jpg",
      "country": "爱尔兰 加拿大 英国 美国"
    },
    {
      "name": "东京物语 / 東京物語",
      "score": "9.2",
      "quote": "东京那么大，如果有一天走失了，恐怕一辈子不能再相见。",
      "ranking": "199",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1910832390.jpg",
      "country": "日本"
    },
    {
      "name": "绿里奇迹 / The Green Mile",
      "score": "8.7",
      "quote": "天使暂时离开。",
      "ranking": "200",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p767586451.jpg",
      "country": "美国"
    },
    {
      "name": "末路狂花 / Thelma & Louise",
      "score": "8.7",
      "quote": "没有了退路，只好飞向自由。",
      "ranking": "201",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p794583044.jpg",
      "country": "美国 法国"
    },
    {
      "name": "终结者2：审判日 / Terminator 2: Judgment Day",
      "score": "8.6",
      "quote": "少见的超越首部的续集，动作片中的经典。",
      "ranking": "202",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1910909085.jpg",
      "country": "美国 法国"
    },
    {
      "name": "勇闯夺命岛 / The Rock",
      "score": "8.5",
      "quote": "类型片的极致。 ",
      "ranking": "203",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p636048104.jpg",
      "country": "美国"
    },
    {
      "name": "源代码 / Source Code",
      "score": "8.3",
      "quote": "邓肯·琼斯继《月球》之后再度奉献出一部精彩绝伦的科幻佳作。",
      "ranking": "204",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p988260245.jpg",
      "country": "美国 加拿大"
    },
    {
      "name": "这个男人来自地球 / The Man from Earth",
      "score": "8.5",
      "quote": "科幻真正的魅力不是视觉效果能取代的。 ",
      "ranking": "205",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p513303986.jpg",
      "country": "美国"
    },
    {
      "name": "新龙门客栈 / 新龍門客棧",
      "score": "8.5",
      "quote": "嬉笑怒骂，调风动月。",
      "ranking": "206",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1421018669.jpg",
      "country": "香港 中国大陆"
    },
    {
      "name": "黑客帝国3：矩阵革命 / The Matrix Revolutions",
      "score": "8.5",
      "quote": "不得不说，《黑客帝国》系列是商业片与科幻、哲学完美结合的典范。",
      "ranking": "207",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p443461818.jpg",
      "country": "美国 澳大利亚"
    },
    {
      "name": "卡萨布兰卡 / Casablanca",
      "score": "8.6",
      "quote": "世界上有那么多女人那么多酒馆，但她偏偏走进我的这家。",
      "ranking": "208",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1244791866.jpg",
      "country": "美国"
    },
    {
      "name": "模仿游戏 / The Imitation Game",
      "score": "8.5",
      "quote": "他给机器起名“克里斯托弗”，因为这是他初恋的名字。",
      "ranking": "209",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2255040492.jpg",
      "country": "英国 美国"
    },
    {
      "name": "荒野生存 / Into the Wild",
      "score": "8.6",
      "quote": "出门必备：本草纲目。",
      "ranking": "210",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p465687407.jpg",
      "country": "美国"
    },
    {
      "name": "变脸 / Face/Off",
      "score": "8.4",
      "quote": "当发哥的风衣、墨镜出现在了凯奇身上⋯⋯",
      "ranking": "211",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2173855883.jpg",
      "country": "美国"
    },
    {
      "name": "迁徙的鸟 / Le peuple migrateur",
      "score": "9.1",
      "quote": "最美的飞翔。",
      "ranking": "212",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2238274168.jpg",
      "country": "法国 德国 意大利 西班牙 瑞士"
    },
    {
      "name": "城市之光 / City Lights",
      "score": "9.2",
      "quote": "永远的小人物，伟大的卓别林。",
      "ranking": "213",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2099815842.jpg",
      "country": "美国"
    },
    {
      "name": "E.T. 外星人 / E.T.: The Extra-Terrestrial",
      "score": "8.5",
      "quote": "生病的E.T.皮肤的颜色就像柿子饼。",
      "ranking": "214",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p984732992.jpg",
      "country": "美国"
    },
    {
      "name": "美国丽人 / American Beauty",
      "score": "8.4",
      "quote": "每个人的内心都是深不可测的大海。 ",
      "ranking": "215",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p571671715.jpg",
      "country": "美国"
    },
    {
      "name": "发条橙 / A Clockwork Orange",
      "score": "8.4",
      "quote": "我完全康复了。",
      "ranking": "216",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p529908155.jpg",
      "country": "英国 美国"
    },
    {
      "name": "黄金三镖客 / Il buono, il brutto, il cattivo.",
      "score": "9.1",
      "quote": "最棒的西部片。",
      "ranking": "217",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2101693489.jpg",
      "country": "意大利 西班牙 西德"
    },
    {
      "name": "无耻混蛋 / Inglourious Basterds",
      "score": "8.4",
      "quote": "昆汀同学越来越变态了，比北野武还杜琪峰。",
      "ranking": "218",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p770734475.jpg",
      "country": "美国 德国"
    },
    {
      "name": "初恋这件小事 / สิ่งเล็กเล็กที่เรียกว่า...รัก",
      "score": "8.3",
      "quote": "黑小鸭速效美白记。",
      "ranking": "219",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1505312273.jpg",
      "country": "泰国"
    },
    {
      "name": "英国病人 / The English Patient",
      "score": "8.4",
      "quote": "In memory, love lives forever...",
      "ranking": "220",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2408623752.jpg",
      "country": "美国 英国"
    },
    {
      "name": "燕尾蝶 / スワロウテイル",
      "score": "8.6",
      "quote": "现实与童话交相辉映的旅程。",
      "ranking": "221",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p532195562.jpg",
      "country": "日本"
    },
    {
      "name": "一个叫欧维的男人决定去死 / En man som heter Ove",
      "score": "8.7",
      "quote": "惠及一生的美丽。",
      "ranking": "222",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2406624993.jpg",
      "country": "瑞典"
    },
    {
      "name": "爱在午夜降临前 / Before Midnight",
      "score": "8.8",
      "quote": "所谓爱情，就是话唠一路，都不会心生腻烦，彼此嫌弃。",
      "ranking": "223",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2074715729.jpg",
      "country": "美国"
    },
    {
      "name": "你的名字。 / 君の名は。",
      "score": "8.4",
      "quote": "穿越错位的时空，仰望陨落的星辰，你没留下你的名字，我却无法忘记那句“我爱你”。",
      "ranking": "224",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2395733377.jpg",
      "country": "日本"
    },
    {
      "name": "非常嫌疑犯 / The Usual Suspects",
      "score": "8.6",
      "quote": "我不信仰上帝，但我敬畏上帝。",
      "ranking": "225",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p470383576.jpg",
      "country": "德国 美国"
    },
    {
      "name": "叫我第一名 / Front of the Class",
      "score": "8.6",
      "quote": "乐观比一切都有力量。",
      "ranking": "226",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p496133870.jpg",
      "country": "美国"
    },
    {
      "name": "穆赫兰道 / Mulholland Dr.",
      "score": "8.3",
      "quote": "大卫·林奇的梦境迷宫。",
      "ranking": "227",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p792248233.jpg",
      "country": "法国 美国"
    },
    {
      "name": "请以你的名字呼唤我 / Call Me by Your Name",
      "score": "8.8",
      "quote": "沉醉在电影的情感和视听氛围中无法自拔。",
      "ranking": "228",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2505525050.jpg",
      "country": "意大利 法国 巴西 美国"
    },
    {
      "name": "勇士 / Warrior",
      "score": "8.9",
      "quote": "热血沸腾，相当完美的娱乐拳击大餐。",
      "ranking": "229",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1145536386.jpg",
      "country": "美国"
    },
    {
      "name": "无敌破坏王 / Wreck-It Ralph",
      "score": "8.6",
      "quote": "迪士尼和皮克斯拿错剧本的产物。",
      "ranking": "230",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1735642656.jpg",
      "country": "美国"
    },
    {
      "name": "疯狂的石头",
      "score": "8.3",
      "quote": "中国版《两杆大烟枪》。",
      "ranking": "231",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p712241453.jpg",
      "country": "中国大陆 香港"
    },
    {
      "name": "无人知晓 / 誰も知らない",
      "score": "9.0",
      "quote": "我的平常生活就是他人的幸福。",
      "ranking": "232",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p661160053.jpg",
      "country": "日本"
    },
    {
      "name": "上帝也疯狂 / The Gods Must Be Crazy",
      "score": "8.6",
      "quote": "纯净原始的笑与感动。",
      "ranking": "233",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2173719647.jpg",
      "country": "博茨瓦纳 南非"
    },
    {
      "name": "国王的演讲 / The King's Speech",
      "score": "8.3",
      "quote": "皇上无话儿。",
      "ranking": "234",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p768879237.jpg",
      "country": "英国 澳大利亚 美国"
    },
    {
      "name": "血钻 / Blood Diamond",
      "score": "8.5",
      "quote": "每个美丽事物背后都是滴血的现实。",
      "ranking": "235",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1244017073.jpg",
      "country": "美国 德国"
    },
    {
      "name": "步履不停 / 歩いても 歩いても",
      "score": "8.8",
      "quote": "日本的家庭电影已经是世界巅峰了，步履不停是巅峰中的佳作。",
      "ranking": "236",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p672446737.jpg",
      "country": "日本"
    },
    {
      "name": "蓝色大门 / 藍色大門",
      "score": "8.3",
      "quote": "青春的窃窃私语。 ",
      "ranking": "237",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p584822570.jpg",
      "country": "台湾 法国"
    },
    {
      "name": "枪火 / 鎗火",
      "score": "8.6",
      "quote": "一群演技精湛的戏骨，奉献出一个精致的黑帮小品，成就杜琪峰群戏的巅峰之作。",
      "ranking": "238",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1538646661.jpg",
      "country": "香港"
    },
    {
      "name": "大卫·戈尔的一生 / The Life of David Gale",
      "score": "8.6",
      "quote": "捍卫人权只是信仰，一点不妨碍其行为的残忍。",
      "ranking": "239",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2186861098.jpg",
      "country": "美国 德国 英国"
    },
    {
      "name": "彗星来的那一夜 / Coherence",
      "score": "8.4",
      "quote": "小成本大魅力。",
      "ranking": "240",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2187896711.jpg",
      "country": "美国 英国"
    },
    {
      "name": "爱·回家 / 집으로...",
      "score": "9.0",
      "quote": "献给所有外婆的电影。",
      "ranking": "241",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2107418134.jpg",
      "country": "韩国"
    },
    {
      "name": "遗愿清单 / The Bucket List",
      "score": "8.5",
      "quote": "用剩余不多的时间，去燃烧整个生命。",
      "ranking": "242",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p708613284.jpg",
      "country": "美国"
    },
    {
      "name": "我爱你 / 그대를 사랑합니다",
      "score": "9.0",
      "quote": "你要相信，这世上真的有爱存在，不管在什么年纪 ",
      "ranking": "243",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1075591188.jpg",
      "country": "韩国"
    },
    {
      "name": "千钧一发 / Gattaca",
      "score": "8.7",
      "quote": "一部能引人思考的科幻励志片。",
      "ranking": "244",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2195672555.jpg",
      "country": "美国"
    },
    {
      "name": "荒岛余生 / Cast Away",
      "score": "8.5",
      "quote": "一个人的独角戏。",
      "ranking": "245",
      "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1341248319.jpg",
      "country": "美国"
    },
    {
      "name": "麦兜故事 / 麥兜故事",
      "score": "8.5",
      "quote": "麦兜是一只很哲学的猪。 ",
      "ranking": "246",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p804938713.jpg",
      "country": "香港"
    },
    {
      "name": "暖暖内含光 / Eternal Sunshine of the Spotless Mind",
      "score": "8.4",
      "quote": "恋爱是一次神经的冒险。就算失去记忆，也会爱上你。",
      "ranking": "247",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p479565065.jpg",
      "country": "美国"
    },
    {
      "name": "曾经 / Once",
      "score": "8.3",
      "quote": "有些幸福无关爱情。",
      "ranking": "248",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2173720203.jpg",
      "country": "爱尔兰"
    },
    {
      "name": "月球 / Moon",
      "score": "8.5",
      "quote": "2009媲美《第九区》的又一部科幻神作。",
      "ranking": "249",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p449399746.jpg",
      "country": "英国"
    },
    {
      "name": "黑鹰坠落 / Black Hawk Down",
      "score": "8.5",
      "quote": "还原真实而残酷的战争。",
      "ranking": "250",
      "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1910900710.jpg",
      "country": "美国"
    }
  ]
  var newArray = dataReconstitution(array)
  var countryObj = countryStatistics(newArray)
  grouping(countryObj)
}

_main()