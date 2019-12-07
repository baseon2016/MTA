import axios from "axios";
import { PUBLICAXIOS } from "../../js/publicUrl";
const resources = {
  state: {
    tabs: [
      {
        Id: "1",
        Title: "操作视频演示"
      },
      {
        Id: "2",
        Title: "工艺设备介绍"
      },
      {
        Id: "3",
        Title: "文件下载"
      },
      {
        Id: "4",
        Title: "自主学习"
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
    ],
    selfLearn: [
      {
        Subjects: {
          Answer: "试题管理测试1",
          SubType: "1",
          SubjectId: "3717872544494125056",
          Title: "试题管理测试1"
        },
        SubjectOptions: [
          {
            Createtime: "2019-11-22T10:14:56.31",
            Id: 25,
            SubjectId: "3718254251110039552",
            UserId: "3679565158411141120",
            itemKey: "A",
            itemValue: "试题管理测试判断2"
          }
        ]
      }
    ]
  },
  mutations: {
    assignSelfLearn(state, payload) {
      state.selfLearn = payload;
    }
  },
  actions: {
    getSelfLearn() {
      return axios.get(PUBLICAXIOS + "/api/index/subjectone");
    }
  },
  getters: {
    learnType1(state) {
      const chooseType = state.selfLearn.filter(
        item => item.Subjects.SubType === "1"
      );
      return chooseType.map(item => {
        const addAnswer = { ...item, userAnswer: "" };
        return addAnswer;
      });
    }
  }
};
export default resources;
