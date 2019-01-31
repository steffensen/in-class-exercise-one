<template>
  <div class="hello">
    <div>
      <input type="text" v-model="nameInput" v-bind:class="inputValadation">
      <h1 v-if="inlineValadation" class="inline-validation">you exceeded 50 characters!</h1>
      <div id="submit">
        <button v-bind:disabled="buttonDisable">Submit</button>
      </div>
    </div>
  </div>
</template>

<script src="./HelloWorld.js"></script>
<style src="./HelloWorld.css" scoped></style>
