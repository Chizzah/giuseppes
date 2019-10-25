<template>
  <Layout>
    <div class="container">
      <h1>Contact Us</h1>
      <ContactForm />
      <VueMaps />
    </div>
  </Layout>
</template>

<script>
import ContactForm from '~/components/ContactForm';
import VueMaps from '~/components/VueMaps';

export default {
  metaInfo: {
    title: "Mango's Restaurant & Bar"
  },
  components: {
    ContactForm,
    VueMaps
  }
}
</script>