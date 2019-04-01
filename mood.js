window.onload = function() {
    const mood = document.querySelector("#mood");
    const moodContainer = document.querySelector("#mood-container");

    const INITIAL_STATE ={mood: "(❍ᴥ❍ʋ)"}

    function moodReducer(state=INITIAL_STATE, action) {

        if (action.type === "jake") {
            return {...state, mood: "(❍ᴥ❍ʋ)"}
        } else if (action.type === "wat") {
            return {...state, mood: "ఠ౬ఠ"}
        } else if (action.type === "tryhard") {
            return {...state, mood: "ᕕ( ͡° ͜ʖ ͡°)ᕗ"}
        } else if (action.type === "rage") {
            return {...state, mood: "(｀㊥益㊥)Ψ"}
        } else if (action.type === "bear") {
            return {...state, mood: "ʕ•ᴥ•ʔ"}
        } else {
            return {...state}
        }
    }

    const moodStore = Redux.createStore(moodReducer);

    moodContainer.addEventListener("click", function(evt){
        // update the state
        moodStore.dispatch({type: evt.target.id})
        // get state
        const currentMood = moodStore.getState().mood;
        // append state to dom
        mood.innerText = currentMood;
    })



}