import type { PiniaPluginContext } from "pinia";

//this code will run when the store is created, only once
//this is a pinia plugin that will be used to store the state of the store in local storage

const localStoragePlugin = (context: PiniaPluginContext) => {
    const { store } = context;

    //$id is the name of the store, for example 'recipe'
    const storedState = localStorage.getItem(store.$id);

    if (storedState) {
        //parse the state from local storage and set it to the store

        store.$patch(JSON.parse(storedState));
    }

    store.$subscribe((mutation, state) => {
        //this will run every time the state of the store changes
        //store the state in local storage
        localStorage.setItem(store.$id, JSON.stringify(state));
    });
}
export default localStoragePlugin;