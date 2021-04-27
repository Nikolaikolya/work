<template>
  <div class="select-wrapper" @mouseleave="isSelectShow = false">
    <div class="select-group-header" @click="isSelectShow = !isSelectShow">
      {{ currentLangTitle }}
    </div>

    <button @click="isTest = !isTest">Is Test</button>

    <transition name="fade">
      <div class="select-group" v-if="isSelectShow">
        <p
          v-for="item in allSelectData"
          :key="item.id"
          class="select-group__item"
          @click="selectedLang(item)"
        >
          {{ item.title }}
        </p>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "FormSelect",
  components: {},
  props: {
    allSelectData: {
      type: Array,
    },
    currentLangTitle: {
      type: String,
    },
  },

  data() {
    return {
      isSelectShow: false,
      isTest: false,
    };
  },

  methods: {
    ...mapMutations({ setCurrentLangTitle: "setCurrentLangTitle" }),
    selectedLang(selectedLangItem) {
      this.setCurrentLangTitle(selectedLangItem.title);
      this.isSelectShow = false;
    },
  },
};
</script>

<style scoped>
.select-wrapper {
  width: 110px;
}

.select-group {
  border: 1px solid #ccc;
}

.select-group-header {
  border: 1px solid #e2e2e4;

  color: #777;

  width: 100%;
  height: 34px;
  padding: 6px 12px;
  background-color: #fff;
  border-radius: 4px;

  font-size: 14px;

  box-shadow: none;
  box-sizing: border-box;

  cursor: pointer;
}

.select-group-header:hover {
  background-color: #ccc;
}

.select-group__item {
  margin: 0;
  padding: 10px 0;
  font-size: 14px;
  color: #777777;

  cursor: pointer;
}

.select-group__item:hover {
  background-color: #ccc;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
