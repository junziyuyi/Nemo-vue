import { getToken, setToken } from "@/utils/auth";

const state = {
  token: getToken(),
  name: "",
  avatar: "",
  introduction: "",
  roles: []
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction;
  },
  SET_NAME: (state, name) => {
    state.name = name;
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar;
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles;
  }
};

const actions = {
  login({ commit }, userInfo) {
    const { token } = userInfo;
    commit("SET_TOKEN", token);
    setToken(token);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
