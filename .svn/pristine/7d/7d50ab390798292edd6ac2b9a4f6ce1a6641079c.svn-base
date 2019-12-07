const collapseTabs = {
  state: {
    collapseCurrent: null,
    collapseTabs: []
  },
  mutations: {
    // 当前激活选项卡
    assignCollapseCurrent(state, payload) {
      state.collapseCurrent = payload;
    },
    // 侧边选项卡数据赋值本地
    assignCollapseTabs(state, payload) {
      state.collapseTabs = payload;
    },
    // 侧边选项卡数据清空
    clearCollapseTabs(state) {
      state.collapseCurrent = "";
      state.collapseTabs = [];
    },
    clearCollapseCurrent(state) {
      state.collapseCurrent = "";
    }
  },
  getters: {
    collapseCurrentTxt(state) {
      return state.collapseCurrent;
    }
  }
};
export default collapseTabs;
