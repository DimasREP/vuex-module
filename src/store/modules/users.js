import axios from "axios";

const users = {
    namespaced: true,
    state: {
        userData: [],
    },
    getters: {
        getUsers: (state) => state.userData,
    },
    actions: {
        async fetchUsers({ commit }) {
            try {
                const data = await axios.get(
                    "https://fakestoreapi.com/users?limit=5"
                );
                commit("SET_USERS", data.data);
            } catch (error) {
                alert (error);
                console.log(error)
            }
        },
        async createUser({commit,userData}){
            try {
                const response = await axios.get(
                    "https://fakestoreapi.com/users",
                    userData
                );
                commit("ADD_USERS", response.data);
                return response.data;
            } catch (error) {
                alert(error);
                console.log(error)
            }
        }
    },
    mutations: {
        SET_USERS(state, users) {
            state.userData = users
        } ,
        ADD_USERS(state,users){
            state.userData.push(user)
        }
    }
}

export default users
