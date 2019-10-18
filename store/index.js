import Vuex from 'vuex'
import article from "./modules/article"
import counter from "./modules/counter"

const createStore = () => {
    return new Vuex.Store({
        modules: {
            counter,
            article
        }
    })
}

export default createStore