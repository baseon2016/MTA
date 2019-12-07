import axios from "axios";
import { PUBLICAXIOS } from "../../js/publicUrl";
import common from "../../js/common";
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
    operationVideos: [],
    equipmentVideos: [],
    downloadFiles: [
      {
        Id: "1",
        Title: "环境管理体系（ISO14001） 环境管理体系（ISO14001）",
        Remark:
          "这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介",
        Tags: "安装包",
        FileSize: "20MB",
        createTime: "2019-10-14",
        DownCount: "7"
      }
    ]
  },
  mutations: {
    assignOperationVideos(state, payload) {
      state.operationVideos = payload;
    },
    assignEquipmentVideos(state, payload) {
      state.equipmentVideos = payload;
    },
    assignDownloadFiles(state, payload) {
      state.downloadFiles = payload;
    },
    assignSelfLearn(state, payload) {
      state.selfLearn = payload;
    }
  },
  actions: {
    getOperationVideos({ commit }) {
      axios.get(PUBLICAXIOS + "/api/index/getoperatelist").then(res => {
        // console.log(res);
        commit("assignOperationVideos", res.data.Data);
      });
    },
    getEquipmentVideos({ commit }) {
      axios.get(PUBLICAXIOS + "/api/index/getcategorylist").then(res => {
        // console.log(res);
        commit("assignEquipmentVideos", res.data.Data);
      });
    },
    getDownloadFiles({ commit }) {
      axios.get(PUBLICAXIOS + "/api/index/getfiledownlist").then(res => {
        console.log(res);
        const showFiles = res.data.Data.map(item => {
          const newItem = {
            ...item,
            Createtime: common.transDate(item.Createtime),
            FileSize: parseFloat(item.FileSize).toFixed(1)
          };
          return newItem;
        });
        commit("assignDownloadFiles", showFiles);
      });
    },
    getSelfLearn() {
      return axios.get(PUBLICAXIOS + "/api/index/subjectone");
    }
  },
  getters: {}
};
export default resources;
