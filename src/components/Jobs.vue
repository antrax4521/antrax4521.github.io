<template>
    <div class="wrapper-formation">
    <div class="container">
      <div class="row">
        <div class="col s8">
          <div class="box">
            <h1 class="p-code">{{ jobs.title }}</h1>
            <ul id="example-1" class="collapsible">
            <li v-for="i in jobs.items">
                  <div class="collapsible-header">
                    <p>{{i.company}}</p> <br>
                    <p>De: {{i.time.from}} a {{i.time.to}}</p>
                  </div>
                  <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "Jobs",
    props: {
        jobs: Object
    }
}
</script>

<style>

.wrapper-formation{
  background: #2d3b41;
  width: 100%;
  height: auto;
  padding:50px 0px;
  float:left;
}

.wrapper-formation .box {
  width: 100%;
  height: 100%;
  background-color:#ffffff;
  border-radius: 5px;
  padding:10px 10px 10px 10px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
}


</style>


