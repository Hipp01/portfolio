<template>
  <div class="home">
    <div class="bg-image">
      <div class="text-center text-white py-5 px-3">
        <h1 class="mt-4 display-4">Hippolyte Larzul</h1>
        <h3 class="mb-4">Full Stack Developer</h3>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-6 mb-4">
            <div class="soapBubble bubble-phone">
              <div class="moveX1">
                <div class="moveY1">
                  <div class="deformX1">
                    <div class="deformY1">
                      <a href="/about/phone">
                        <div class="bubbleImg"></div>
                        <img src="@/assets/images/phone.png" alt="Phone" class="fixed-phone" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6 mb-4">
            <div class="soapBubble bubble-rope">
              <div class="moveX2">
                <div class="moveY2">
                  <div class="deformX2">
                    <div class="deformY2">
                      <a href="/about/climbing">
                        <div class="bubbleImg"></div>
                        <img src="@/assets/images/rope.png" alt="Rope" class="fixed-rope" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-6 mb-4">
            <div class="soapBubble bubble-computer">
              <div class="moveX1">
                <div class="moveY2">
                  <div class="deformX2">
                    <div class="deformY1">
                      <a href="/about/code">
                        <div class="bubbleImg"></div>
                        <img
                          src="@/assets/images/computer.png"
                          alt="Computer"
                          class="fixed-computer"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6 mb-4">
            <div class="soapBubble bubble-routesetting">
              <div class="moveX2">
                <div class="moveY1">
                  <div class="deformX1">
                    <div class="deformY2">
                      <a href="/about/route-setting">
                        <div class="bubbleImg"></div>
                        <img
                          src="@/assets/images/routesetting.png"
                          alt="Route Setting"
                          class="fixed-routesetting"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-6 mb-4">
            <div class="soapBubble bubble-suitcase">
              <div class="moveX1">
                <div class="moveY1">
                  <div class="deformX2">
                    <div class="deformY1">
                      <a href="/about/travel">
                        <div class="bubbleImg"></div>
                        <img
                          src="@/assets/images/suitcase.png"
                          alt="Suitcase"
                          class="fixed-suitcase"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6 mb-4">
            <div class="soapBubble bubble-book">
              <div class="moveX2">
                <div class="moveY2">
                  <div class="deformX1">
                    <div class="deformY2">
                      <a href="/about/education">
                        <div class="bubbleImg"></div>
                        <img src="@/assets/images/book.png" alt="Math Book" class="fixed-book" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p class="text-light">Cliquez sur les bulles pour en savoir plus !</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import '@/assets/css/HomePage.css'
import '@/assets/css/Bubbles.css'

export default defineComponent({
  name: 'HomePage',
  setup() {}
})
</script>

<style scoped></style>
