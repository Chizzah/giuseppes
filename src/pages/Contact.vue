<template>
  <Layout>
    <section class="px-6 pb-64 text-gray-200 sm:ml-96 sm:px-20">
        <h2 class="pt-8 pb-3 text-2xl">Contact Us</h2>
        <ContactForm />
    </section>
  </Layout>
</template>

<script>
import ContactForm from '~/components/ContactForm';

export default {
  components: {
    ContactForm
  }
}
</script>