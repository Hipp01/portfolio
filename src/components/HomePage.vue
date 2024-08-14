<template>
  <div class="home">
    <div class="bg-image">
      <div class="text-center text-white py-5 px-3">
        <h1>Welcome to My Portfolio</h1>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-6 mb-4">
            <div class="soapBubble bubble-phone">
              <div class="moveX1">
                <div class="moveY1">
                  <div class="deformX1">
                    <div class="deformY1">
                      <div class="bubbleImg">
                        <img
                          src="@/assets/images/phone.png"
                          alt="Phone"
                          class="fixed-phone"
                          onclick="window.location.href = '/about/phone'"
                        />
                      </div>
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
                      <div class="bubbleImg">
                        <img
                          src="@/assets/images/rope.png"
                          alt="Rope"
                          class="fixed-rope"
                          onclick="window.location.href = '/about/climbing'"
                        />
                      </div>
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
                      <div class="bubbleImg">
                        <img
                          src="@/assets/images/computer.png"
                          alt="Computer"
                          class="fixed-computer"
                          onclick="window.location.href = '/about/code'"
                        />
                      </div>
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
                      <div class="bubbleImg">
                        <img
                          src="@/assets/images/routesetting.png"
                          alt="Route Setting"
                          class="fixed-routesetting"
                          onclick="window.location.href = '/about/route-setting'"
                        />
                      </div>
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
                      <div class="bubbleImg">
                        <img
                          src="@/assets/images/suitcase.png"
                          alt="Suitcase"
                          class="fixed-suitcase"
                          onclick="window.location.href = '/about/travel'"
                        />
                      </div>
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
                      <div class="bubbleImg">
                        <img
                          src="@/assets/images/book.png"
                          alt="Math Book"
                          class="fixed-book"
                          onclick="window.location.href = '/about/education'"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
