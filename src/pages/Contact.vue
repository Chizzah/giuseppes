<template>
  <Layout>
    <section class="px-6 pb-6 text-gray-200 sm:ml-96 sm:px-20">
        <h2 class="py-8 text-lg sm:text-xl">Contact Us</h2>
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