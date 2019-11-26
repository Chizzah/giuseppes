<template>
    <section>
        <form 
        name="contact"
        method="post"
        v-on:submit.prevent="handleSubmit"
        action="/success/"
        data-netlify="true"
        data-netlify-honeypot="bot-field""
        >
            <h5 class="p-4 bg-gray-900 text-gray-200 uppercase sm:text-lg">Make a reservation or book our venue</h5>
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
            <label>
                Don’t fill this out: <input name="bot-field" />
            </label>
            </p>
            <div class="flex flex-col">
                <input class="w-full py-4 border-solid border-b-2 bg-gray-200 border-gray-900 rounded-b-sm placeholder-gray-900 focus:outline-none" for="name" type="text" name="name" v-model="formData.name" placeholder="Full Name" />
                <input class="py-4 border-solid border-b-2 bg-gray-200 border-gray-900 rounded-b-sm placeholder-gray-900 focus:outline-none" for="email" type="email" name="email" v-model="formData.email" placeholder="Email" />
                <input class="py-4 border-solid border-b-2 bg-gray-200 border-gray-900 rounded-b-sm placeholder-gray-900 focus:outline-none" for="email" type="number" name="number" v-model="formData.number" placeholder="Number" />
            </div>
            <div class="message-wrapper">
                <textarea class="w-full py-4 overflow-hidden border-solid border-b-2 bg-gray-200 border-gray-900 rounded-b-sm placeholder-gray-900 focus:outline-none" for="message" name="message" v-model="formData.message" @input="textareaResize" ref="textarea" placeholder="Message"></textarea>
            </div>
            <button class="p-4 bg-gray-900 text-gray-200" type="submit">SEND MESSAGE</button>
        </form>
    </section>
</template>

<script>
export default {
    data() {
        return {
            formData: {},
        }
    },
    methods: {
        encode(data) {
            return Object.keys(data)
            .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
            .join('&')
        },
        handleSubmit(e) {
            fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: this.encode({
                'form-name': e.target.getAttribute('name'),
                ...this.formData,
            }),
            })
            .then(() => this.$router.push('/success'))
            .catch(error => alert(error))
        },
        textareaResize() {
            this.$refs.textarea.style.minHeight = this.$refs.textarea.scrollHeight + 'px';
        }
    },
        mounted() {
            this.$refs.textarea.style.minHeight = this.$refs.textarea.scrollHeight + 'px';
        }
}
</script>

<style lang="postcss" scoped>
    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
    }
</style>