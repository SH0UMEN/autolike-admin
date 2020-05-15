import axios from "axios"

export default {
    state: {
        criterions: []
    },
    getters: {
        getCriterions(state) {
            return (socID) => {
                return state.criterions.filter((el) => {
                    return socID == el.social_id;
                });
            }
        }
    },
    actions: {
        fetchCriterions(context) {
            return new Promise((resolve, reject) => {
                axios.post(context.getters.getAPIurl + "/criterion/list")
                .then((res) => {
                    for(let item of res.data.data.list) {
                        item.enable = !!item.enable;
                    }

                    context.commit("setCriterions", res.data.data.list);
                    resolve(res);
                }).catch((err) => {
                    reject(err);
                })
            })
        },
        updateCriterion(context, data) {
            return axios.post(context.getters.getAPIurl + "/criterion/update", data)
        },
        setCriterionStatus(context, data) {
            return axios.post(context.getters.getAPIurl + "/criterion/status", data);
        },
        createCriterion(context, data) {
            return new Promise((resolve, reject) => {
                axios.post(context.getters.getAPIurl + "/criterion/add", data)
                .then((res) => {
                    context.commit("addCriterion", res.data.data.criterion);
                    resolve(res)
                }).catch((err) => {
                    reject(err);
                })
            });
        }
    },
    mutations: {
        addCriterion(state, criterion) {
            state.criterions.push(criterion);
        },
        setCriterions(state, criterions) {
            state.criterions = criterions;
        }
    }
}