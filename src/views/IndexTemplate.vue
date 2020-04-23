<template>
    <div>
        <v-navigation-drawer
                v-model="drawer"
                app
                clipped
                :width="300">
            <v-list dense>
                <v-list-item link @click="$router.push({ name: 'current-requests' })">
                    <v-list-item-action>
                        <v-icon>mdi-map-marker-question-outline</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>
                            Заявки на вывод
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link @click="$router.push({ name: 'approved-requests' })">
                    <v-list-item-action>
                        <v-icon>mdi-check-all</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Список выплаченных заказов</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link @click="$router.push({ name: 'deposit-history' })">
                    <v-list-item-action>
                        <v-icon>mdi-cash-plus</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Транзакции пополнения баланса</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link @click="$router.push({ name: 'statistics' })">
                    <v-list-item-action>
                        <v-icon>mdi-chart-line</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Статистика</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link @click="$router.push({ name: 'social-management' })">
                    <v-list-item-action>
                        <v-icon>mdi-account-network</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Управление соц. сетями</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link @click="$router.push({ name: 'bots' })">
                    <v-list-item-action>
                        <v-icon>mdi-robot</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Боты</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar
                dark
                color="deep-purple accent-3"
                dence
                app
                clipped-left>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
            <v-toolbar-title color="#ffffff">Autolike</v-toolbar-title>
        </v-app-bar>

        <v-content>
            <v-container>
                <router-view></router-view>
            </v-container>
        </v-content>
    </div>
</template>

<script>
    export default {
        props: {
            source: String,
        },
        data: () => ({
            drawer: null,
        }),
        created() {
            this.$vuetify.theme.light = true
        },
    }
</script>