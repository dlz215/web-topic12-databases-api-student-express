<!-- Only need to alter App.vue, do not need to alter any of the 4 components.  App.vue is only
  file in charge of saving/changing/deleting data. -->

<template>

  <div id="app">

    <new-student-form
        v-on:student-added="newStudentAdded"
    ></new-student-form>
    <!-- when "student-added" event is received from child, call newStudentAdded function -->

    <student-table
        v-bind:students="students"
        v-on:student-arrived-or-left="studentArrivedOrLeft"
        v-on:delete-student="studentDeleted"
    ></student-table>
    <!-- v-bind is used to bind students array in parent to students prop value in child -->

    <student-message
        v-bind:student="mostRecentStudent"
    ></student-message>

  </div>

</template>

<script>

import NewStudentForm from './components/NewStudentForm.vue'
import StudentMessage from './components/StudentMessage.vue'
import StudentTable from './components/StudentTable.vue'

export default {

  name: 'App',

  components: {
    NewStudentForm,
    StudentMessage,
    StudentTable
  },

  data() {
    return {
      students: [],
      mostRecentStudent: {}
    }
  },

  mounted() {
    this.updateStudents()
  },

  methods: {

    updateStudents() {
      this.$student_api.getAllStudents().then( students => (
          // store data returned from API in empty "students" array
          this.students = students
      ))
      .catch( () => alert('Unable to fetch student list'))
    },

    newStudentAdded(student) {
      this.$student_api.addStudent(student).then( () => {
        this.updateStudents()
      })
      .catch( err => {
        let msg = err.response.data.join(',')
        alert('Error adding student\n' + msg)
      })
    },

    studentArrivedOrLeft(student, present) {
      student.present = present
      this.$student_api.updateStudent(student).then( () => {
        this.mostRecentStudent = student
        this.updateStudents()
      })
      .catch( () => alert('Unable to update student'))
    },

    studentDeleted(student) {
      this.$student_api.deleteStudent(student.id).then( () => {
        this.updateStudents()
        this.mostRecentStudent = {}  // clear welcome/goodbye message
      })
      .catch( () => alert('Unable to delete student'))
    }

  }

}

</script>

<style>

@import "https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
/* styles are also applied to any child components - all 3 other components in this case */

</style>
