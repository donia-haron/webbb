<template>
    <div>
        <h1>Skirts</h1>
        <div class="row container1">

            <div class="col-md-4 first" v-for="user in all_users" v-bind:key="user">

                <p>{{user['description']}}</p>
                <img :src="getImgUrl(user.description)" />
                <h2>{{user['name']}}</h2>
                <p class="price">{{user['price']}}</p>
                <p>{{user['color']}}</p>
                <p>{{user['size']}}</p>



                <p><button>Add to Cart</button></p>
            </div>
        </div>
    </div>

</template>


<script>
    import axios from "axios";


    export default {
        name: 'app',
        data() {
            return {
                loading: false,
                all_users: null,
            }
        },

        mounted() {
            this.loading = true;

            axios
                .get('http://localhost/API/api/readproduct.php')
                .then(response => (this.all_users = response.data.data))
                .catch(error => console.log(error))
                .finally(() => this.loading = false)

        },


        getImgUrl(pic) {


            return "@/assets/" + pic
        }

    }
</script>

<style scoped>

    h1 {
        text-align: center;
        margin-top: 50px;
        margin-bottom: 0px;
        background: -webkit-linear-gradient(#fadcda, #dc3545);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 60px;
    }

    .container1 {
        width: 100%;
    }

    .col-md-4 {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        max-width: 300px;
        margin: auto;
        text-align: center;
        font-family: arial;
        font-size: 20px;
        margin-top: 50px;
        margin-bottom: 20px;
    }

        .col-md-4 img {
            width: 100%;
        }

    .price {
        color: grey;
        font-size: 22px;
    }

    .col-md-4 button {
        border: none;
        outline: 0;
        padding: 12px;
        color: white;
        background-color: #000;
        text-align: center;
        cursor: pointer;
        width: 100%;
        font-size: 18px;
    }

    .card button:hover {
        opacity: 0.7;
    }
</style>
