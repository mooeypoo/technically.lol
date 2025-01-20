<template>
  <v-card>
    <v-card-item>
      <v-alert
        v-if="contactFormState === FormState.SUCCESS"
        type="success"
        dismissible
        border="left"
        elevation="2"
      >
        Message sent! Thank you!
      </v-alert>
      <v-alert
        v-if="contactFormState === FormState.ERROR"
        type="error"
        dismissible
        border="left"
        elevation="2"
      >
        Oh no, an error occurred. Please try again!
      </v-alert>

    </v-card-item>
    <v-card-item>
      <form
        method="POST"
        name="Contact"
        id="Contact"
        netlify
        data-netlify="true"
        data-netlify-honeypot="bot-field" 
      >
        <div hidden>
          <label>
            Don't fill this out if you're human: <input name="bot-field" ref="bot-field" />
          </label>
        </div>
        <input type="hidden" name="form-name" value="Contact" />
        <label for="name">Name:
          <input
            v-model="formName"
            type="text"
            label="Name"
            name="name"
            required
          ></input>
        </label>

        <label for="email">Email:
          <input
            v-model="formEmail"
            label="Email"
            name="email"
            type="email"
            required
          ></input></label>

        <label for="message">Message:
          <textarea
            v-model="formMessage"
            label="Message"
            name="message"
            required
          ></textarea>
        </label>

        <button type="submit">Send</button>
      </form>
    </v-card-item>
  </v-card>
</template>

<script setup>
import { ref } from 'vue';

const formName = ref('')
const formEmail = ref('')
const formMessage = ref('')
const formBotField = useTemplateRef('bot-field')

const FormState = {
  IDLE: "IDLE",
  PENDING: "PENDING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
}

const contactFormState = ref(FormState.IDLE)

const handleSubmit = async (e) => {
  e.preventDefault();

  contactFormState.value = FormState.PENDING;
  try {
    const response = await fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        'form-name': 'Contact',
        'bot-field': formBotField.value.value,
        name: formName.value,
        email: formEmail.value,
        message: formMessage.value,
      }).toString()
    });

    if (response.ok) {
      contactFormState.value = FormState.SUCCESS;
      formName.value = '';
      formEmail.value = '';
      formMessage.value = '';
    } else {
      contactFormState.value = FormState.ERROR;
    }
  } catch (error) {
    contactFormState.value = FormState.ERROR;
    console.log("error sending contact form", error);
  } finally {
    setTimeout(() => {
      contactFormState.value = FormState.IDLE;
    }, 10000);
  }
};
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input, textarea {
    width: 80%;
    min-width: 300px;
    max-width: 400px;
    padding: 0 1rem;
    border: 1px solid #7c7c7c;
    border-radius: 0.25rem;
    vertical-align: top;
  }

  textarea {
    height: 200px;
  }
}
</style>
