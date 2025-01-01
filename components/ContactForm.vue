<template>
    <v-card
        class="mx-auto"
        max-width="500"
    >
      <v-card-item>
        <form
          name="contact"
          method="post"
          data-netlify="true"
          action="/"
        >
          <input type="hidden" name="form-name" value="contact">

          <v-text-field name="Name" label="Your name"></v-text-field>
          <v-text-field name="Email" label="Your email"></v-text-field>
          <v-textarea
            label="Your message"
            name="message"
            filled
            required
          />
          <v-btn variant="flat" color="primary" type="submit">Submit</v-btn>
        </form>
      </v-card-item>
    </v-card>
</template>
