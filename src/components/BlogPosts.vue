<template>
    <div class="post-box">
        <h1>Brands</h1>
        <div class="card gedf-card" v-for="brand in all_brands" v-bind:key="brand" @click="gotobrand(brand)">
            <div class="card-header" >
                <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex justify-content-between align-items-center head">
                        <div class="ml-2">
                            <h2 class="h5 m-0" ><strong>Brand Name: </strong>{{brand.name}}</h2>
                        </div>
                      
                    </div>
                </div>
            </div>
            <div class="card-body">

                <div class="body-image">
                    <img src="../assets/dress.jpeg" alt="" />
                </div>
            </div>
            <div class="card-footer">
                <div class="like">
                    <h2 href="#" class="card-link h5 m-0"><strong>About brand: </strong> {{brand.about}}</h2>
                 
                </div>
               
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .card .card-header .d-flex .head .h7 {
        margin-left: 50px;
    }

    h1 {
        text-align: center;
        margin-top: 50px;
        margin-bottom: 50px;
        background: -webkit-linear-gradient(#fadcda, #dc3545);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 60px;
    }

    h2 {
        color: #dc3545;
    }

    .card-body .body-image img {
        height: 300px;
    }

    .card-body .body-image {
        text-align: center;
        background-color: #fadcda;
        margin: auto;
    }

    .card-body {
        display: flex;
    }

    .gedf-card {
        width: 60%;
        margin: auto;
        text-align: center;
        margin-bottom: 100px;
    }

    .card-footer {
        display: flex;
        justify-content: space-around;
    }

    .like a i {
        color: salmon;
    }

    .like a {
        color: salmon;
        margin-right: 10px;
    }

    .like span {
        color: #000;
        border: 2px solid #fadcda;
        margin-right: 10px;
        padding: 5px;
    }

    .like {
        font-size: 20px;
    }

    .dislike a i {
        color: salmon;
    }

    .dislike a {
        color: salmon;
        margin-right: 10px;
    }

    .dislike span {
        color: #000;
        border: 2px solid #fadcda;
        margin-right: 10px;
        padding: 5px;
    }

    .dislike {
        font-size: 20px;
    }
</style>

<script>
    import axios from "axios"
    export default {

        name: "brands",

        data: function () {
            return {

                loading: false,
                all_brands: [],
                input: {
                    ID: null
                },

            }
        },

        methods: {

            mounted: function (response) {
                for (var i = 0; i < response.length; i++) {
                    if (response[i].name == "") {
                        this.input.ID = response[i].id
                        axios.post("http://localhost/API/api/deletebrand.php", this.input)
                            .then((result) => {
                                console.log(result.data)

                            })
                            .catch(error => console.log(error))
                            .finally(() => this.loading = false)
                    }
                    else {
                        this.all_brands.push(response[i])


                    }

                }

                console.log(this.all_brands)
            },
            gotobrand(brand) {

                this.$router.push({ name: 'brandprofile' });
                localStorage.setItem('clickbrand', brand.name)


            },

        },

       
        beforeMount() {

            this.loading = true;
            axios
                .get('http://localhost/API/api/readbrand.php')
                .then(response => (this.mounted(response.data.data))

                )
                .catch(error => console.log(error))
                .finally(() => this.loading = false)
    
        },
    }
</script>
