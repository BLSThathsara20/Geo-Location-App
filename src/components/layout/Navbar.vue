<template>
    <div class="Navbar">
        <nav class="deep-purple darken-1">
            <div class="container">
                <router-link class="brand-logo left" :to=" {name : 'GMap'}">GeoLocation!</router-link>
                <ul class="right">
                    <li v-if="!user"><router-link :to=" {name : 'Signup'}">Signup</router-link></li>
                    <li v-if="!user"><router-link :to=" {name : 'Login'}">Login</router-link></li>
                    <li v-if="user" id="user-mail"><a>{{user.email}}</a></li>
                    <li v-if="user"><a @click="logout">Logout</a></li>
                    <a id="user-mail-responsive" class="grey-text text-darken-2">{{user.email}}</a>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
import firebase from 'firebase/compat/app'

    export default {
        name: 'Navbar',
        data(){
            return {
                user: null,
            }
        },
        methods: {
            logout(){
                firebase.auth().signOut().then(() => {
                    this.$router.push({ name : 'Login' })
                })
            }
        },
        created(){
            //let user = firebase.auth().currentUser
            firebase.auth().onAuthStateChanged((user) => {
               if(user){
                   this.user = user
               } else{
                   this.user = null
               }
            })

        }
    }
</script>

<style>
    @media screen and (max-width: 760px) {
    #user-mail a{
        display: none;
    }
    #user-mail-responsive{
        position: absolute;
        bottom: 0;
        left: 0;
    }
}
    @media screen and (min-width: 760px) {
    #user-mail-responsive{
        display: none;
    }
}
</style>