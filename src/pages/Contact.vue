<template>
  <Layout>
    <section class="h-screen px-6 text-gray-200 sm:ml-96 sm:px-32">
        <h2 class="py-8 text-2xl">Contact Us</h2>
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