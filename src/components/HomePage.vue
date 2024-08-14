<template>
  <div class="home">
    <div class="bg-image">
      <div class="text-center text-white py-5 px-3">
        <h1>Welcome to My Portfolio</h1>
      </div>
      <img
        src="@/assets/computer.png"
        alt="Computer"
        class="fixed-computer"
        onclick="window.location.href = '/about/code'"
      />
      <img
        src="@/assets/phone.png"
        alt="Phone"
        class="fixed-phone"
        onclick="window.location.href = '/about/phone'"
      />
      <img
        src="@/assets/rope.png"
        alt="Rope"
        class="fixed-rope"
        onclick="window.location.href = '/about/climbing'"
      />
      <img
        src="@/assets/routesetting.png"
        alt="Route Setting Image PNG de fr.pngtree.com"
        class="fixed-routesetting"
        onclick="window.location.href = '/about/route-setting'"
      />
      <img
        src="@/assets/book.png"
        alt="Math Book"
        class="fixed-book"
        onclick="window.location.href = '/about/education'"
      />
      <img
        src="@/assets/marelle.png"
        alt="Marelle"
        class="fixed-marelle"
        onclick="window.location.href = '/about/animation'"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomePage',
  setup() {}
})
</script>

<style scoped>
.home {
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bg-image {
  background: url('@/assets/octopus.png') no-repeat center center;
  background-size: 50%;
  background-color: #090909;
  height: 100%;
  width: 100%;
  position: relative;
}

.fixed-computer {
  position: absolute;
  top: 61%;
  left: 33%;
  transform: translate(-50%, -50%);
  width: 160px;
}
.fixed-computer:hover {
  width: 180px;
  transition: 0.5s;
}

.fixed-phone {
  position: absolute;
  top: 78%;
  left: 34%;
  transform: translate(-50%, -50%);
  width: 100px;
}
.fixed-phone:hover {
  width: 120px;
  transition: 0.5s;
}

.fixed-rope {
  position: absolute;
  top: 35%;
  left: 35%;
  transform: translate(-50%, -50%);
  width: 100px;
}
.fixed-rope:hover {
  width: 120px;
  transition: 0.5s;
}

.fixed-routesetting {
  position: absolute;
  top: 32%;
  left: 63%;
  transform: translate(-50%, -50%);
  width: 80px;
}
.fixed-routesetting:hover {
  width: 120px;
  transition: 0.5s;
}

.fixed-book {
  position: absolute;
  top: 60%;
  left: 67%;
  transform: translate(-50%, -50%);
  width: 80px;
}
.fixed-book:hover {
  width: 100px;
  transition: 0.5s;
}

.fixed-marelle {
  position: absolute;
  top: 87%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-90deg);
  width: 400px;
}
.fixed-marelle:hover {
  width: 440px;
  transition: 0.5s;
}

@media (max-width: 900px) {
  .home {
    height: 80vh;
  }
  .bg-image {
    background-size: 100%;
  }
  .fixed-computer {
    position: absolute;
    top: 59%;
    left: 17%;
    transform: translate(-50%, -50%);
    width: 140px;
  }
  .fixed-computer:hover {
    width: 150px;
    transition: 0.5s;
  }
  .fixed-phone {
    position: absolute;
    top: 72%;
    left: 18%;
    transform: translate(-50%, -50%);
    width: 80px;
  }
  .fixed-phone:hover {
    width: 100px;
    transition: 0.5s;
  }
  .fixed-rope {
    position: absolute;
    top: 35%;
    left: 35%;
    transform: translate(-50%, -50%);
    width: 80px;
  }
  .fixed-rope:hover {
    width: 100px;
    transition: 0.5s;
  }
  .fixed-routesetting {
    position: absolute;
    top: 32%;
    left: 63%;
    transform: translate(-50%, -50%);
    width: 60px;
  }
  .fixed-routesetting:hover {
    width: 80px;
    transition: 0.5s;
  }
  .fixed-book {
    position: absolute;
    top: 60%;
    left: 67%;
    transform: translate(-50%, -50%);
    width: 60px;
  }
  .fixed-book:hover {
    width: 80px;
    transition: 0.5s;
  }
  .fixed-marelle {
    position: absolute;
    top: 87%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-90deg);
    width: 300px;
  }
  .fixed-marelle:hover {
    width: 340px;
    transition: 0.5s;
  }
}

@media (max-width: 480px) {
  .home {
    height: 80vh;
  }
  .bg-image {
    background-size: 100%;
  }
  .fixed-computer {
    position: absolute;
    top: 56%;
    left: 17%;
    transform: translate(-50%, -50%);
    width: 60px;
  }
  .fixed-computer:hover {
    width: 70px;
    transition: 0.5s;
  }
  .fixed-phone {
    position: absolute;
    top: 70%;
    left: 18%;
    transform: translate(-50%, -50%);
    width: 50px;
  }
  .fixed-phone:hover {
    width: 60px;
    transition: 0.5s;
  }
  .fixed-rope {
    position: absolute;
    top: 42%;
    left: 20%;
    transform: translate(-50%, -50%);
    width: 50px;
  }
  .fixed-rope:hover {
    width: 60px;
    transition: 0.5s;
  }
  .fixed-routesetting {
    position: absolute;
    top: 32%;
    left: 63%;
    transform: translate(-50%, -50%);
    width: 40px;
  }
  .fixed-routesetting:hover {
    width: 50px;
    transition: 0.5s;
  }
  .fixed-book {
    position: absolute;
    top: 60%;
    left: 67%;
    transform: translate(-50%, -50%);
    width: 40px;
  }
  .fixed-book:hover {
    width: 50px;
    transition: 0.5s;
  }
  .fixed-marelle {
    position: absolute;
    top: 87%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-90deg);
    width: 200px;
  }
  .fixed-marelle:hover {
    width: 240px;
    transition: 0.5s;
  }
}
</style>
