<template>
  <div class="wrapper">
    <ul class="list">
      <li class="list__item" v-for="item in dataSelect" :key="item.id">
        <h2 class="list__title">{{ item.title }}</h2>
        <transition-expand>
          <p ref="myText" class="list__content">
            {{ item.content }}
          </p>
        </transition-expand>
      </li>
    </ul>

    <div class="add-question">
      <a title="Новый вопрос-ответ" @click="addNewQuestions"></a>
    </div>
  </div>
</template>

<script>
import TransitionExpand from "./TransitionExpand";
export default {
  name: "Accardion",
  components: { TransitionExpand },
  data() {
    return {
      dataSelect: [
        {
          id: 1,
          title: "Title 1",
          content:
            "Зайдите в свой профиль > Настройки > Мои данные > Удалить аккаунт (внизу) Или нажмите на кнопку ниже:",
        },
        {
          id: 2,
          title: "Title 2",
          content:
            "1. Зайдите в свой профиль; 2. Откройте собственную фото галерею, нажав на кнопку с иконкой фотоаппарата; 3. Откройте нужное фото, зайдите в меню фотографии (верхний правый угол) > Удалить фотографию. (Обратите внимание, что основное фото сразу удалить нельзя, одно главное фото всегда должно оставаться в Вашем профиле. Его сначала необходимо заменить на другое, для этого выполните действия ниже; 4. Что бы удалить основное фото. Откройте его, зайдите в меню фотографии (верхний правый угол) > Заменить главное фото; Замените его другим. После того как фото перестанет быть главным, у него в меню, появится пункт «Удалить фотографию».",
        },
        { id: 3, title: "Title 3", content: "Content 3" },
      ],
    };
  },

  mounted() {
    const allTitle = document.querySelectorAll(".list__title");

    allTitle.forEach((title) => {
      title.addEventListener("click", () => {
        if (!title.classList.contains("list__title--active")) {
          allTitle.forEach((item) =>
            item.classList.remove("list__title--active")
          );
          title.classList.add("list__title--active");
        } else {
          title.classList.remove("list__title--active");
        }
      });
    });
  },

  methods: {
    // test(e) {
    //   const allContent = document.querySelectorAll(".list__content");
    //   console.log(allContent);
    //   console.log(e.target.childNodes);
    // },

    addNewQuestions() {
      console.log("new questions!");
    },
  },
};
</script>

<style scoped>
.list__item {
  margin-top: 5px;
  border-radius: 4px;
  background-color: #fff;
}
.list__title {
  margin: 0;
  padding: 10px 15px;

  color: #2a3542;
  font-size: 14px;
  font-weight: 400;
  font-family: Open Sans, sans-serif;

  cursor: pointer;
}

.list__content {
  margin: 0;
  padding: 15px;

  color: #797979;
  font-size: 13px;
  text-align: left;

  border-top: 1px solid #ddd;

  display: none;
}

.list__title--active + .list__content {
  display: block;
}
.add-question {
  width: 50px;
  height: 50px;

  position: relative;
}

.add-question a {
  cursor: pointer;
  width: 50px;
  height: 50px;

  box-sizing: border-box;

  padding: 10px 16px;

  font-size: 18px;
  line-height: 1.3333333;
  border-radius: 6px;

  background-color: #41cac0;
  border-color: #41cac0;

  position: absolute;

  transition: transform 0.3s linear;
}
.add-question a:hover {
  transform: scale(1.1);
}
</style>
