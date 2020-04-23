<template>
    <v-row>
        <v-col>
            <v-card>
                <v-card-title>Управление соц. сетями</v-card-title>
                <v-tabs v-model="tabs"
                        show-arrows
                        fixed-tabs>
                    <v-tabs-slider></v-tabs-slider>
                    <v-tab  v-for="soc, i in socials"
                            :href="'#social-'+i"
                            class="primary--text">
                        <img :src="soc.picture" alt="">
                    </v-tab>
                </v-tabs>
                <v-divider></v-divider>
                <v-tabs-items v-model="tabs" class="pl-4 pr-4">
                    <v-tab-item
                            v-for="soc, i in socials"
                            :key="i"
                            :value="'social-' + i">
                        <social-settings :social="soc"></social-settings>
                    </v-tab-item>
                </v-tabs-items>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    import socials from "../helpers/socials"
    import SocialSettings from "../components/SocialSettings"

    export default {
        name: "SocialsManagement",
        components: {
            SocialSettings
        },
        data() {
            return {
                tabs: null,
                socials: socials,
            }
        },
    }
</script>

<style scoped>

</style>