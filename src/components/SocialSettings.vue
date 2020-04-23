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

        <!--Таблица с данными-->
        <v-data-table
                class="mt-3"
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
                                type="number"
                                v-model="props.item.price"
                                label="Изменить"
                                single-line
                        ></v-text-field>
                    </template>
                </v-edit-dialog>
            </template>
            <template v-slot:item.botPrice="props">
                <v-edit-dialog
                        :return-value.sync="props.item.botPrice"
                        @save="save"
                        @cancel="cancel"
                        @open="open"
                        @close="close"> {{ props.item.botPrice }}
                    <template v-slot:input>
                        <v-text-field
                                type="number"
                                v-model="props.item.botPrice"
                                label="Изменить"
                                single-line
                        ></v-text-field>
                    </template>
                </v-edit-dialog>
            </template>
            <template v-slot:item.humans="{ item }">
                <v-simple-checkbox @input="save" v-model="item.humans"></v-simple-checkbox>
            </template>
            <template v-slot:item.bots="{ item }">
                <v-simple-checkbox @input="save" v-model="item.bots"></v-simple-checkbox>
            </template>
        </v-data-table>

        <!--Всплывашка-->
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
                pagination: {},
                headers: [
                    {
                        text: 'Целевое действие',
                        align: 'start',
                        value: 'title',
                    },
                    { text: 'Цена за единицу', value: 'price' },
                    { text: 'Цена (боты)', value: 'botPrice' },
                    { text: 'Люди', value: 'humans' },
                    { text: 'Боты', value: 'bots' },
                ],
            }
        },
        computed: {
            activities: {
                get() {
                    let res = Array.from(this.social.cheatingTypes);

                    for(let i in res) {
                        res[i] = Object.assign({}, {
                            price: 50,
                            botPrice: 10,
                            bots: true,
                            humans: false
                        }, res[i])
                    }

                    return res
                },
                set(val) {
                }
            }
        },
        mounted() {
            this.testingActivity = this.social.cheatingTypes[0].id;
        },
        methods: {
            save () {
                this.snack = true
                this.snackColor = 'success'
                this.snackText = 'Изменения сохранены'
                console.log(this.activities)
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