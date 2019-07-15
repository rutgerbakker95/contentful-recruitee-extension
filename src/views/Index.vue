<template>
  <div style="text-align: left;">
    <div v-if="selectedTitle" class="selected-vacancy">
      {{ selectedTitle }}
      <button @click="removeVacancy" class="selected-vacancy__delete">X</button>
    </div>

    {{ selectedInfo }}

    <article @click="handler($event, index)" v-for="(item, index) in info" :key="index">
      <h3>{{ item.title }}</h3>
      <span class="status">{{ item.status }}</span>
    </article>

    <button class="cf-btn-primary btn" v-if="selected" @click="addVacancy">Voeg toe</button>
  </div>
</template>

<script>
import { init as initContentfulExtension } from 'contentful-ui-extensions-sdk';
import axios from 'axios';

export default {
  name: 'Index',

  data() {
    return {
      extension: null,
      info: null,
      activeClass: 'is-selected',
      title: '',
      selectedTitle: '',
      selectedInfo: null,
      selectedIndex: null,
      selected: false,
      isAdded: false,
      init: true,
    };
  },

  methods: {
    // TODO specify name
    /**
     * Vacany handler
     */
    handler($ev, index) {
      this.removeActiveStates();
      this.selected = true;
      this.title = $ev.currentTarget.querySelector('h3').innerText;
      this.selectedIndex = index;

      $ev.currentTarget.classList.add(this.activeClass);
    },

    /**
     *  remove active states
     */
    removeActiveStates() {
      // UI stuff
      const elements = document.querySelectorAll('article');

      elements.forEach((el) => {
        el.classList.remove(this.activeClass);
      });
    },

    /**
     * Remove vacancy from selected list
     */
    removeVacancy() {
      // UI stuff
      this.removeActiveStates();
      this.selectedTitle = '';
      this.title = '';
      this.selected = false;
      this.selectedInfo = null;

      if (this.extension) {
        this.extension.field.removeValue();
      }
    },

    /**
     * Add vacancy to selected list
     */
    addVacancy() {
      // UI stuff
      this.selectedTitle = this.title;
      this.selectedInfo = this.info[this.selectedIndex];

      // Create value
      if (this.init && this.extension) {
        this.extension.field
          .setValue(this.selectedInfo)
          .then((data) => {
            // eslint-disable-next-line no-console
            console.log(data); // Returns Object.

            this.isAdded = true;
          })
          .catch((err) => {
            // eslint-disable-next-line no-console
            console.log(err);
          });
      }

      // Update value
      if (this.isAdded && this.extension) {
        this.extension.field.onValueChanged(this.selectedInfo);
      }
    },

    /**
     * Get data
     */
    getData() {
      const instance = axios.create({
        baseURL: 'https://acmecompany1.recruitee.com/api/',
        headers: { 'Content-Type': 'application/json' },
      });

      instance.get('offers', {
        // // //
      })
        .then((response) => {
          this.info = response.data.offers;
        });
    },
  },

  mounted() {
    initContentfulExtension((extension) => {
      this.extension = extension;
      this.extension.window.startAutoResizer();
    });

    this.getData();
  },
};
</script>

<style scoped>
article {
  position: relative;
  padding: 10px;
  background-color: white;
  cursor: pointer;
  border-radius: 2px;
}

article:hover {
  background-color: #f4f4f4;
}

article.is-selected {
  background-color: #e2e7ea;
}

h3 {
  margin-top: 0;
  margin-bottom: 8px;
}

.btn {
  margin-top: 10px;
}

.status {
  color: #0eb87f;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
  letter-spacing: .1rem;
}

.selected-vacancy {
  padding: 20px;
  border-bottom: 1px solid black;
  background-color: blue;
}

.selected-vacancy__delete {
  padding: 10px;
  color: white;
  background-color: red;
}
</style>
