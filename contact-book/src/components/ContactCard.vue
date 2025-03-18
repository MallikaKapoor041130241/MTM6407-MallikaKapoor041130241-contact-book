<template>
    <div class="p-4 border rounded shadow mb-4">
      <router-link :to="'/contact/' + contact.id" class="text-blue-500 font-bold">
        {{ contact.firstName }} {{ contact.lastName }}
      </router-link>
      <button @click="$emit('delete-contact', contact.id)" class="bg-red-500 text-white p-2 rounded ml-4">Delete</button>
    </div>
  </template>
  
  <script>
  export default {
    props: ['contact'],
  };
  </script>
  