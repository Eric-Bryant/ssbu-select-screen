export default {
  computed: {
    parsedNameForAssets() {
      const parsedName = this.fighter.name
        .toLowerCase()
        .replace(/ /g, '-')
        .replace(/\./g, '')
        .replace(/&/g, 'and')

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
    getSelectedFighterImage() {
      return require(`../assets/characters/${this.parsedNameForAssets}/selected${this.fighter.alt}-min.png`)
    },
    getSeriesIcon() {
      return require(`../assets/series-icons/${this.parsedFranchiseForAssets}.png`)
    },
    getFranchiseLogo() {
      return require(`../assets/logos/${this.parsedFranchiseForAssets}.png`)
    },
    getThumbnailURL() {
      return require(`../assets/thumbnails/${this.parsedNameForAssets}-min.png`)
    }
  }
}
