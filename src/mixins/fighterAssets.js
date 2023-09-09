export default {
  computed: {
    parsedNameForAssets() {
      const parsedName = this.fighter.name
        .toLowerCase()
        .replace(/ /g, '-')
        .replace(/\./g, '')
        .replace(/&/g, 'and')
        .replace(/\//g, 'and')

      return parsedName
    },
    parsedFranchiseForAssets() {
      const parsedFranchise = this.fighter.franchise
        .toLowerCase()
        .replace(/ /g, '-')
        .replace(/\./g, '')
        .replace(/&/g, 'and')

      return parsedFranchise
    },
    parsedFighterID() {
      let parsedID = this.fighter.id

      if (parsedID < 10) {
        parsedID = `0${parsedID}`
      } else {
        parsedID = parsedID.toString()
      }

      return parsedID.replace(/\.1/g, 'ᵋ')
    },
    getSelectedFighterImage() {
      return require(
        `../assets/characters/${this.parsedNameForAssets}/selected${this.fighter.alt}-min.png`,
      )
    },
    getSeriesIcon() {
      return require(
        `../assets/series-icons/${this.parsedFranchiseForAssets}.png`,
      )
    },
    getFranchiseLogo() {
      return require(`../assets/logos/${this.parsedFranchiseForAssets}.png`)
    },
    getThumbnailURL() {
      return require(`../assets/thumbnails/${this.parsedNameForAssets}-min.png`)
    },
  },
  methods: {
    getStockIcon(altNumber) {
      return require(
        `../assets/characters/${this.parsedNameForAssets}/stock${altNumber}.png`,
      )
    },
  },
}
