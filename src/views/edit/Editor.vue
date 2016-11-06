<template lang="pug" src="./Editor.pug">
</template>

<script>
import marked from 'marked';
import _ from 'lodash';

// localStorage persistence
const STORAGE_KEY = 'md-resume-text';
const defaultText = '# bjljbljhgHello!! ';

const resumeStorage = {
  fetch: () => {
    const resumeText = localStorage.getItem(STORAGE_KEY) || defaultText;
    console.log(`fetch: ${resumeText}`);
    return resumeText;
  },
  save: (resumeText) => {
    console.log(`save: ${resumeText}`);
    localStorage.setItem(STORAGE_KEY, resumeText);
  },
};

export default {
  name: 'editor',
  data() {
    return {
      input: resumeStorage.fetch(),
    };
  },
  computed: {
    compiledMarkdown() {
      console.log(`compiled: ${this.input}`);
      return marked(this.input, { sanitize: true });
    },
  },
  methods: {
    update: _.debounce(function (e) {
      this.input = e.target.value;
      console.log(`update: ${this.input}`);
      resumeStorage.save(this.input);
    }, 300),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  html, body, #editor {
    margin: 0;
    height: 100%;
    font-family: 'Helvetica Neue', Arial, sans-serif;
    color: #333;
  }

  textarea, #editor div {
    display: inline-block;
    width: 49%;
    height: 1000%;
    vertical-align: top;
    box-sizing: border-box;
    padding: 0 20px;
  }

  textarea {
    border: none;
    border-right: 1px solid #ccc;
    resize: vertical;
    outline: none;
    background-color: #f6f6f6;
    font-size: 14px;
    font-family: 'Monaco', courier, monospace;
    padding: 20px;
  }

  #preview {
    text-align: left;
  }
  code {
    color: #f66;
  }
</style>
