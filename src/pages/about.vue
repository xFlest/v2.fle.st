<template lang="pug">
.card
  .card-inner
    Nav
    .card-scroller
      Profile
      .profile-more-container 
        ProfileMore
        ProfileLike
        ProfileSkill
      AllLink
</template>

<script>
import ProfileLike from '../components/about/profile-like.vue';
import ProfileSkill from '../components/about/profile-skill.vue';
import AllLink from '../components/about/all-link.vue';
import Profile from '~/components/about/profile.vue';
import ProfileMore from '~/components/about/profile-more.vue';
import Nav from '~/components/nav.vue';
export default {
  name: "About",
  components: {
    Nav,
    Profile,
    ProfileMore,
    ProfileLike,
    ProfileSkill,
    AllLink,
},
  layout: 'default',
}
</script>

<style lang="scss" scoped>
.card {
  height: 92% !important;
  transform: none !important;
  &:is(.page-leave-to, .page-enter) {
    transition: .3s;
   .card-scroller {
      opacity: 0;
    }
  }
}
</style>
