<template>
    <div class="mt-6">
      <input v-model="search" type="text" placeholder="Search contacts..." class="p-2 border rounded w-full mb-4" />
      <button @click="showForm = !showForm" class="bg-green-500 text-white p-2 rounded mb-4">+ Add Contact</button>
  
      <ContactForm v-if="showForm" @add-contact="addContact" />
      
      <div v-for="contact in filteredContacts" :key="contact.id">
        <ContactCard :contact="contact" @delete-contact="deleteContact" />
      </div>
    </div>
  </template>
  
  <script>
  import ContactCard from '../components/ContactCard.vue';
  import ContactForm from '../components/ContactForm.vue';
  
  export default {
    components: { ContactCard, ContactForm },
    data() {
      return {
        contacts: JSON.parse(localStorage.getItem('contacts')) || [],
        search: '',
        showForm: false,
      };
    },
    computed: {
      filteredContacts() {
        return this.contacts
          .filter(c => c.firstName.toLowerCase().includes(this.search.toLowerCase()) || c.lastName.toLowerCase().includes(this.search.toLowerCase()))
          .sort((a, b) => a.lastName.localeCompare(b.lastName));
      },
    },
    methods: {
      addContact(newContact) {
        this.contacts.push(newContact);
        localStorage.setItem('contacts', JSON.stringify(this.contacts));
      },
      deleteContact(id) {
        this.contacts = this.contacts.filter(c => c.id !== id);
        localStorage.setItem('contacts', JSON.stringify(this.contacts));
      },
    },
  };
  </script>
  