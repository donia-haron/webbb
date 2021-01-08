<template>
    <div class="main">
        <div class="sidebar">
            <router-link to="/profile" >
                <a href="#" class="active">
                    <i><font-awesome-icon :icon="['fas', 'user']" /></i>
                    My account
                </a>
            </router-link>
            <br><hr>
            <router-link to="/orders" >
            <a href="">
                <i><font-awesome-icon :icon="['fas', 'box-open']" /></i>
                My Orders
            </a>
            </router-link>
            <br>
            <hr>
            <router-link to="/personalinfo" >
            <a href="#" class="personal">
                <i><font-awesome-icon :icon="['fas', 'user-edit']" /></i>
                Personal info
            </a>
            </router-link>
            <br>
            <router-link to="/changepassword" >
            <a href="#">
                <i><font-awesome-icon :icon="['fas', 'lock']" /></i>
                Change Password
            </a>
            </router-link>
            <br><hr>
            <button  @click="logout();">
                <i><font-awesome-icon :icon="['fas', 'door-open']" /></i>
                Sign out
            </button>
        </div>
        <div class="mainsection" v-if="all_users">
            
            <h5 class="one">
                User Name: {{all_users.username}}
                <span>

                </span>
            </h5>
            <h5 class="two">Email:
                <span>
                    sim.rowan.essam@alexu.edu.eg
                </span>
            </h5>
            <br>
            <!-- <router-link to="/personalinfo">
                <a href="" class="edit">Edit</a>
            </router-link> -->
            <a class="edit">Edit</a>
            
            
            <hr>
            <h4>Your Address</h4>
            <a href="">Add new address</a>
            <br>
        </div>
    </div>
</template>
<script>
    import axios from "axios"
    export default {

        name: "AppHeader",

        data: function () {
            return {
                users: "",
                loading: false,
                all_users: null

            }
        },
        created() {
  
            this.mounted()
        },
        methods: {
            logout: function () {
                this.loading = true;
                localStorage.setItem('users',"")

                this.$router.push({ name: 'Home' })
            },

            mounted() {
                this.loading = true;
            
                axios
                    .get('http://localhost/API/api/read-single.php?User_Name=' + localStorage.getItem('users'))
                    .then(response => (this.all_users = response.data))
                    .catch(error => console.log(error))
                    .finally(() => this.loading = false)

            }
    }


    };


</script>
<style scoped>
.main{
    display: flex;
    width: 80%;
    margin: auto;
    margin-top: 100px;
    margin-bottom: 100px;
}
.main .sidebar{
    flex-grow: 1;
    margin-right: 50px;
    border: 3px #000 solid;
    background-color: #fadcda;
    padding-top: 30px;
    padding-bottom: 30px;
    height: 350px;
}
.main .sidebar .personal{
    padding-bottom: 50px;
    margin-bottom: 20px;
}
.main .sidebar a{
    color: black;
    font-size: 20px;
    margin: 20px;
    padding-top: 30px;
}
.main .sidebar a:hover{
    text-decoration: none;
    color: #dc3545;
}
.main .sidebar .active{
    color: #dc3545;
}
.main .mainsection{
flex-grow: 4;
border: 3px #000 solid;
padding-bottom: 30px;
text-align: left;
}
.main .mainsection a{
    color: #dc3545;
    border: 2px solid #000;
    font-size: 20px;
    width: 70px;
    margin-left: 100px;
    padding: 5px 30px 5px 10px;
}
.main .mainsection a:hover{
    text-decoration: none;
    color: #fff;
    background-color: #dc3545;
    border-radius: 59px;
}
/* .main .mainsection .edit{
  
} */
.main .mainsection .one{
    padding: 30px 0px 0px 30px;
}
.main .mainsection .two{
    padding: 5px 0px 0px 30px;
}
.main .mainsection h5{
    color: #000;
    margin-left: 20px;
    padding-bottom: 10px;
}
.main .mainsection h5 span{
    color: #dc3545;
}
.main .mainsection h4{
    color: #000;
    margin-left: 50px;
    padding-bottom: 10px;
}
.main .mainsection h4 span{
    color: #dc3545;
    margin-left: 50px;
}
.main .mainsection label{
    padding-left: 100px;
}
</style>