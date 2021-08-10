import { createStore } from "vuex";
import axios from "axios";
import router from "../router";
axios.defaults.baseURL = "http://localhost:3000";

export default createStore({
  state: {
    favorites: [],
    animals: [],
    access_token: "",
  },
  mutations: {
    SET_FAVORITES(state, payload) {
      state.favorites = payload;
    },
    SET_ANIMALS(state, payload) {
      state.animals = payload;
    },
    SET_ACCESS_TOKEN(state, payload) {
      state.access_token = payload;
    },
  },
  actions: {
    submitLogin(context, payload) {
      return axios({
        method: "POST",
        url: "/login",
        headers: {
          "Content-Type": "application/json",
        },
        data: payload,
      });
    },
    logout(context) {
      context.commit("SET_ACCESS_TOKEN", "");
      router.push({ path: "/" });
    },
    getAnimals(context) {
      axios({
        method: "GET",
        url: "/animals",
        headers: {
          "Content-Type": "application/json",
          access_token: context.state.access_token,
        },
      }).then(({ data }) => {
        context.commit("SET_ANIMALS", data);
      });
    },
    addToFavorite(context, payload) {
      axios({
        method: "POST",
        url: `/favorites/${payload}`,
        headers: {
          "Content-Type": "application/json",
          access_token: context.state.access_token,
        },
      }).then(() => {
        router.push({ path: "/favorites" });
      });
    },
    getFavorites(context) {
      axios({
        method: "GET",
        url: "/favorites",
        headers: {
          "Content-Type": "application/json",
          access_token: context.state.access_token,
        },
      }).then(({ data }) => {
        context.commit("SET_FAVORITES", data.favorites);
      });
    },
    deleteFavorite(context, payload) {
      axios({
        method: "DELETE",
        url: `/favorites/${payload}`,
        headers: {
          "Content-Type": "application/json",
          access_token: context.state.access_token,
        },
      }).then(() => {
        router.push({ path: "/favorites" });
      });
    },
  },
  modules: {},
});
