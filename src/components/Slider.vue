<template>
    <div id="app">
        <div id="view" :class="[{'collapsed' : collapsed}]">
            <router-view />

        </div>

        <sidebar-menu class="sidebar"
                      :menu="menu"
                      :collapsed="collapsed"
                      @item-click="onItemClick"
                      @collapse="onCollapse " />
    </div>
</template>

<script>
    import { SidebarMenu } from 'vue-sidebar-menu'
    import dress from '../assets/icons8-wedding-dress-100.png'
    import skirt from '../assets/icons8-skirt-100.png'
    import blouse from '../assets/icons8-womans-clothes-100.png'
    import jacket from '../assets/icons8-jacket-100.png'
    import sweatshirt from '../assets/icons8-jumper-100.png'


    import coat from '../assets/293200.png'
    import pants from '../assets/womens-pants--v1.png'
    import jumpsuit from '../assets/3893128.png'
    
    export default {
        components: {
            SidebarMenu,
        },
        name: "App",

        data() {
            return {
                menu: [
                  
                    {
                        href: "/skirts",
                        title: "Skirts",
                        icon: {
                            element: 'img',
                            attributes: {
                                // icon props:
                                src: skirt
                            }
                        }
                    },
                    {
                        href: "/blouses",
                        title: "Blouses",
                        icon: {
                            element: 'img',
                            attributes: {
                                // icon props:
                                src: blouse
                            }
                        }
                    },
                    {
                        href: "/pants",
                        title: "Pants",
                        icon: {
                            element: 'img',
                            attributes: {
                                // icon props:
                                src: pants
                            }
                        }
                    },

                    {
                        href: "/coats",
                        title: "Coats&Jackets",
                        icon: {
                            element: 'img',
                            attributes: {
                                // icon props:
                                src: coat
                            }
                        }
                    },
                    {
                        href: "/sweatshirts",
                        title: "Sweat-Shirts",
                        icon: {
                            element: 'img',
                            attributes: {
                                // icon props:
                                src: sweatshirt
                            }
                        }  },
                    {
                        href: "/dresses",
                        title: "Dresses",
                        icon: {
                            element: 'img',
                            attributes: {
                                // icon props:
                                src: dress
                            }
                        }
                    },
                    {
                        href: "/blazers",
                        title: "Blazers",
                        icon: {
                            element: 'img',
                            attributes: {
                                // icon props:
                                src: jacket
                            }
                        }  },

                    {
                        href: "/jumpsuits",
                        title: "JumpSuits",
                        icon: {
                            element: 'img',
                            attributes: {
                                // icon props:
                                src: jumpsuit
                            }
                        } },

                ],
                collapsed: true,
                hovering: true,
                baseStyles: {
                    fontWeight: '800',
                    color: 'red'
                },
            };
        },
        methods: {
            onItemClick() {
                console.log("onItemClick");
            },
            onCollapse() {
                console.log("onCollapse");
                this.collapsed;
            },
            mouseover() {
                this.hovering ? this.color : 'red';
            }
        }
    };
</script>

<style scoped>
        /* #view {
      padding-left: 350px;


    } */
        .collapsed {
            padding-left: 50px;
            color: #ee8791;
        }

        .link1 {
            color: black;
        }

        .sidebar.v-sidebar-menu .vsm-arrow:after {
            content: "\f105";
            font-family: "FontAwesome";
            background-color: #ff006e;
            position: fixed;
        }

        #view {
            color: #ee8791;
        }

        .sidebar {
            background-color: #f1c9cd;
            width: 50px;
            padding-top: 100px;
        }

            .sidebar :menu {
                background-color: #ff006e;
            }

            .sidebar.v-sidebar-menu .collapse-btn:after {
                content: "\f07e";
                font-family: "FontAwesome";
            }
</style>
