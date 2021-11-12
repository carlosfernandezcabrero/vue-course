<template>
  <div class="task">
    <div class="task__header">
      <h5 class="task__header__name">{{ task.name.toUpperCase() }}</h5>
      <h5 class="task__header__date">{{ new Date(task.timestamp * 1000).toLocaleString('es') }}</h5>
      <div class="actions">
        <button class="btn bg-accent" @click="editTask(task.id)">Edit</button>
        <button class="btn bg-error" @click="deleteTask(task.id)">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      default: null,
    },
  },
  methods: {
    editTask(id) {
      this.$emit('edit-task', id)
    },
    deleteTask(id) {
      this.$emit('delete-task', id)
    },
  },
}
</script>

<style scoped>
.task {
  background-color: whitesmoke;
  color: #0A1D37;
  padding-inline: 1rem;
  padding-block: 0.4rem;
  margin-bottom: 1rem;
  border-radius: 4px;
}

.task__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.task__header__name {
  width: 25%;
}
</style>
