import { createStore } from "vuex";

export default createStore({
  state: {
    selectOption: [
      { id: 1, title: "Russian", value: "RU" },
      { id: 2, title: "English", value: "EN" },
      { id: 3, title: "Spain", value: "SP" },
    ],
    currentLang: "RU",
    currentLangTitle: "Russian",
  },
  mutations: {
    setCurrentLang: (state, payload) => (state.currentLang = payload),
    setCurrentLangTitle: (state, payload) => (state.currentLangTitle = payload),
  },
  actions: {},
  getters: {
    getCurrentLang: (state) => state.currentLang,
    getCurrentLangTitle: (state) => state.currentLangTitle,
    getSelectOption: (state) => state.selectOption,
  },
  modules: {},
});
