export const config = {
  /**
   * 公众号配置
   */

  // 公众号APP_ID
  APP_ID: "wxbbc5f30e44b997a7",

  // 公众号APP_SECRET
  APP_SECRET: "f95720aa4fee67aebe17ec7c4c7c9d5b",

  /**
   * 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如
   * [
   *  {
   *    // 想要发送的人的名字
   *    name: "老婆0",
   *    // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
   *    id: "ohxOO6VskYv0Kuf-ywIZVRMpuXhk",
   *    // 你想对他发送的模板消息的模板ID
   *    useTemplateId: "zjVglIuCXo4CsraXWEio1iP7sZJ7IQEES9lDsgc4yOU",
   *    // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
   *    openUrl: "https://wangxinleo.cn"
   *   }, 
   * ]
   */
  USERS: [
    {
      // 想要发送的人的名字
      name: "王果",
      // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "oAouR6ieFy6FFR_lOS0vEXZDP_24",
      // 你想对他发送的模板消息的模板ID
      useTemplateId: "i-01Vi4Ml00-kI07GRgAS1v0R9g4p9VsMGGU6ERrOSU",
      // 所在省份
      province: "贵州",
      // 所在城市
      city: "贵阳",
      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      openUrl: "https://zhangshanshan.netlify.app/"
    }, 
    {
      name: "珊珊", 
      id: "oAouR6vnwi6J8Q_ofS8Sqae6dBWI",
      useTemplateId: "i-01Vi4Ml00-kI07GRgAS1v0R9g4p9VsMGGU6ERrOSU",
      province: "贵州",
      city: "贵阳",
      openUrl: "https://zhangshanshan.netlify.app/"
    }, 
  ],

  /**
   * 回调消息 相关，主要用来展示发送是否成功/失败的数据
   */

  // 回调消息模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: "zjVglIuCXo34CsraXWEio1i3P7sZJ7IQEES93lDsgc4yOU",

  // 接收成功回调消息的微信号，（一般来说只填自己的微信号, name填不填无所谓）
  CALLBACK_USERS: [
    {
      // 一般都填自己
      name: "自己",
      // 自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "oAouR6ieFy6FFR_lOS0vEXZDP_24",
    }, 
  ],
    
  /**
   * 信息配置
   */

  /** 天气相关 */

  // 所在省份
  PROVINCE: "贵州",
  // 所在城市
  CITY: "贵阳",

  /** 重要节日相关 */

  /**
   * 重要节日，修改名字为对应需要显示的名字, data 仅填月日即可, 请严格按照示例填写
   * tpye必须填！ 只能 “生日” 和 “节日” 二选一!
   * 生日时，name填写想要展示的名字，你可以填“美丽可爱亲亲老婆”
   * 节日时，name填写相应展示的节日，你可以填“被搭讪纪念日”
   */
  FESTIVALS: [
    {"type": "生日", "name": "傻蛋儿师傅", "year": "1998", "date": "07-11"},
    {"type": "生日", "name": "聪明蛋儿徒弟", "year": "1997", "date": "09-01"},
    {"type": "节日", "name": "相识日", "year": "2022", "date": "7-30"},
  ],

  /**
   * 限制重要节日的展示条目, 需要填写数字; 
   * 如果为3, 则仅展示“将要到达” 的3个重要节日提醒，剩下的将被忽略
   * 如果为0, 则默认展示全部
   */
  FESTIVALS_LIMIT: 0,

  /** 日期相关 */

  /** 你现在可以随心增加你认为的所有的需要纪念的日子啦！
    * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
    * 比如：keyword: "love_date" ，在测试号中就是 {{ love_date.DATA }} 
    * */
  CUSTOMIZED_DATE_LIST: [
    // 在一起的日子
   {"keyword": "love_day", date: "2022-10-26"},
    // 结婚纪念日
   {"keyword": "miss_day", date: "2022-07-30"},
    // 退伍日, 不用可以删掉
    //{"keyword": "ex_day", date: "2022-08-31"},
    // sakana日
    // {"keyword": "sakana_day", date: "2022-01-06"},
    // ... 
  ],

  /** 插槽 */

  /** 你可以在这里写超多的你想显示的内容了！
    * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
    * 比如：keyword: "lover_prattle" ，在测试号中就是 {{ lover_prattle.DATA }} 
    * */
  SLOT_LIST: [
    // 这样配置的话，就会每次发送这句话
    //{"keyword": "encourage_oneself", contents: "你主要的问题在于读书太少而想得太多"},
    // 这样配置的话，就会每次随机选一句话发送
    {"keyword": "lover_prattle", contents: [
      "别担心，你迟早也会成为别人的宝藏",
      "你是天上最美丽的仙女，是七彩的云，飘飘悠悠来到人间，你走过的地方飘着发光的星星，一道阳光随着你照耀向我，使我褪去漫长冬天里的苍白",
      "月亮是我抛的硬币两面都是梦见你",
      "我们终将原谅这个世界，原谅我们自己。因为，我们一直如此善意对待的生活，终将以善意回馈你我",
      "因为太喜欢你，所以看谁都像是情敌。",
      "申请成为你爱里的永久居民。",
      "你很傻，你很笨，可我还是很羡慕你，因为你有我",
      "遇见你，就好像捡到了100斤的运气",
      "遇见你的那天，樱花开满南山",
      "想和你一齐在晚风里，说些可爱的废话数星星，直到月亮也悄悄凑过来听",
      "月亮不会奔向你，但我会，不远万里的那种",
      "你眼中有星河，胜过我见过的一切浩渺烟波",
      "不到严冬，就很少想到太阳多么无私伟大；不到孤独寂寞时，就不明白人与人互相关爱是多么重要。人，离不开太阳的光辉，但人更需要彼此感情上的相互温暖",
      "我的记性什么时候这么好了，每天一醒来都记得想你。",
      "我最近体重上升了，没有偷吃东西，只是偷偷地把你放在心上了。",
      "别跟我客气， 早晚都是一个户口本的人。",
      "想吧唧你一口，尝尝你到底是什么做的，怎么这么可爱",
      "我发现我心里众生平等，只有你一个超重",
      "我能给你的不多，容我打个欠条，用余生偿还可好",
      "别人再好，都是别人的，我不一样，我是你的",
      "人生只要两次幸运就好了，一次遇见你，一次走到底",
      "听到一些事，明明不相干的也会在心里拐几个弯想到你",
      "我本来想把最好的礼物送给你的，结果那个快递员死活不把我寄给你",
      "以前不吃酸甜，可是遇到你之后才知道什么是甜，什么是酸，见到你就说甜，不见你就说酸",
      "最近脑子转的有点慢，在思考我爱你和你爱我的等式如何才能成立",
      "我一生从南到北，只有你，使我想东想西",
    ]},
  ],

  /** 每日一言 */

  // 好文节选的内容类型
  // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
  LITERARY_PREFERENCE: ""


}
