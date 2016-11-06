// import Vue from 'vue';
// import Vuex from 'vuex';
// import { fetchIdsByType } from './api';
//
// Vue.use(Vuex);
//
// const store = new Vuex.Store({
//   state: {
//     activeType: null,
//     itemsPerPage: 20,
//     items: {/* [id: number]: Item */},
//     users: {/* [id: string]: User */},
//     lists: {
//       top: [/* number */],
//       new: [],
//       show: [],
//       ask: [],
//       job: [],
//     },
//   },
//
//   actions: {
//     // ensure data for rendering given list type
//     FETCH_LIST_DATA: ({ commit, dispatch, state }, { type }) => {
//       commit('SET_ACTIVE_TYPE', { type });
//       return fetchIdsByType(type)
//         .then(ids => commit('SET_LIST', { type, ids }))
//         .then(() => dispatch('ENSURE_ACTIVE_ITEMS'));
//     },
//   },
//
//   mutations: {
//     SET_ACTIVE_TYPE: (state, { type }) => {
//       state.activeType = type;
//     },
//   },
//   getters: {
//     // items that should be currently displayed.
//     // this Array may not be fully fetched.
//     activeItems(state, getters) {
//       return getters.activeIds.map(id => state.items[id]).filter(_ => _);
//     },
//   },
// });
//
// export default store;
