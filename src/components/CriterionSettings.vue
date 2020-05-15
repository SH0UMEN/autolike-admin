<template>
    <div>
        <v-data-table :items="criterions" :headers="criterionHeaders">
            <template v-slot:item.name="props">
                <v-edit-dialog
                        :return-value.sync="props.item.name"
                        @save="save(props.item, 'name')"
                        @open="open(props.item.name)"> {{ props.item.name }}
                    <template v-slot:input>
                        <v-text-field
                                v-model="props.item.name"
                                label="Изменить"
                                single-line
                        ></v-text-field>
                    </template>
                </v-edit-dialog>
            </template>
            <template v-slot:item.value="props">
                <v-edit-dialog
                        :return-value.sync="props.item.value"
                        @save="save(props.item, 'value')"
                        @open="open(props.item.value)"> {{ props.item.value }}
                    <template v-slot:input>
                        <v-text-field
                                v-model="props.item.value"
                                label="Изменить"
                                single-line
                        ></v-text-field>
                    </template>
                </v-edit-dialog>
            </template>
            <template v-slot:item.enable="{ item }">
                <v-simple-checkbox v-model="item.enable" @input="setCriterionStatus($event, item.id)"></v-simple-checkbox>
            </template>
        </v-data-table>

        <v-btn @click="criterionDialog = true" color="green accent-4" dark>Новый критерий</v-btn>

        <criterion-editor @trigger="criterionDialog = $event"
                          :shown="criterionDialog" :soc="soc">
        </criterion-editor>

        <v-snackbar v-model="snack" :timeout="3000" :color="snackColor">
            <div v-if="snackColor == 'error'">
                <span class="d-block" v-for="err in errors">{{ err }}</span>
            </div>
            <span v-else>{{ snackText }}</span>
            <v-btn text @click="snack = false">Закрыть</v-btn>
        </v-snackbar>
    </div>
</template>

<script>
    import CriterionEditor from "./CriterionEditor"

    export default {
        name: "CriterionSettings",
        components: {
            CriterionEditor
        },
        props: {
            soc: {
                type: Number,
                required: true
            }
        },
        computed: {
            criterions: {
                get() {
                    return this.$store.getters.getCriterions(this.soc)
                },
                set(val) {
                    this.$store.commit("setCriterions", val);
                }
            },
        },
        methods: {
            setCriterionStatus(value, id) {
                this.$store.dispatch("setCriterionStatus", {
                    enable: value,
                    id: id
                })
            },
            save (item, field) {
                let data = {
                    id: item.id,
                    name: item.name,
                    value: item.value
                };

                this.$store.dispatch("updateCriterion", data).then(()=>{
                    this.snack = true
                    this.snackColor = 'success'
                    this.snackText = 'Изменения сохранены'
                }).catch((err)=>{
                    item[field] = this.lastValue;
                    this.parseErrors(err.response.data.errors)
                    this.snack = true;
                    this.snackColor = 'error';
                });
            },
            parseErrors(errors) {
                this.errors = []

                for(let errArr in errors) {
                    for(let e of errors[errArr]) {
                        this.errors.push(e);
                    }
                }
            },
            open (val) {
                this.lastValue = val;
            },
        },
        data() {
            return {
                snack: false,
                errors: [],
                snackColor: '',
                snackText: '',
                lastValue: null,
                criterionDialog: false,
                criterionHeaders: [
                    {
                        text: "Название критерия",
                        align: "start",
                        value: "name"
                    },
                    {
                        text: "Значение",
                        value: "value"
                    },
                    {
                        text: "Активен",
                        value: "enable"
                    }
                ],
            }
        }
    }
</script>

<style scoped>

</style>