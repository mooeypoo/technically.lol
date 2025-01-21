<template>
  <form
    name="contact-me"
    action="/thanks"
    id="contact-me"
    method="POST"
    netlify
    data-netlify="true" 
    data-netlify-honeypot="bot-field" 
    netlify-honeypot="bot-field" 
  >
    <v-card>
      <v-card-item>
        <input type="hidden" name="form-name" value="contact-me" />
        <div hidden>
          <label>
            Do not fill this out if you are human: <input name="bot-field" v-model="formBotField" />
          </label>
        </div>
        <v-text-field
          v-model="formName"
          label="Name"
          name="fullname"
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
        <input type="submit" color="primary" value="SEND" />
      </v-card-item>
    </v-card>
  </form>
</template>

<script setup>
// ----------
// -- NOTE --
// It would've been great if this worked, but it doesn't.
// The website had to be transformed to completely static
// so that the static form works; the dynamic form did not
// work even though there's a fake form with all fields, ad the
// form was recognized by netlify-- but no submissions were
// received. the only thing that worked was to transform the
// entire site to static. 

// import { ref } from 'vue';

// const formName = ref('')
// const formEmail = ref('')
// const formMessage = ref('')
// const formBotField = ref('')

// const FormState = {
//   IDLE: "IDLE",
//   PENDING: "PENDING",
//   SUCCESS: "SUCCESS",
//   ERROR: "ERROR",
//   EMPTY: "EMPTY",
// }

// const contactFormState = ref(FormState.IDLE)
// const handleSubmit = async () => {
//   if (formName.value === '' || formEmail.value === '' || formMessage.value === '') {
//     contactFormState.value = FormState.EMPTY;
//     return false;
//   }

//   contactFormState.value = FormState.PENDING;
//   try {
//     debugger
//     const response = await fetch('/_contactcopy.html', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       body: new URLSearchParams({
//         'form-name': 'contact-me',
//         'bot-field': formBotField.value,
//         fullname: formName.value,
//         email: formEmail.value,
//         message: formMessage.value,
//       }).toString()
//     });

//     if (response.ok) {
//       contactFormState.value = FormState.SUCCESS;
//       formName.value = '';
//       formEmail.value = '';
//       formMessage.value = '';
//     } else {
//       contactFormState.value = FormState.ERROR;
//       console.log("Contact form: response not ok", error);
//     }
//   } catch (error) {
//     contactFormState.value = FormState.ERROR;
//     console.log("Contact form: error sending contact form", error);
//   } finally {
//     setTimeout(() => {
//       contactFormState.value = FormState.IDLE;
//     }, 10000);
//   }
// };
</script>
