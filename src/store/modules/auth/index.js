import axios from 'axios'

export default {
    state: {
        token: localStorage.getItem("admin-token") || "",
        status: '',
        logoutDialogOpened: false,
    },
    getters: {
        isAuthenticated(state) {
            return !!state.token;
        },
        authStatus(state) {
            return state.status;
        },
    },
    actions: {
        logout(context) {
            return new Promise((resolve, reject) => {
                axios.post(context.getters.getAPIurl + "/logout").then((res)=>{
                    delete axios.defaults.headers.common['Authorization'];
                    context.commit('logout');
                    resolve()
                })
            })
        },
        refresh(context) {
            return new Promise((resolve, reject) => {
                axios({
                    method: "post",
                    url: context.getters.getAPIurl + "/refresh"
                }).then((res)=>{
                    context.commit('authSuccess', res.data.access_token);
                    resolve(res)
                }).catch((err)=>{
                    //console.log(err.response.data);
                    if(err.response.data.errors.token == "Invalid update") {
                        context.commit("logout");
                    }

                    reject(err)
                })
            })
        },
        auth(context, params) {
            context.commit("authProcess");

            return new Promise((resolve, reject) => {
                axios.post(context.getters.getAPIurl+"/login", params)
                    .then((res)=>{
                        let token = res.data.access_token;
                        context.commit('authSuccess', token);
                        resolve(res)
                    }).catch((err)=>{
                        context.commit('authError');
                        reject(err);
                    })
            })
        }
    },
    mutations: {
        logout(state) {
            localStorage.removeItem("admin-token");
            state.token = "";
        },
        // setUser(state, user) {
        //     state.user = user;
        // },
        authSuccess(state, token) {
            localStorage.setItem("admin-token", token);
            axios.defaults.headers.common['Authorization'] = "Bearer " + token;
            state.status = 'authenticated';
            state.token = token;
        },
        authProcess(state) {
            state.status = 'process';
        },
        authError(state) {
            state.status = 'error';
        },
        openLogoutDialog(state) {
            state.logoutDialogOpened = true;
        },
        closeLogoutDialog(state) {
            state.logoutDialogOpened = false;
        },
    }
}