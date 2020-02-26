
const state = {
  name: 'coderly',
  sex: '1',
  avatar: 'http://47.106.68.248:3002/uploads/2020022510030308549coderly.jpg.jpeg',
  age: '18',
  phone: '15777777777',
  address: '浙江绍兴',
  likes: ['读书']
}

const mutations = {
  CHANGE_NAME: (state, name) => {
    state.name = name
  },
  CHANGE_SEX: (state, sex) => {
    state.sex = sex
  },
  CHANGE_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  CHANGE_AGE: (state, age) => {
    state.age = age
  },
  CHANGE_PHONE: (state, phone) => {
    state.phone = phone
  },
  CHANGE_ADDRESS: (state, address) => {
    state.address = address
  },
  CHANGE_LIKES: (state, likes) => {
    state.likes = likes
  }
}

const actions = {
  changeUserInfo ({ commit }, user) {
    const { name, age, sex, likes, phone, address, avatar } = user
    commit('CHANGE_NAME', name)
    commit('CHANGE_AGE', age)
    commit('CHANGE_SEX', sex)
    commit('CHANGE_LIKES', likes)
    commit('CHANGE_PHONE', phone)
    commit('CHANGE_ADDRESS', address)
    commit('CHANGE_AVATAR', avatar)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
