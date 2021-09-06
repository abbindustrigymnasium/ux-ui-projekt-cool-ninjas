<template>
    <div id="app">

        <div id="ourstory">
            <img :src="aboutbg" id="aboutbg">
            <h2 id="ostext">Our Story</h2>
        </div>


        <div id="darker">
            <div id="bFlex">
                <div id="bBox">
                    <div id="bTextBox">
                        <h1 id="bText">A Humble</h1>
                        <h1 id="bText">Beginning</h1>
                    </div>
                    <img :src="downtownLA" id="downtownLA">
                </div>
                <h1 id="bStoryText">In late 2015 we opened our first store in downtown L.A in a tiny bakery with barely enough space to fit the staff.</h1>
            </div>
        </div>

        <div id="lighter"></div>
        <div id="f">
            <div id="fFlex">
                <h1 id="fStoryText">In 2017 we started to expand and even though we have many more stores all over the West Coast, the core idea has stayed the same</h1>
                <div id="fBox">
                    <img :src="cityLA" id="cityLA">
                </div>
            </div>
            <h1 id="greatpc">Great People, Great Cakes!</h1>
        </div>
        <br>


        <div id="staff">
            <div id="staffText">
                <h1 id="staffWord">Staff</h1>
                <hr>
            </div>

            <div id="staffbox">
                <div id="staffinfo">
                    <img :src="aKate" id="avatar">
                    <div id="staffinfoTxt">
                        <div id="staffName"><h1>Kate Bode</h1></div>
                        <div id="TxtFlex">
                            <div id="infoL">
                                <h2>Manager</h2>
                                <h3>Age: 32</h3>
                            </div>
                            <div id="infoR">
                                <h3>(683) 364-6626</h3>
                                <h3>Dusty_Rodriguez@hotmail.com</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="staffinfo">
                    <img :src="aJeton" id="avatarR">
                    <div id="staffinfoTxt">
                        <div id="staffName"><h1>Jeton Mustini</h1></div>
                        <div id="TxtFlex">
                            <div id="infoL">
                                <h2>Baker</h2>
                                <h3>Age: 31</h3>
                            </div>
                            <div id="infoR">
                                <h3>(880) 785-3345</h3>
                                <h3>jeton.mustini@hotmail.com</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="staffbox">
                <div id="staffinfo">
                    <img :src="aJoakim" id="avatar">
                    <div id="staffinfoTxt">
                        <div id="staffName"><h1>Joakim Flink</h1></div>
                        <div id="TxtFlex">
                            <div id="infoL">
                                <h2>Baker</h2>
                                <h3>Age: 64</h3>
                            </div>
                            <div id="infoR">
                                <h3>952-531-7444</h3>
                                <h3>joakim.flink@hotmail.com</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="staffinfo">
                    <img :src="aCarlos" id="avatarR">
                    <div id="staffinfoTxt">
                        <div id="staffName"><h1>Carlos Corwin</h1></div>
                        <div id="TxtFlex">
                            <div id="infoL">
                                <h2>Baker</h2>
                                <h3>Age: 22</h3>
                            </div>
                            <div id="infoR">
                                <h3>(284) 396-6500 x2737</h3>
                                <h3>Fletcher.Cartwright41@hotmail.com</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="staffbox">
                <div id="staffinfo">
                    <img :src="aFlorence" id="avatar">
                    <div id="staffinfoTxt">
                        <div id="staffName"><h1>Florence Stokes</h1></div>
                        <div id="TxtFlex">
                            <div id="infoL">
                                <h2>Baker</h2>
                                <h3>Age: 36</h3>
                            </div>
                            <div id="infoR">
                                <h3>(832) 502-2080 x73152</h3>
                                <h3>Horace50@gmail.com</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="staffinfo">
                </div>
            </div>
        </div>

        <div id="placer">
            <h1 id="happyshop">Happy Shopping!</h1>
            <h2 id="bcteam">/The Blueberry Cream Team</h2>
            <hr>
        </div>

    </div>
</template>

<script>
import aboutbg from "../assets/aboutbg.jpg"
import downtownLA from "../assets/downtownLA.png"
import cityLA from "../assets/cityLA.png"
import aFlorence from "../assets/FlorenceStokes.jpg"
import aJeton from "../assets/aJeton.jpg"
import aJoakim from "../assets/aJoakim.jpg"
import aCarlos from "../assets/aCarlos.jpg"
import aKate from "../assets/aKate.jpg"

export default {
    name: 'Aboutus',
    components: {
        
    },
    data: function() {
        return{
            aboutbg: aboutbg,
            downtownLA: downtownLA,
            cityLA: cityLA,
            aFlorence: aFlorence,
            aJeton: aJeton,
            aJoakim: aJoakim,
            aCarlos: aCarlos,
            aKate: aKate,
        }
    },
    created(){

    },
    mounted(){

    
    },
    computed:{

    },
    methods: {

    }
    
}

</script>


