<template>
    <v-row>
        <v-col>
            <v-card>
                <v-card-title>Обращения в тех. поддержку</v-card-title>
                <v-list>
                    <v-list-item v-for="mes in messages">
                        <v-list-item-content>
                            <v-list-item-title>{{ mes.email }}</v-list-item-title>
                            <v-list-item-subtitle>{{ mes.message }}</v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-action>
                            <v-btn dark @click="check(mes.id)" color="green accent-4">
                                Отметить
                            </v-btn>
                        </v-list-item-action>
                    </v-list-item>
                </v-list>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    import axios from "axios"

    export default {
        name: "SupportMessages",
        data() {
            return {
                messages: [],
            }
        },
        methods: {
            check(id) {
                axios.post(this.$store.getters.getAPIurl + "/support/check", {
                    id: id
                }).then(()=>{
                    this.fetchMessages();
                });
            },
            fetchMessages() {
                axios.post(this.$store.getters.getAPIurl + "/support/list", {
                    status: 0
                }).then((res)=>{
                    this.messages = res.data.data.list;
                });
            }
        },
        mounted() {
            this.fetchMessages();
        }
    }
</script>

<style scoped>

</style>