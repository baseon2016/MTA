const tabs = {
  state: {
    current: "",
    tabs: []
  },
  mutations: {
    // 当前激活选项卡
    getCurrent(state, payload) {
      state.current = payload.Title;
    },
    // 侧边选项卡数据赋值本地
    assignTabs(state, payload) {
      state.tabs = payload;
    },
    // 侧边选项卡数据清空
    clearTabs(state) {
      state.current = "";
      state.tabs = [];
    },
    clearCurrent(state) {
      state.current = "";
    }
  },
  getters: {
    currentTxt(state) {
      return state.current;
    }
  }
};
export default tabs;