<style scoped>

    #app {
        background-color: #6691A4;
        color: #FFF3E1;
        overflow: hidden;
        max-width: 100vw;
        letter-spacing: 0.04em;
    }
    #aboutbg{
        height: 55vw;
    }

    /*----------------------------------------------*/
    /* OUR STORY */

    #ourstory{
        width: 100%;
        height: 100vh;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #ourstory::before{
        content: '';
        position: absolute;
        bottom: -50px;
        width: 100%;
        height: 200px;
        background: linear-gradient(to top, #628A9C, transparent);
        z-index: 10000;
    }
    #ourstory img{
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        pointer-events: none;
    }
    #ostext{
        font-size: 10vw;
        z-index: 1;
        text-shadow: -8px 5px 4px rgba(26, 26, 26, 0.3);
    }

    /*-----------------------------------------------*/
    /* DOWNTOWN LA */

    #darker{
        background-color: #628A9C;
        height: 30vw;
        display: flex;
        align-content: center;
    }
    #bFlex{
        display: flex;
        flex-direction: row;
        position: inherit;
        z-index: 2;
    }
    #bBox{
        display: flex;
        align-content: flex-start;
        margin: auto;
        width: 50%;
        margin-left: 12%;
        margin-top: 3.7%;
    }
    #bTextBox{
        display: flex;
        flex-direction: column;
        margin-left: 2%;
    }
    #bText{
        z-index: 1;
        text-shadow: -3px 4px 3px rgba(26, 26, 26, 0.3);
        font-size: 3.75vw;
        margin: 0;
    }
    #downtownLA{
        width: 65%;
        height: 65%;
        transform: rotate(7.35deg);
        margin-left: -23%;
    }
    #bStoryText{
        align-self: center;
        width: 23%;
        font-size: 1.65vw;
        font-family: 'Poppins';
        text-align: right;
        margin-right: 15%;
    }

    /*-----------------------------------------------*/
    /* CITY LA */

    /*#lighter{
        background-color: #6E9BAF;
        height: 34vw;
        position: absolute;
        z-index: 1;
        transform: rotate(-5deg);
        width: 100%;
        clip-path: polygon(3% 0, 100% 0%, 97% 100%, 0% 100%);
    }*/
    #f{
        background-color: transparent;
        height: 30vw;
        display: flex;
        align-content: center;
        flex-direction: column;
    }
    #fFlex{
        display: flex;
        flex-direction: row;
        z-index: 2;
        margin-top: -5%;
    }
    #fBox{
        margin: auto;
        width: 50%;
        margin-top: 3.7%;
    }
    #cityLA{
        width: 65%;
        height: 65%;
        transform: rotate(-15deg);
        margin-left: 7%;
    }
    #fStoryText{
        align-self: center;
        width: 23%;
        font-size: 1.65vw;
        font-family: 'Poppins';
        text-align: left;
        margin-left: 20%;
        margin-top: 3.7%;
    }
    #greatpc{
        font-size: 3.3vw;
        margin-top: 4vw;
        margin-right: 13.5vw;
        z-index: 1;
    }

    /*-----------------------------------------------*/
    /* STAFF */

    #staff{
        margin-top: 14vw;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    #staffText{
        z-index: 2;
        width: 70vw;
        text-align: start;
        font-size: 2.4vw;
        margin: 0;
    }
    #staffText hr{
        border-bottom: 0.2vw solid #FFF3E1;
        width: 16vw;
        margin-right: 72vw;
    }
    #staffbox{
        width: 72vw;
        height: 12vw;
        display: flex;
        flex-direction: row;
        margin-bottom: 1vw;
    }
    #staffinfo{
        width: 100%;
        align-items: center;
        margin: auto;
        display: flex;
        flex-direction: row;
    }
    #avatar{
        border-radius: 50%;
        width: 10vw;
        height: 10vw;
        vertical-align: middle;
    }
    #avatarR{
        border-radius: 50%;
        width: 10vw;
        height: 10vw;
        vertical-align: middle;
        margin-left: 5.8vw;
    }
    #staffinfoTxt{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        margin-bottom: 2vw;
        text-align: start;
    }
    #TxtFlex{
        display: flex;
        flex-direction: row;
    }
    #staffinfoTxt h1{
        text-decoration: underline;
        font-size: 1.8vw;
        margin-bottom: 0.2vw;
        margin-left: 1.2vw;
        margin-top: 0.2vw;
    }
    #staffinfoTxt h2{
        font-size: 1vw;
        margin: 0.2vw;
    }
    #staffinfoTxt h3{
        font-size: 1vw;
        font-family: 'Poppins';
        margin: 0.2vw;
    }
    #infoL{
        display: flex;
        flex-direction: column;
        text-align: start;
        margin-left: 1.1vw;
    }
    #infoR{
        max-width: 14vw;
        text-align: end;
        overflow-wrap: break-word;
        margin: auto;
    }

    /*-----------------------------------------------*/

    #placer{
        width: 70vw;
        text-align: start;
        margin: auto;
        margin-top: 3vw;
    }
    #happyshop{
        font-family: 'Rembank';
        font-size: 4vw;
    }
    #bcteam{
        font-family: 'Poppins';
        font-size: 1vw;
        margin-top: 0.2vw;
    }
    #placer hr{
        border-bottom: 0.2vw solid #FFF3E1;
        margin-top: 3vw;
        width: 16vw;
        margin-right: 72vw;
    }

</style>
