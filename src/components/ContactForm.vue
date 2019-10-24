<template>
    <form 
    name="contact"
    method="post"
    v-on:submit.prevent="handleSubmit"
    action="/success/"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    >
    <input type="hidden" name="form-name" value="contact" />
    <p hidden>
        <label>
        Don’t fill this out: <input name="bot-field" />
        </label>
    </p>
    <div class="sender-info">
        <div>
        <label for="name" class="label" >Name</label>
        <input type="text" name="name" v-model="formData.name" />
        </div>
        <div>
        <label for="email">E-mail</label>
        <input type="email" name="email" v-model="formData.email" />
        </div>
        <label for="email">Number</label>
        <input type="number" name="number" v-model="formData.number" />
        </div>
    </div>

    <div class="message-wrapper">
        <label for="message">Message</label>
        <textarea name="message" v-model="formData.message" rows="5" cols="50"></textarea>
    </div>

    <button type="submit">Submit form</button>
    </form>
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
        }
    }
}
</script>

<style scoped>
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 50em;
        height: 20em;
        margin-top: 5em;
        border: 1px solid black;
    }
</style>