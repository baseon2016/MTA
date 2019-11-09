const resources = {
  state: {
    tabs: [
      {
        id: "1",
        txt: "操作视频演示"
      },
      {
        id: "2",
        txt: "工艺设备介绍"
      },
      {
        id: "3",
        txt: "文件下载"
      },
      {
        id: "4",
        txt: "自主学习"
      }
    ],
    downloadFiles: [
      {
        id: "1",
        Title: "环境管理体系（ISO14001） 环境管理体系（ISO14001）",
        remark:
          "这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介",
        tag: "安装包",
        size: "20MB",
        createTime: "2019-10-14",
        downloadTimes: "7"
      },
      {
        id: "2",
        Title: "环境管理体系（ISO14001） 环境管理体系（ISO14001）",
        remark:
          "这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介",
        tag: "安装包",
        size: "20MB",
        createTime: "2019-10-14",
        downloadTimes: "7"
      },
      {
        id: "3",
        Title: "环境管理体系（ISO14001） 环境管理体系（ISO14001）",
        remark:
          "这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介",
        tag: "安装包",
        size: "20MB",
        createTime: "2019-10-14",
        downloadTimes: "7"
      },
      {
        id: "4",
        Title: "环境管理体系（ISO14001） 环境管理体系（ISO14001）",
        remark:
          "这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介",
        tag: "安装包",
        size: "20MB",
        createTime: "2019-10-14",
        downloadTimes: "7"
      },
      {
        id: "5",
        Title: "环境管理体系（ISO14001） 环境管理体系（ISO14001）",
        remark:
          "这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介",
        tag: "安装包",
        size: "20MB",
        createTime: "2019-10-14",
        downloadTimes: "7"
      }
    ]
  },
  getters: {
    currentreRources(state, getters) {
      const result = state.articles.find(item => item.title === getters.currentTxt);
      return result;
    }
  }
};
export default resources;
