<template>
    <div class="p-6 border rounded shadow">
      <h2 class="text-xl font-bold">{{ contact.firstName }} {{ contact.lastName }}</h2>
      <p>Email: {{ contact.email }}</p>
      <button @click="deleteContact" class="bg-red-500 text-white p-2 mt-4 rounded">Delete Contact</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        contact: JSON.parse(localStorage.getItem('contacts')).find(c => c.id === parseInt(this.$route.params.id)),
      };
    },
    methods: {
      deleteContact() {
        let contacts = JSON.parse(localStorage.getItem('contacts')).filter(c => c.id !== this.contact.id);
        localStorage.setItem('contacts', JSON.stringify(contacts));
        this.$router.push('/');
      },
    },
  };
  </script>
  