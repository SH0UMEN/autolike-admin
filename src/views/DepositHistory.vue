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
                                        v-model="dateStart"
                                        label="Дата (с)"
                                        prepend-icon="mdi-calendar-week-begin"
                                        readonly
                                        v-on="on">
                                </v-text-field>
                            </template>
                            <v-date-picker v-model="dateStart" no-title scrollable>
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
                                        v-model="dateEnd"
                                        label="Дата (по)"
                                        prepend-icon="mdi-calendar-weekend"
                                        readonly
                                        v-on="on">
                                </v-text-field>
                            </template>
                            <v-date-picker v-model="dateEnd" no-title scrollable>
                                <v-spacer></v-spacer>
                                <v-btn text color="primary" @click="menuEnd = false">Cancel</v-btn>
                                <v-btn text color="primary" @click="$refs['date-end'].save(dateEnd)">OK</v-btn>
                            </v-date-picker>
                        </v-menu>
                    </v-col>
                </v-row>
                <v-data-table
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
    export default {
        name: "DepositHistory",
        data () {
            return {
                menuStart: false,
                menuEnd: false,
                dateStart: null,
                dateEnd: null,
                headers: [
                    {
                        text: 'Пользователь',
                        align: 'start',
                        value: 'user',
                    },
                    { text: 'Сумма', value: 'money' },
                    { text: 'Дата внесения', value: 'date' },
                ],
                items: [
                    {
                        user: 'shoumen',
                        money: 1000,
                        date: "23.04.2020"
                    },
                    {
                        user: 'shoumen',
                        money: 1300,
                        date: "23.04.2020"
                    },
                    {
                        user: 'pony',
                        money: 1500,
                        date: "23.04.2020"
                    },
                    {
                        user: 'pony',
                        money: 2000,
                        date: "23.04.2020"
                    },
                    {
                        user: 'shoumen',
                        money: 1300,
                        date: "23.04.2020"
                    },
                    {
                        user: 'pony',
                        money: 1500,
                        date: "23.04.2020"
                    },
                    {
                        user: 'shoumen',
                        money: 1300,
                        date: "23.04.2020"
                    },
                    {
                        user: 'pony',
                        money: 1500,
                        date: "23.04.2020"
                    },
                    {
                        user: 'shoumen',
                        money: 1300,
                        date: "23.04.2020"
                    },
                    {
                        user: 'pony',
                        money: 1500,
                        date: "23.04.2020"
                    },
                ],
            }
        },
    }
</script>

<style>

</style>