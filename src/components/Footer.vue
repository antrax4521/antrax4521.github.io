<template>
    <div class="wrapper-footer">
        <footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Allgoritmo</h5>
                <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Sample</h5>
                <ul>
                  <li v-for="l in links" >
                      <a class="grey-text text-lighten-3" v-bind:href="l.url" target="_blank">{{l.title}}</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2019 allgoritmo.com
            </div>
          </div>
        </footer>
  </div>
</template>

<script>

export default {
    name: "Footer",
    props: {
        links: Array
    }
}
</script>

<style>
.wrapper-footer{
  width: 100%;
  height: auto;
  float:left;
}

.page-footer{
  background: #0e1e25 !important;
}
</style>