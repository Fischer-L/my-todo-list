// The localStore in charge of saving data in the local.
// Why creating this layer?
// With this layer we can alter different web storage methods without affect our app.
const localStore = {
  init() {
    // 1. Let's use the simple localStorage for now.
    //    Switch to other way in the future if needed.
    // 2. Should we make the storage method a param?
    //    Maybe yes. But let's don't worry this for now.
    //    This can be done easily in the future.
    //    Let's keep things simple for now.   
    this._local = window.localStorage || null;
  },

  set(key, value) {
    if (!this._local || !key) {
      return;
    }

    // `requestIdleCallback` is better for our case here.
    // Unfortunately `requestIdleCallback` gets poor supports
    window.requestAnimationFrame(() => {
      try {
        let data = JSON.stringify(value);
        this._local.setItem(key, data);
      } catch (e) {
        // Print out the error so know what happen if any.
        console.error(e);
      }
    });
  },

  get(key, fallback) {
    let data = null;
    if (this._local && key) {
      try {
        data = this._local.getItem(key);
        if (data) {
          return JSON.parse(data);
        }
      } catch (e) {
        // Print out the error so know what happen if any.
        console.error(e);
      }
    }

    if (fallback !== undefined) {
      data = fallback;
    }
    return data;
  }
};
localStore.init();

export default localStore;
