<template>
    <v-container class="fill-height">
        <v-row>
            <v-col class="d-flex justify-center">
                <v-card max-width="500px" width="100%">
                    <v-card-title>Авторизация</v-card-title>
                    <v-form v-model="valid" @submit.prevent="login" class="mb-5 pl-4 pr-4">
                        <v-text-field label="Email"
                                      name="email"
                                      v-model="email"
                                      :rules="rulesForEmail"></v-text-field>
                        <v-text-field v-model="password"
                                      class="pt-0 mt-4"
                                      name="password"
                                      label="Пароль"
                                      :rules="rulesForPassword"
                                      type="password"></v-text-field>
                        <p v-for="err in errors" class="text-center red--text">{{ err }}</p>
                        <v-btn :disabled="!valid" class="mt-5"
                               type="submit"
                               color="deep-purple accent-3" width="100%"
                               large :dark="valid">Войти</v-btn>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "Auth",
        methods: {
            login() {
                this.errors = [];

                this.$store.dispatch("auth", {
                    email: this.email,
                    password: this.password
                }).then((res)=>{
                    this.$router.push({ name: "index" })
                }).catch((err)=>{
                    if(err.response.data.errors.credentials) {
                        this.errors.push(err.response.data.errors.credentials);
                    }
                })
            }
        },
        data() {
            return {
                errors: [],
                valid: "",
                password: "",
                email: "",
                rulesForEmail: [
                    value => !!value || 'Обязательное поле',
                    value => {
                        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        return pattern.test(value) || 'Некорректный email'
                    },
                ],
                rulesForPassword: [
                    value => value.length < 6 ? 'Не менее 6 символов' : true
                ]
            }
        }
    }
</script>

<style scoped>

</style>