<template>
  <Layout>
    <div class="container">
      <h1>Contact Us</h1>
      <ContactForm />
    </div>
  </Layout>
</template>

<script>
import ContactForm from '~/components/ContactForm';

export default {
  metaInfo: {
    title: "Mango's Restaurant & Bar"
  },
  components: {
    ContactForm
  }
}
</script>