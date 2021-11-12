<template>
  <div class="index md-cont">
    <form class="form" @submit.prevent="saveTask">
      <input id="name" v-model="name" type="text" name="name" class="w-100" />
      <button class="btn bg-info">Create</button>
    </form>
    <div class="tasks n-row">
      <div v-for="(i, index) in TASKS" :key="index">
        <Task :task="i" @edit-task="editTask" @delete-task="deleteTask" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { nanoid } from 'nanoid'
import { db } from '~/plugins/firebase'

export default {
  data() {
    return {
      name: '',
    }
  },
  computed: {
    ...mapGetters(['TASKS']),
  },
  methods: {
    async saveTask() {
      const id = nanoid()
      const dateSpain = new Date()
      const task = {
        id,
        name: this.name,
        timestamp: Math.round(dateSpain.getTime() / 1000),
      }

      await db.collection('tasks').doc(id).set(task)

      this.$store.dispatch('SET_TASKS', [task, ...this.$store.getters.TASKS])
      this.name = ''
    },
    async deleteTask(id) {
      await db.collection('tasks').doc(id).delete()
      this.$store.dispatch('DELETE_TASK', id)
    },
    async editTask(id) {
      await db
        .collection('tasks')
        .doc(id)
        .set({ name: this.name }, { merge: true })
      this.$store.dispatch('UPDATE_TASK', { name: this.name, id })
      this.name = ''
    },
  },
}
</script>

<style scoped>
.form {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
</style>
