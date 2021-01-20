<template>
  <div class="relative br3-l overflow-hidden  w-100 vh-50 cf center">
    <slot></slot>

    <button @click="next" aria-hidden="true" class="next f3 absolute fa fa-chevron-circle-right black-40"></button>
    <button @click="prev" aria-hidden="true" class="prev f3 absolute fa fa-chevron-circle-left black-40"></button>
  </div>
</template>

<script>
  export default {
    data() {
      return{
        
      }
    },
    methods: {
        next() {
            this.$emit('next')
        },
        prev() {
            this.$emit('prev')
        },

    }
  }
</script>

<style >
   
   button {     
       height:40px;
       width:50px;
       top: calc(50% - 50px);
       background-color: transparent;
       border:none;
       color: #fff;
   }
   button:focus, button:hover {
       outline:none;
       cursor:pointer;      
   }
   .next {
       right:0;
   }
   .prev {
       left:0;
   }
    
</style>