<template>
    <v-row>
        <v-col cols="12">
            <v-card>
                <v-card-title>
                    Транзакции пополнения баланса
                </v-card-title>
                <v-row class="pl-4">
                    <v-col cols="2">
                        <v-menu
                                ref="date-start"
                                v-model="menuStart"
                                transition="scale-transition"
                                offset-y
                                max-width="290px">
                            <template v-slot:activator="{ on }">
                                <v-text-field
                                        v-model="dateStartFormatted"
                                        label="Дата (с)"
                                        prepend-icon="mdi-calendar-week-begin"
                                        readonly
                                        v-on="on">
                                </v-text-field>
                            </template>
                            <v-date-picker locale="ru" v-model="dateStart" @input="fetchInfo" no-title scrollable>
                                <v-spacer></v-spacer>
                                <v-btn text color="primary" @click="menuStart = false">Cancel</v-btn>
                                <v-btn text color="primary" @click="$refs['date-start'].save(dateStart)">OK</v-btn>
                            </v-date-picker>
                        </v-menu>
                    </v-col>
                    <v-col cols="2">
                        <v-menu
                                ref="date-end"
                                v-model="menuEnd"
                                transition="scale-transition"
                                offset-y
                                max-width="290px">
                            <template v-slot:activator="{ on }">
                                <v-text-field
                                        v-model="dateEndFormatted"
                                        label="Дата (по)"
                                        prepend-icon="mdi-calendar-weekend"
                                        readonly
                                        v-on="on">
                                </v-text-field>
                            </template>
                            <v-date-picker locale="ru" v-model="dateEnd" @input="fetchInfo" no-title scrollable>
                                <v-spacer></v-spacer>
                                <v-btn text color="primary" @click="menuEnd = false">Cancel</v-btn>
                                <v-btn text color="primary" @click="$refs['date-end'].save(dateEnd)">OK</v-btn>
                            </v-date-picker>
                        </v-menu>
                    </v-col>
                </v-row>
                <v-data-table
                        no-data-text="Нет данных, соответствующих заданному интервалу"
                        :headers="headers"
                        :items="items"
                        :items-per-page="5"
                        class="elevation-1"
                ></v-data-table>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    import axios from "axios"

    export default {
        name: "DepositHistory",
        watch: {
            dateStart: {
                handler(val) {
                    this.dateStartFormatted = this.formatDate(val)
                },
                immediate: true
            },
            dateEnd: {
                handler(val) {
                    this.dateEndFormatted = this.formatDate(val)
                },
                immediate: true
            }
        },
        methods: {
            formatServerDate(date) {
                let formattedDate = new Date(date.slice(0, 19));

                return `${ formattedDate.getDate() }.${ formattedDate.getMonth()+1 }.${ formattedDate.getFullYear() }`;
            },
            formatDate(date) {
                if(!date) {
                    return null
                }

                const [year, month, day] = date.split("-");
                return `${day}.${month}.${year}`;
            },
            fetchInfo() {
                return axios.post(this.$store.getters.getAPIurl + "/payment/list/append", {
                    from: this.dateStart,
                    to: this.dateEnd
                }).then((res) => {
                    this.items = res.data.data.list;

                    for(let item of this.items) {
                        item.updated_at = this.formatServerDate(item.updated_at);
                    }
                })
            }
        },
        mounted() {
            this.fetchInfo();
        },
        data () {
            return {
                menuStart: false,
                menuEnd: false,
                dateStart: new Date("2020-01-01").toISOString().substr(0, 10),
                dateEnd: new Date().toISOString().substr(0, 10),
                dateStartFormatted: "",
                dateEndFormatted: "",
                headers: [
                    {
                        text: 'Пользователь',
                        align: 'start',
                        value: 'name',
                    },
                    { text: 'Сумма', value: 'amount' },
                    { text: 'Дата внесения', value: 'updated_at' },
                ],
                items: []
            }
        },
    }
</script>

<style>

</style>