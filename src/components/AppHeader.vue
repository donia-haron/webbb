<template>
  <div class="header">
    <div class="container">
       
      <div class="logo1">
        <a href="#">
          <img src="../assets/logoweb2.jpg" width="120px" alt="" /><br />
          <span class="spn1" style="color:#C71585">Vote To Buy</span>
        </a>
      </div>
      <ul class="text-right">
          <router-link to="/" tag="li" exact>
              <a class="link1 homee">
                  <i><font-awesome-icon :icon="['fas', 'home']" /></i>
              </a>
          </router-link>

          <router-link to="/blog" tag="li">
              <a class="link1">
                  <i><font-awesome-icon :icon="['fas', 'female']" /></i>
              </a>
          </router-link>
          <li>
              <a @click="check()" class="cart">
                  <span id="quantityy"> {{x}}</span>
                  <i><font-awesome-icon :icon="['fas', 'shopping-cart']" /></i>
              </a>
          </li>

          <!--  <router-link to="/help" tag="li">

        <div class="cart">
            <span id="quantityy"> {{x}}</span>
            <i><font-awesome-icon :icon="['fas', 'shopping-cart']" /></i>
        </div>
    </router-link>-->




          <li>
              <div class="container h-100">
                  <div class="d-flex justify-content-center h-100">
                      <div class="searchbar">
                          <input class="search_input"
                                 type="text"
                                 name=""
                                 placeholder="Search..." />
                          <a href="#" class="search_icon">
                              <i><font-awesome-icon :icon="['fas', 'search']" /></i>
                          </a>
                      </div>
                  </div>
              </div>
          </li>
          <div v-if="this.users!=''">
              <router-link to="/profile" tag="li" id="profile">
                  <div class="userr">
                      <a class="link1">
                          <i>
                              <font-awesome-icon :icon="['fas', 'user']" />
                          </i><br />
                          <span class="span1">welcome {{users}}</span>
                      </a>
                  </div>
              </router-link>
          </div>
          <div v-else>

              <div class="btn-login" id="btn">
                  <router-link to="/about">
                      <a href="">Login</a>
                  </router-link>
              </div>

          </div>

      </ul>
    </div>
  </div>
</template>
<script>

    import axios from "axios";
    export default {

        name: "AppHeader",
        data: function () {
            return {
                users: "",
                loading: false,
                x:0
            }
        },
        methods: {
            getuser: function () {
                this.loading = true;
              
                
            },

            check: function () {
                if (this.x > 0) {

                    this.$router.push({ name: 'Help' })

                }
                else {

                    this.$router.push({ name: 'skirts' })

                }
                

            }

    },
        beforeMount() {

            this.getuser()
            if (localStorage.getItem('users') != '') {

                this.users = localStorage.getItem('users');

                axios
                    .get('http://localhost/API/api/read_singlecart.php?Username=' + this.users)
                    .then(response => (this.x = response.data.data.length), console.log(this.x))
                    .catch(error => console.log(error))
                    .finally(() => this.loading = false)

            }
            else if (localStorage.getItem('brand') != '') {

                this.users = localStorage.getItem('brand');


            }



        },


    };
   


</script>

<style lang="scss" scoped>
    .header {
        background-color: #fadcda;
    }
    .container{
        display:flex;
        justify-content:space-between;
    }
    .logo1{
        display:flex;
        flex-direction:column;
    }
        .logo1 span {
            font-size: 25px;
            background: -webkit-linear-gradient(#ffff00, #c71585);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            
        }
            .logo1 span:hover {
                text-decoration: none;
            }
    ul{
        list-style:none;
        display:flex;
    }
        ul li a i {
            color: black;
            font-size: 35px;
        }
            ul li a i:hover {
                color: #dc3545;
            }
            ul li {
                margin-top: 50px;
                padding-right: 20px
            }
    
    .btn-login {
        background-color: #dc3545;
        margin-top:50px

    }
    .btn-login a {
        color: #000;
        font-size: 20px;
        width: 70px;
        height: 50px;
        padding: 10px;
        background-color: #fadcda;
    }

       .btn-login a:hover {
            text-decoration: none;
            color: #fff;
            background-color: #dc3545;
            border-radius: 0px;
            height: 50px;
        }
    .search_input {
        height: 40px;
        border-radius: 25px;
        background-color: rgba(0,0,0,0.2);
        padding-left: 30px
    }
    .search_input:focus{
        border:0px;
        outline:0px;
        width:300px
    }
    .search_icon i{
        padding-left:10px;
        font-size:30px;
        margin-top:20px
    }

    .span1 {
        margin-left: 150px;
        color: black;
        font-size:15px
    }
    .span1:hover {
        color: #dc3545;
    }
    .link1 i{
        padding-right:30px;
    }
    .link1:hover {
        color: #dc3545;
        text-decoration:none;
    }
    .cart{
        display:flex;
        flex-direction:column;
        color:black;
        margin-top:-20px
    }
        .cart:hover {
            color: #dc3545;
            text-decoration:none;
        }
    .cart span {
        text-align: center;
        font-size: 20px;
        margin-left: 10px;
    }
    .cart i{
        color:black;
        font-size:30px
    }
        .cart i:hover {
            color: #dc3545;
        }
</style>
