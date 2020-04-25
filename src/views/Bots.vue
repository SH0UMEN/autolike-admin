<template>
    <v-row>
        <v-col>
            <v-card>
                <v-card-title>Боты</v-card-title>
                <v-simple-table>
                    <template v-slot:default>
                        <thead>
                        <tr>
                            <th class="text-left">Соц. сеть</th>
                            <th class="text-left">Кол-во доступных ботов</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="count, i in bots" :key="i">
                            <td>{{ socs[i] }}</td>
                            <td>{{ count }}</td>
                        </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    import axios from "axios"

    export default {
        name: "Bots",
        data() {
            return {
                bots: [],
                socs: [
                    "Instagram",
                    "Vkontakte",
                    "Telegram",
                    "Twitter"
                ]
            }
        },
        mounted() {
            axios.post(this.$store.getters.getAPIurl + "/bot").then((res)=>{
                this.bots = res.data.data.counts;
            })
        }
    }
</script>

<style scoped>

</style>