<template>
  <div>

    <div class="card student-list m-2 p-2">

      <h4 class="card-title">Student List</h4>

      <div class="edit-table-toggle form-check">
        <input id="edit-table" type="checkbox" class="form-check-input" v-model="editTable">
        <label for="edit-table" class="form-check-label">Edit table?</label>
      </div>

      <div id="student-table">
        <table class="table">

          <tr>
            <th>Name</th>
            <th>StarID</th>
            <th>Present?</th>
            <th v-show="editTable">Delete</th>
          </tr>

          <!-- Listen for events from child component StudentRow.vue: delete button clicked, present box checked/unchecked (v-on) -->
          <!-- Pass student data from App.vue down to StudentRow.vue (v-bind) -->
          <!-- Generate a StudentRow instance for each student in array (v-for) -->
          <student-row
              v-for="student in students"
              v-bind:student="student"
              v-bind:key="student.starID"
              v-bind:edit="editTable"
              v-on:student-arrived-or-left="arrivedOrLeft"
              v-on:delete-student="deleteStudent"
          ></student-row>

        </table>
      </div>

    </div>

  </div>
</template>

<script>

import StudentRow from '@/components/StudentRow.vue'

export default {

  name: 'StudentTable',

  components: {
    StudentRow
  },

  emits: ['student-arrived-or-left','delete-student'],

  props: {
    students: Array,
  },

  data() {
    return {
      editTable: false
    }
  },

  methods: {
    /* Emit event from child StudentRow.vue to parent App.vue */
    arrivedOrLeft(student, present) {
      this.$emit('student-arrived-or-left', student, present)
    },

    deleteStudent(student) {
      this.$emit('delete-student', student)
    }
  }

}

</script>

<style scoped>




</style>