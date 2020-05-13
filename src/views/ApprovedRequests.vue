<template>
    <v-row>
        <v-col cols="12">
            <v-card>
                <v-card-title>
                    Выплаченные заказы
                </v-card-title>
                <v-data-table
                        no-data-text="Нет выплаченных заказов"
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
        name: "ApprovedRequests",
        mounted() {
             axios.post(this.$store.getters.getAPIurl + "/payment/list/complete").then((res)=>{
                 this.items = res.data.data.list;

                 for(let item of this.items) {
                     item.updated_at = this.formatDate(item.updated_at);
                 }
             })
        },
        data () {
            return {
                headers: [
                    {
                        text: 'Пользователь',
                        align: 'start',
                        value: 'name',
                    },
                    { text: 'Сумма', value: 'amount' },
                    { text: 'Дата выплаты', value: 'updated_at' },
                ],
                items: []
            }
        },
        methods: {
            formatDate(date) {
                let formattedDate = new Date(date.slice(0, 19));

                return `${ formattedDate.getDate() }.${ formattedDate.getMonth()+1 }.${ formattedDate.getFullYear() }`;
            }
        }
    }
</script>

<style>

</style>