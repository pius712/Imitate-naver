<template>
  <div id="app">
    <app-header></app-header>
    <app-main></app-main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader';
import AppMain from './components/AppMain';
import AppFooter from './components/AppFooter';

export default {
  name: 'app',
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  }
}
</script>

<style>
* {
    box-sizing: border-box;
}
html, body {
    margin: 0;
    padding: 0;
    font-family: Dotum,'돋움',Helvetica,"Apple SD Gothic Neo",sans-serif;
    background-color: #F6F6F6;
}

ul {
    list-style: none;
    margin:0px;
    padding:0px;
}
a{
    all: unset;
}
header {
    height: 218px;
    background-color: white;
    border-bottom: 1px solid #d1d8e4;
}

.blind{
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    margin: -1px;
    width: 1px;
    height: 1px;
}
.center-flex{
    margin:0 auto;
    width: 1080px;
    height: 170px;
    position: relative;
}

.header-top{
    position: absolute; 
    top:0px; 
    right:0px
}
.header-top  {
    color: #888;
    letter-spacing: -1px;
    font-size: 11px;
    line-height:22px;
}

.header-search a{
    text-decoration: none;
    vertical-align: middle;
}
.header-search h1{
    width: 198px;
    height: 50px;
    display: inline-block;
    background-image: url(../../../img/sp_search.svg);
    background-position: -3px -3px;
    text-indent: 100%;  /* 이렇게하면 오른쪽으로 튀어나간다. */
    overflow:hidden;   /* 컨텐츠 밖으로 튀어나가면 안보이게하는 */
    position: absolute;
    top: 50%;
    left: -2px;
    margin-top: -25px;
  
}
.naver-text{
    display: block;
    overflow: hidden;
    width: 198px;
    height: 48px;
    background-position: -4px -4px;
    text-indent: 101%;
    white-space: nowrap;
}
.header-search h2{
    display: none;
}

.header-search fieldset {
    width: 521px;
    height: 49px;
    /* margin-left: 20px; */
    /* padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 10px;
    padding-right:0; */
    padding: 12px 0 12px 10px;
    border: 2px solid  #03cf6d;
    display: inline-block;
    vertical-align: middle;
    position: absolute;    
    top: 50%;
    margin-top: -21px;
    left: 219px;
}

.header-search fieldset input{
    vertical-align: top;
    border: none;
    outline: none; /* input box에 클릭하면 테두리 쳐지는 것. */
    width: 405px;
    height: 23px;
    font-size:18px;
    /* display: inline-block; input은 기본적으로 inline block */
}
.header-search fieldset button{
    width: 49px;
    height: 49px;
    border: none;
    background: #03cf6d;
    position: absolute;
    top: -2px;
    right: -1px;
}


#search-image{
    
    background-image: url(../../../img/sp_search.svg);
    background-position: -3px -60px;
    background-repeat: no-repeat;
    width: 21px;
    height: 21px;
    display : inline-block;
    /* margin: 14px; */
}
.center-nav{
    margin:0 auto;
    width: 1080px;
    position: relative;
    /* overflow: hidden; */
}
nav {
    height: 47px;
    border-top: 1px solid #f1f3f6;;
}
nav ul{
    padding:16px 0px 0px 4px;
    float:left;
}
nav li {
    display: inline-block;
    padding-left: 14px;
}
nav li:first-child{
    padding-left:0px;
}
nav li:first-child span:first-child {
    width: 25px;
    background-position: 0 -285px;
    margin-left: 0;
    padding: 0px;
}

nav li span:first-child {
    height: 16px;
    display: inline-block;
    background-image: url(https://s.pstatic.net/static/www/img/uit/2019/sp_nav.png);
    background-repeat: no-repeat;
    /* margin-left: 14px; */
}

nav li:nth-child(2) span:first-child {
    width: 27px;
    /* width:40px; */
    background-position: -279px -52px;
}

nav li:nth-child(3) span:first-child {
    /* width: 40px; */
    width:40px;
    background-position: -100px -182px;
}

nav li:nth-child(4) span:first-child {
    /* width: 40px; */
    width:40px;
    background-position: -101px -156px;
}

nav li:nth-child(5) span:first-child {
    width: 26px;
    /* width:40px; */
    background-position: -279px -156px;
}

nav li:nth-child(6) span:first-child {
    width: 25px;
    /* width:40px; */
    background-position: -70px -285px;
}

nav li:nth-child(7) span:first-child {
    width: 32px;
    width:40px;
    background-position: -123px -130px;
} 

.nav-divider{
    float: left;
    margin: 18px 16px 0;
    width: 1px;
    height: 14px;
    background: #ebeef3;
}

.container{
    margin: 0 auto;
    width:1080px; 
    padding: 8px 0;
    /* display:inline-block; */
    overflow: hidden;
}
.column-left{
    float:left;
    width: 740px;
    
}
.ad-main{
    height: 120px;
    background-color: white;
}

.news-cast{
    padding-top: 8px;
    /* background-color: white; */
}
.head-line{
    height: 44px;
    background-color: white;
    margin-bottom: 8px;
}
.news-stand{
    height: 246px;
    background-color: white;
}

.column-right{
    position: relative;
    float: right;
    width: 332px;
}

.column-right .area-login{
    position: relative;
    height: 120px;
    background-color: white;
}
.area-login .lg-local{
    display: block;
    padding:15px 25px;
}
.lg-local .lg-local-text{
    color: #888;
    font-size: 12px;
    line-height: 14px;
    margin: 0px;
}
.lg-local .lg-local-btn{
    display: block;
    margin-top: 12px;
}
.lg-local .lg-local-btn .lg-logo{
    display: inline-block;
    width: 280px;
    height: 37px;
    background-position: 0 -47px;
    background-image: url(https://s.pstatic.net/static/www/img/2018/sp_login_v180727.png);
    background-repeat: no-repeat;
}
.area-login .lg-link{
    position: absolute;
    bottom: 0;
    left: 25px;
    overflow: hidden;
    width: 280px;
}
.lg-link .lg-join{
    float: right;
    font-size: 12px;
    line-height: 38px;
    color: #666;
}
.lg-link .lg-link-set a{
    font-size: 12px;
    line-height: 38px;
    color: #666;
}
.column-right .area-weather{
    height: 142px;
    margin: 8px 0px;
    background-color: white;
}
.column-right .area-subad{
    height: 150px;
    background-color: white;
}

.column-bottom{
    clear:both;
    overflow: hidden;
    padding: 8px 0px;;
}
.area-themecast{
    position: relative;
    float: left;
    width: 738px;
    height: 882px;
    background-color: white;
}
.area-shopping{
    position: relative;
    float: right;
    width: 330px;
    height: 882px;
    background-color: white;
} 

</style>
