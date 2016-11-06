<template lang="pug" src="./Editor.pug">
</template>

<script>
import marked from 'marked';
import _ from 'lodash';

const renderer = new marked.Renderer();

renderer.heading = (text, level) => {
  const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
  const ret = `<h${level}><a name="${escapedText}" class="anchor" href="#${escapedText}"><span class="header-link"></span></a>${text}</h${level}>`;
  return ret;
};

renderer.paragraph = (text) => {
  console.log(text);
  // const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
  return text;
};

// localStorage persistence
const STORAGE_KEY = 'md-resume-text';
const MIN_ROW = 10;
const defaultText = '# Hello! ';

const resumeStorage = {
  fetch: () => {
    const resumeText = localStorage.getItem(STORAGE_KEY) || defaultText;
    return resumeText;
  },
  save: (resumeText) => {
    localStorage.setItem(STORAGE_KEY, resumeText);
  },
};

export default {
  name: 'editor',
  data() {
    return {
      input: resumeStorage.fetch(),
      rows: 1,
    };
  },
  computed: {
    compiledMarkdown() {
      return marked(this.input, { sanitize: true, renderer });
    },
    rowSize() {
      const num = this.input.split('\n').length;
      return (num > MIN_ROW) ? num : MIN_ROW;
    },
  },
  methods: {
    update: _.debounce(function (e) {
      this.input = e.target.value;
      resumeStorage.save(this.input);
    }, 300),
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  html, body, #edit-area {
    margin: 0;
    height: 100%;
    font-family: 'Helvetica Neue', Arial, sans-serif;
    color: #333;
  }

  textarea, #edit-area div {
    display: inline-block;
    width: 49%;
    height: 100%;
    vertical-align: top;
    box-sizing: border-box;
    /*resize: none;*/
    padding: 0 20px;
  }

  textarea {
    border: none;
    border-right: 1px solid #ccc;
    resize: vertical;
    outline: none;
    background-color: #f6f6f6;
    width: 100%;
    font-size: 14px;
    font-family: 'Monaco', courier, monospace;
    padding: 20px;
  }

  #preview {
    text-align: left;
    code {
      color: #f66;
    }
  }
</style>
