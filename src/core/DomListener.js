export class DomListener {
    constructor($root, listeners = []) {
        if(!$root) throw new Error('No $root provided for DomListener')
        this.$root = $root
        this.listeners = listeners
    }

    initDomListeners() {
        this.listeners.forEach(listener => {
            console.log(listener)
        })
    }

    removeDomListeners() {

    }
}
