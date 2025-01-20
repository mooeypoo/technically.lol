<template>
  <v-card>
    <v-card-item>
      <form
        method="post"
        name="Contact"
        id="Contact"
        data-netlify="true"
        data-netlify-honeypot="bot-field" 
        @submit.prevent="handleSubmit"
        netlify
      >
        <div hidden>
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </div>
        <input type="hidden" name="form-name" value="Contact" />
        <v-text-field
          v-model="formName"
          label="Name"
          name="name"
          required
        ></v-text-field>

        <v-text-field
          v-model="formEmail"
          label="Email"
          name="email"
          type="email"
          required
        ></v-text-field>

        <v-textarea
          v-model="formMessage"
          label="Message"
          name="message"
          required
        ></v-textarea>

        <v-btn type="submit" color="primary">Send</v-btn>
      </form>
    </v-card-item>
  </v-card>
</template>

<script setup>
import { ref } from 'vue';

const formName = ref('')
const formEmail = ref('')
const formMessage = ref('')

const handleSubmit = async () => {
  try {
    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        'form-name': 'Contact',
        name: formName.value,
        email: formEmail.value,
        message: formMessage.value
      }).toString()
    });
    if (response.ok) {
      alert('Form submitted successfully!');
      formName.value = '';
      formEmail.value = '';
      formMessage.value = '';
    } else {
      alert('Oops, something went wrong! Please try again.');
    }
  } catch (error) {
    console.error('Form submission error:', error);
    alert('Oops, something went wrong! Please try again.');
  }
};
</script>
