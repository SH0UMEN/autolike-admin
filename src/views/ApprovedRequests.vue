<template>
    <v-row>
        <v-col cols="12">
            <v-card>
                <v-card-title>
                    Выплаченные заказы
                </v-card-title>
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
        name: "ApprovedRequests",
        data () {
            return {
                headers: [
                    {
                        text: 'Пользователь',
                        align: 'start',
                        value: 'user',
                    },
                    { text: 'Сумма', value: 'money' },
                    { text: 'Дата выплаты', value: 'date' },
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