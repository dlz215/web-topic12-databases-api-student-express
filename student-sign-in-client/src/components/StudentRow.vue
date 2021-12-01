<template>

  <tr v-bind:class="{present: student.present, absent: !student.present}">

    <td>{{ student.name }}</td>
    <td>{{ student.starID }}</td>

    <!-- Considered bad practice to update the value of a prop from within the same child component where that prop
    is defined. Should have only one source from which a prop can be updated to avoid conflicts. -->

    <!-- Should not update the "present" value from within the StudentTable component. Instead emit event to App.vue
    when checkbox is checked/unchecked and App.vue will update data. "Data down, events up" -->

    <td>
      <input type="checkbox"
             v-bind:checked="student.present"
             v-on:change="arrivedOrLeft(student, $event.target.checked)"
      >
      <!-- v-bind used to bind the "checked" property to the "present" value of each student in array. If "student.present" is true,
      box has checked property -->
      <!-- "$event.target" is element generating event (the checkbox). "checked" is property of that element being examined.
      Checking box passes student data and checked/unchecked boolean to arrivedOrLeft method. -->
    </td>

    <!-- delete button will only show if "edit" value is true   v-show="{boolean}" -->
    <td v-show="edit">
      <img v-on:click="deleteStudent" src="@/assets/delete.png">
    </td>

  </tr>

</template>

<script>

export default {

  name: 'StudentRow',

  emits: ['student-arrived-or-left', 'delete-student'],

  props: {
    student: Object,
    edit: Boolean
  },

  methods: {
    /* Emit student whose box was checked/unchecked plus their boolean "present" value to StudentTable.vue */
    arrivedOrLeft(student, present) {
      this.$emit('student-arrived-or-left', student, present)
    },

    deleteStudent() {
      if (confirm(`Delete ${this.student.name}?`)) {
        this.$emit('delete-student', this.student)
      }
    }
  }
}

</script>

<style scoped>

.present {
  color: gray;
  font-style: italic;
}

.absent {
  color: black;
  font-weight: bold;
}

</style>