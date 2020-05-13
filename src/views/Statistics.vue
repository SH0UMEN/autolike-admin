<template>
    <v-row>
        <v-col>
            <v-card class="pb-3">
                <v-card-title>Статистика</v-card-title>
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

                <v-subheader>Расходы:</v-subheader>

                <v-list class="py-0">
                    <v-list-item v-for="item, i in items.expense"
                                 :key="i">
                        На {{ formatServerDate(item.name) }}: {{ item.sum }} руб.
                    </v-list-item>
                </v-list>

                <v-subheader>Прибыль: </v-subheader>

                <v-list class="py-0">
                    <v-list-item v-for="item, i in items.profit"
                                 :key="i">
                        На {{ formatServerDate(item.name) }}: {{ item.sum }} руб.
                    </v-list-item>
                </v-list>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    import axios from "axios"

    export default {
        name: "Statistics",
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
                return axios.post(this.$store.getters.getAPIurl + "/payment/summary", {
                    from: this.dateStart,
                    to: this.dateEnd
                }).then((res) => {
                    this.items = res.data;
                });
            }
        },
        mounted() {
            this.fetchInfo();
        },
        data() {
            return {
                menuStart: false,
                menuEnd: false,
                dateStart: new Date("2020-01-01").toISOString().substr(0, 10),
                dateEnd: new Date().toISOString().substr(0, 10),
                dateEndFormatted: "",
                dateStartFormatted: "",
                items: []
            }
        }
    }
</script>

<style scoped>

</style>