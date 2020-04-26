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
                <v-list-item link @click="$router.push({ name: 'support-messages' })">
                    <v-list-item-action>
                        <v-icon>mdi-email</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Обращения в тех. поддержку</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link @click="$router.push({ name: 'support-history' })">
                    <v-list-item-action>
                        <v-icon>mdi-email-open</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>История обращений</v-list-item-title>
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
                <v-list-item link @click="logoutDialog = true">
                    <v-list-item-action>
                        <v-icon>mdi-exit-to-app</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Выход</v-list-item-title>
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

        <!--Logout dialog-->
        <v-dialog
                v-model="logoutDialog"
                max-width="290">
            <v-card>
                <v-card-title class="headline">Выход</v-card-title>

                <v-card-text>
                    Вы уверены, что хотите выйти?
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                            color="green darken-1"
                            text
                            @click="logoutDialog = false">
                        Нет
                    </v-btn>

                    <v-btn
                            color="green darken-1"
                            text
                            @click="logout">
                        Да
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    export default {
        props: {
            source: String,
        },
        data: () => ({
            logoutDialog: false,
            drawer: null,
        }),
        created() {
            this.$vuetify.theme.light = true
        },
        methods: {
            logout() {
                this.$store.dispatch("logout").then(()=>{
                    this.logoutDialog = false;
                    this.$router.push({ name: "auth" })
                })
            }
        }
    }
</script>