export default {
  name: 'HelloWorld',
  data() {
    return {
      nameInput: '',
      click: ''
    }
  },
  computed: {
    inlineValadation() {
      return this.nameInput.length > 50
    },
    inputValadation() {
      return this.nameInput.length > 50 ? 'red-border' : ''
    },
    buttonDisable() {
      return this.nameInput.length > 50 || this.nameInput.length === 0
    }
  }
}