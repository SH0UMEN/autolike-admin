<template>
    <v-row>
        <v-col cols="12">
            <v-card>
                <v-card-title>
                    Заявки на вывод
                </v-card-title>
                <v-list v-if="requests.length > 0">
                    <v-list-group v-for="r, i in requests">
                        <template v-slot:activator>
                            <v-list-item-title @click="getTasks(i)"
                                               class="d-inline-flex
                                                  align-center
                                                  justify-space-between">
                                <span>{{ r.name }} ({{ r.type == 1 ? 'Яндекс.Деньги' :
                                                       r.type == 2 ? 'WebMoney' : 'QIWI' }})</span>
                                <v-btn color="green accent-4" dark @click.stop="approve(i)">Одобрить</v-btn>
                            </v-list-item-title>
                        </template>

                        <v-skeleton-loader type="list-item" v-if="!r.tasks"></v-skeleton-loader>

                        <v-list-item
                                v-for="h, i in r.tasks"
                                :key="i">
                            <v-list-item-title>
                                <span class="d-inline-block ">{{ h.url }}</span>
                                <span class="d-inline-block ml-2">{{ h.price }} бал.</span>
                                <span class="d-inline-block ml-2">{{ formatDate(h.updated_at) }}</span>
                            </v-list-item-title>
                        </v-list-item>

                    </v-list-group>
                </v-list>
                <p v-else class="text-center pb-4">Заявки на вывод в текущий момент отсутствуют</p>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    import axios from "axios"

    export default {
        data() {
            return {
                requests: []
            }
        },
        methods: {
            formatDate(date) {
                let formattedDate = new Date(date.slice(0, 19));

                return `${ formattedDate.getDate() }.${ formattedDate.getMonth()+1 }.${ formattedDate.getFullYear() }г`;
            },
            getTasks(serialNumber) {
                if(!this.requests[serialNumber].tasks) {
                    axios({
                        method: "post",
                        url: this.$store.getters.getAPIurl + "/task",
                        data: {
                            user_id: this.requests[serialNumber].user_id
                        }
                    }).then((res) => {
                        this.requests[serialNumber] = Object.assign({ tasks: res.data.data.list }, this.requests[serialNumber]);
                        this.requests = this.requests.slice();
                    });
                }
            },
            approve(serialNumber) {
                axios({
                    method: "post",
                    url: this.$store.getters.getAPIurl + "/payment/request/approve",
                    data: {
                        id: this.requests[serialNumber].id
                    }
                }).then(() => {
                    this.requests = this.requests.filter((el, i) => {
                        return i != serialNumber;
                    })
                })
            }
        },
        mounted() {
            axios({
                method: "post",
                url: this.$store.getters.getAPIurl + "/payment/list/request"
            }).then((res) => {
                this.requests = res.data.data.list;
            })
        }
    }
</script>