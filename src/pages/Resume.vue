<template>
  <div class="q-pa-md">
    <div class="row">
      <div class="col-md-4 col-lg-4 col-xs-12 col-sm-12 text-center">
        <q-card>
          <q-card-section>

            <img class="q-ml-lg" src="resume02.jpg" style="width:160px" alt="">


          </q-card-section>

          <a class="link resume" href="resume02.jpg" download>
            <div class="image">resume image</div>
          </a>


        </q-card>
      </div>
      <div class="col-md-4 col-lg-4 col-xs-12 col-sm-12 text-center">
        <q-card>
          <q-card-section>
            <img class="q-ml-lg" src="resume01.jpg" style="width:160px" alt="">


          </q-card-section>
          <a class="link resume" href="resume01.jpg" download>
            <div class="image">resume01 image </div>
          </a>
        </q-card>
      </div>
      <div class="col-md-4 col-lg-4 col-xs-12 col-sm-12 text-center">
        <q-card style="height:280px">
          <q-card-section>
            <a href="https://s24.picofile.com/d/8450950276/1d22a402-af3e-4c5e-a620-e3634c780643/resume03.pdf"
              class="link" download>
              <div class="pdf resume">resume english pdf</div>
            </a>
          </q-card-section>
        </q-card>
      </div>

    </div>



  </div>

</template>

<script setup>

</script>

<style>
.resume:hover {
  color: red
}

.link {
  text-decoration: none;
  cursor: pointer;
  color: #000
}

.pdf {
  margin-top: 110px;
  text-transform: uppercase
}

.image {
  position: relative;
  top: -15px
}
</style>
