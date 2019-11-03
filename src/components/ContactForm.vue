<template>
    <div class="form-style">
        <form 
        name="contact"
        method="post"
        v-on:submit.prevent="handleSubmit"
        action="/success/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        >
            <h3 class="mt-4 py-4 px-2 bg-green-800 uppercase">Place your order & come collect when notified</h3>
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
            <label>
                Don’t fill this out: <input name="bot-field" />
            </label>
            </p>
            <div class="flex flex-col">
                <input class="w-full py-4 bg-red-700 border-solid border-b-2 border-green-800 rounded-b-sm placeholder-gray-200 focus:outline-none" for="name" type="text" name="name" v-model="formData.name" placeholder="Full Name" />
                <input class="py-4 bg-red-700 border-solid border-b-2 border-green-800 rounded-b-sm placeholder-gray-200 focus:outline-none" for="email" type="email" name="email" v-model="formData.email" placeholder="Email" />
                <input class="py-4 bg-red-700 border-solid border-b-2 border-green-800 rounded-b-sm placeholder-gray-200 focus:outline-none" for="email" type="number" name="number" v-model="formData.number" placeholder="Number" />
            </div>
            <div class="message-wrapper">
                <textarea class="w-full py-4 overflow-hidden bg-red-700 border-solid border-b-2 border-green-800 rounded-b-sm placeholder-gray-200 focus:outline-none" for="message" name="message" v-model="formData.message" @input="textareaResize" ref="textarea" placeholder="Message"></textarea>
            </div>
            <button class="mt-4 px-6 py-4 bg-green-800" type="submit">SEND MESSAGE</button>
        </form>
    </div>
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

<style scoped>
/*
.form-style{
	font-family: 'Open Sans Condensed', arial, sans;
	width: 30em;
    padding: 30px;
	background: #FFFFFF;
	box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
	-moz-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
	-webkit-box-shadow:  0px 0px 15px rgba(0, 0, 0, 0.22);

}
form h3 {
	background: #333;
	text-transform: uppercase;
	font-family: 'Open Sans Condensed', sans-serif;
	color: #f1f1f1;
	font-size: 18px;
	font-weight: 100;
	padding: 20px;
	margin: -30px -30px 30px -30px;
}
form input[type="text"],
form input[type="email"],
form input[type="number"],
form textarea,
form select 
{
	box-sizing: border-box;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	outline: none;
	display: block;
	width: 100%;
	padding: 7px;
	border: none;
	border-bottom: 1px solid #ddd;
	background: red-700;
	margin-bottom: 10px;
	font: 16px Arial, Helvetica, sans-serif;
	height: 45px;
}
form textarea{
	resize:none;
	overflow: hidden;
}
form button {
	-moz-box-shadow: inset 0px 1px 0px 0px #333;
	-webkit-box-shadow: inset 0px 1px 0px 0px #333;
	box-shadow: inset 0px 1px 0px 0px #333;
	background-color: #333;
	border: 1px solid #333;
	display: inline-block;
	cursor: pointer;
	color: #f1f1f1;
	font-family: 'Noto Sans', sans-serif;
	font-size: 14px;
	padding: 12px 18px;
	text-decoration: none;
	text-transform: uppercase;
}
form button:hover {
	background-color: #666;
} */
</style>