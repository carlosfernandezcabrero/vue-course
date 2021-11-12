import { db } from '~/plugins/firebase'

const actions = {
  async nuxtServerInit({ commit }) {
    const tasks = []
    const response = await db
      .collection('tasks')
      .orderBy('timestamp', 'desc')
      .get()

    response.docs.forEach((res) => {
      if (res.exists) {
        const id = res.id
        tasks.push({
          id,
          ...res.data(),
        })
      }
    })

    commit('SET_TASKS', tasks)
  },

  SET_TASKS: ({ commit }, payload) => commit('SET_TASKS', payload),
  DELETE_TASK: ({ commit, getters }, payload) => {
    const tasks = getters.TASKS

    commit(
      'SET_TASKS',
      tasks.filter((res) => res.id !== payload)
    )
  },
  UPDATE_TASK: ({ commit, getters }, payload) => {
    const tasks = getters.TASKS
    const idx = tasks.findIndex((res) => res.id === payload.id)
    tasks[idx] = {
      ...tasks[idx],
      ...payload,
    }

    commit('SET_TASKS', tasks)
  },
}

export default actions
