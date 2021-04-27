<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <form-select
      :all-select-data="selectOption"
      :currentLangTitle="currentLangTitle"
    />

    <accardion />
  </div>
</template>

<script>
import FormSelect from "../components/FormControll/FormSelect";
import { mapGetters } from "vuex";
import Accardion from "../components/Accardion";
export default {
  name: "Home",
  computed: {
    ...mapGetters({
      selectOption: "getSelectOption",
      currentLangTitle: "getCurrentLangTitle",
    }),
  },
  components: {
    Accardion,
    FormSelect,
  },

  methods: {},
};
</script>

<style scoped>
.home {
  background-color: #ccc;
}
</style>
