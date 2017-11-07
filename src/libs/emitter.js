export default {

  methods: {
    broadcast(componentName, eventName, params) {

    },
    dispath(componentName, eventName, params) {
      this.$children.forEach(child => {
        let name = child.name

        if (name === componentName) {}
      })
    }
  }
}
