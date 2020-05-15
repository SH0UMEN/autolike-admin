<template>
    <v-dialog max-width="500px" v-model="dialog">
        <v-card>
            <v-card-title>
                Редактор критериев
                <v-spacer></v-spacer>
                <v-btn icon small @click="dialog = false">
                    <v-icon>
                        mdi-close
                    </v-icon>
                </v-btn>
            </v-card-title>
            <v-card-text>
                <v-form v-model="valid" @submit.prevent="doAction">
                    <v-text-field label="Название критерия" :rules="rule"
                                  v-model="criterionCopy.name"></v-text-field>
                    <v-text-field label="Значение критерия" :rules="rule"
                                  v-model="criterionCopy.value"></v-text-field>
                    <v-btn class="mt-4" width="100%" :loading="loading" :disabled="loading || !valid"
                           type="submit" color="green accent-4" :dark="valid && !loading">Сохранить</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "CriterionEditor",
        props: {
            shown: {
                type: Boolean,
                default: false
            },
            soc: {
                type: Number,
                required: true
            },
            criterion: {
                type: Object,
                default: null
            }
        },
        data() {
            return {
                valid: null,
                loading: false,
                rule: [
                    v => !!v || "Заполните поле"
                ]
            }
        },
        methods: {
            doAction() {
                this.loading = true;

                if(this.criterionCopy.id) {

                } else {
                    this.$store.dispatch("createCriterion", this.criterionCopy).then(()=>{
                        this.loading = false;
                        this.dialog = false;
                        this.criterionCopy = {
                            name: "",
                            value: "",
                            social_type: this.soc
                        }
                    });
                }
            }
        },
        computed: {
            criterionCopy: {
                get() {
                    return this.criterion || {
                        name: "",
                        value: "",
                        social_type: this.soc
                    };
                },
                set(val) {

                }
            },
            dialog: {
                get() {
                    return this.shown
                },
                set(val) {
                    this.$emit("trigger", val)
                }
            }
        }
    }
</script>

<style scoped>

</style>