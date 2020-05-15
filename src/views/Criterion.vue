<template>
    <v-row>
        <v-col>
            <v-card>
                <v-card-title>Критерии исполнителей</v-card-title>

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
                <v-tabs-items v-model="tabs" class="px-4 py-6">
                    <v-tab-item
                            v-for="soc, i in socials"
                            :key="i"
                            :value="'social-' + i">
                        <criterion-settings :soc="soc.id"></criterion-settings>
                    </v-tab-item>
                </v-tabs-items>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    import socials from "../helpers/socials"
    import CriterionSettings from "../components/CriterionSettings"

    export default {
        name: "Criterion",
        components: {
            CriterionSettings
        },
        data() {
            return {
                tabs: null,
                socials: socials,
            }
        },
        mounted() {
            this.$store.dispatch("fetchCriterions");
        }
    }
</script>

<style scoped>

</style>