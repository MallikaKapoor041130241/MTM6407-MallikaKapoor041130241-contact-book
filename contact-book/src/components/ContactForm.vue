<template>
    <div class="p-4 border rounded shadow">
      <input v-model="firstName" type="text" placeholder="First Name" class="p-2 border rounded w-full mb-2" />
      <input v-model="lastName" type="text" placeholder="Last Name" class="p-2 border rounded w-full mb-2" />
      <input v-model="email" type="email" placeholder="Email" class="p-2 border rounded w-full mb-2" />
      <button @click="submitForm" class="bg-blue-500 text-white p-2 rounded">Save Contact</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return { firstName: '', lastName: '', email: '' };
    },
    methods: {
      submitForm() {
        this.$emit('add-contact', { id: Date.now(), firstName: this.firstName, lastName: this.lastName, email: this.email });
      },
    },
  };
  </script>
  