<template>
    <br><br><br>
    <div class="container mx-auto sm:px-4">
        <table class="table-auto">
            <thead>
                <tr>
                    <th class="px-4 py-2">ID</th>
                    <th class="px-4 py-2">Nama</th>
                    <th class="px-4 py-2">Username</th>
                    <th class="px-4 py-2">Email</th>
                    <th class="px-4 py-2">Address</th>
                    <th class="px-4 py-2">Phone</th>
                    <th class="px-4 py-2">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in getUsers" :key="user.id">
                    <td class="border px-4 py-2">{{ user.id }}</td>
                    <td class="border px-4 py-2">{{ user.name.firstname}}{{ user.name.lastname }}</td>
                    <td class="border px-4 py-2">{{ user.username }}</td>
                    <td class="border px-4 py-2">{{ user.email }}</td>
                    <td class="border px-4 py-2">{{ user.address.street }}{{ user.address.city }} {{ user.address.zipcode }}</td>
                    <td class="border px-4 py-2">{{ user.phone }}</td>
                    <td class="border px-4 py-2"> Update | Delete </td>
                </tr>

            </tbody>
        </table>
    </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';

export default {
    computed:{
        ...mapGetters('users',['getUsers']),
    },
    methods:{
        ...mapActions('users',['fetchUsers']),
    },
    created(){
        this.fetchUsers();
    }
}
</script>

<style></style>
