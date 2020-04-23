<template>
    <v-card flat class="pt-6 pb-6">
        <v-row class="align-center">
            <v-col cols="2">
                Тестовое задание:
            </v-col>
            <v-col cols="4">
                <v-select v-model="testingActivity"
                          item-text="title"
                          item-value="id"
                          :items="activities"></v-select>
            </v-col>
            <v-col cols="4">
                <v-text-field v-model="testingActivityData"
                              label="Ссылка"></v-text-field>
            </v-col>
        </v-row>
        <v-data-table
                :headers="headers"
                :items="activities">
            <template v-slot:item.price="props">
                <v-edit-dialog
                        :return-value.sync="props.item.price"
                        @save="save"
                        @cancel="cancel"
                        @open="open"
                        @close="close"> {{ props.item.price }}
                    <template v-slot:input>
                        <v-text-field
                                v-model="props.item.price"
                                label="Изменить"
                                single-line
                        ></v-text-field>
                    </template>
                </v-edit-dialog>
            </template>
        </v-data-table>

        <v-snackbar v-model="snack" :timeout="3000" :color="snackColor">
            {{ snackText }}
            <v-btn text @click="snack = false">Закрыть</v-btn>
        </v-snackbar>
    </v-card>
</template>

<script>
    export default {
        props: {
            social: {
                type: Object,
                required: true
            }
        },
        name: "SocialSettings",
        data() {
            return {
                testingActivityData: "",
                testingActivity: null,
                snack: false,
                snackColor: '',
                snackText: '',
                activities: [],
                pagination: {},
                headers: [
                    {
                        text: 'Целевое действие',
                        align: 'start',
                        value: 'title',
                    },
                    { text: 'Цена за единицу', value: 'price' },
                    { text: 'Люди', value: 'humans' },
                    { text: 'Боты', value: 'bots' },
                ],
            }
        },
        watch: {

        },
        mounted() {
            this.testingActivity = this.social.cheatingTypes[0].id;

            this.activities = Array.from(this.social.cheatingTypes);

            for(let i in this.activities) {
                this.activities[i] = Object.assign({}, {
                    price: 50,
                    bots: true,
                    humans: false
                }, this.activities[i])
            }
        },
        methods: {
            save () {
                this.snack = true
                this.snackColor = 'success'
                this.snackText = 'Изменения сохранены'
            },
            cancel () {
            },
            open () {
            },
            close () {
            },
        },
    }
</script>

<style scoped>

</style>