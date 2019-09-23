export const state = () => ({
  isBottomMenu: false,
});

export const actions = {
  bottomMenuPosition(context, payload) {
    context.commit('changeBottomMenuPosition');
  },
};

export const mutations = {
  ['changeBottomMenuPosition'](state, data) {
    state.isBottomMenu = !state.isBottomMenu;
  },
};
