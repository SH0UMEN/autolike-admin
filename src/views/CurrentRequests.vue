<template>
    <v-row>
        <v-col cols="12">
            <v-card>
                <v-card-title>
                    Заявки на вывод
                </v-card-title>
                <v-list>
                    <v-list-group v-for="r in requests">
                        <template v-slot:activator>
                            <v-list-item-title class="d-inline-flex
                                                  align-center
                                                  justify-space-between">
                                {{ r.user }} <v-btn color="green accent-4" dark @click.stop>Одобрить</v-btn>
                            </v-list-item-title>
                        </template>

                        <v-list-item
                                v-for="h, i in r.history"
                                :key="i">
                            <v-list-item-title v-text="h"></v-list-item-title>
                        </v-list-item>

                    </v-list-group>
                </v-list>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        data: () => ({
            requests: [
                {
                    user: "Shoumen",
                    history: [
                        'Выполнил задачу 1',
                        'Выполнил задачу 1',
                        'Выполнил задачу 1',
                        'Выполнил задачу 1',
                    ]
                },
                {
                    user: "Pony",
                    history: [
                        'Выполнил задачу 1',
                        'Выполнил задачу 1',
                        'Выполнил задачу 1',
                        'Выполнил задачу 1',
                    ]
                }
            ]
        }),
    }
</script>