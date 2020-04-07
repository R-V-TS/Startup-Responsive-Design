<template>
  <div id="app">
    <div id="top_block">
      <div class="header">
        <h3>Startup</h3>
        <ul class="navbar">
          <li><a href="#">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Works</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Clients</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div class="main_banner">
        <h1>Welcome to startup</h1>
        <h6>Your Favourite Creative Agency Template</h6>
        <button>get started</button>
      </div>
    </div>
    <div class="white_path">
      <h2>Services</h2>
      <hr />
      <span>We offer ipsum dolor sit amet, consetetur sadipscing elitr amet</span>
      <ul class = "serviceList">
        <li v-for="service in myServices" v-bind:key="service.id">
          <img :src="service.img" :alt="service.title">
          <h4>{{ service.title }}</h4>
          <p>{{ service.description }}</p>
        </li>
      </ul>
    </div>
    <div class="gray_path">
      <h2>About us</h2>
      <hr />
      <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr amet</span>
      <ul class = "infoAboutUs">
        <li><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sediam nonumy eirmod tempor invidunt ut labore et dolore aliquyam erat, sed diam voluptua. At vero eos et accusam et justo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor et dolore aliquyam erat. Lorem ipsum dolor sit amet. Lorem ipsum eat.</p></li>
        <li><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sediam nonumy eirtempor invidunt ut labore et dolore aliquyam erat, sed diam voluptua. At vero eos eaccusam et justo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor et dolore aliquyam erat. Loreipsum dolor sit amet. Lorem ipsum dolor et.</p></li>
      </ul>
      <ul class="usAvatars">
        <button class="rightButton" v-on:click="nextUserButton">
          <hr />
          <hr />
        </button>
        <button class = "leftButton" v-on:click="previousUserButton">
          <hr />
          <hr />
        </button>
        <li v-for = "user in infoAboutUs" v-bind:key="user.id">
          <ul class="socialSrc" v-if = "user.showSocial" v-on:mouseout="user.showSocial = false">
            <li class = "socialSrc__tile"><a :href="user.social_networks.facebook"><img :src="require('./assets/Facebook_Logo.png')"></a></li>
            <li class = "socialSrc__tile"><a :href="user.social_networks.twitter"><img :src="require('./assets/Twitter_Logo.png')"></a></li>
            <li class = "socialSrc__tile"><a :href="user.social_networks.gplus"><img :src="require('./assets/Google_Plus_Logo.png')"></a></li>
            <li class = "socialSrc__tile"><a :href="user.social_networks.linkedin"><img :src="require('./assets/LinkedIn-Logo.png')"></a></li>
          </ul>
          <img :src="user.img" :alt="user.name" v-on:mouseover="user.showSocial = true">
          <h4>{{ user.name }}</h4>
          <p>{{ user.profession }}</p>
        </li>
      </ul>
    </div>
    <div class="white_path">
      <h2>Latest works</h2>
      <hr />
      <ul class = "worksPanelMenu">
        <li class = "isActiveCategory">All</li>
        <li>Branding</li>
        <li>Design</li>
        <li>Development</li>
        <li>Strategy</li>
      </ul>
      <ul class = "workTiles">
        <li class="workTile" v-for = "work in worksShowsList" v-bind:key="work.id">
          <img :src="work.img" :alt="work.name">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { aboutAsScope, worksList } from './data'

export default {
  name: 'App',
  created () {
    this.take4User()
    this.loadWorks("all")
  },
  data: function () {
    return {
      myServices: [
        {id: 1, img: require('./assets/service-1.png'), title: 'Clean Typography', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. Lorem ipsum.'},
        {id: 2, img: require('./assets/service-2.png'), title: 'Rock Solid Code', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. Lorem ipsum.'},
        {id: 3, img: require('./assets/service-3.png'), title: 'Expert Support', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. Lorem ipsum.'}
      ],
      infoAboutUs: undefined,
      startUser: 0,
      worksShowsList: undefined
    }
  },
  methods: {
    nextUserButton () {
      this.startUser++
      if (this.startUser === aboutAsScope.length) {
        this.startUser = 0
      }
      this.take4User()
    },
    previousUserButton () {
      this.startUser--
      if (this.startUser < 0) {
        this.startUser = aboutAsScope.length
      }
      this.take4User()
    },
    take4User () {
      let userList = []
      let i = this.startUser
      while (userList.length < 4){
        if (i >= aboutAsScope.length){
          i = -1
        } else if (i < aboutAsScope.length) {
          userList.push(aboutAsScope[i])
        }
        i++
      }
      this.infoAboutUs = userList
    },
    loadWorks (type) {
      let list = []
      if (type === "all") {
        let i = -1
        while (list.length < 9) {
          i++
          if (i === worksList.length) {
            break
          }
          list.push(worksList[i])
        }
      } else {
        let i = -1
        while (list.length < 9) {
          i++
          if (i === worksList.length) {
            break
          }
          if (worksList[i].type === type) {
            list.push(worksList[i])
          }
        }
      }
      this.worksShowsList = list
      console.log(list)
    }
  }
}
</script>

<style lang="sass">
@import "sass/style"
</style>
