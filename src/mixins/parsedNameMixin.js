export default {
  computed: {
    parsedNameForAssets() {
      const parsedName = this.fighter.name
        .toLowerCase()
        .replace(/ /g, '-')
        .replace(/\./g, '')
        .replace(/&/g, 'and')

      return parsedName
    }
  }
}
