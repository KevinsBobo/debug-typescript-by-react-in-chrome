

export const useSubmit = () => {
    // fix Buffer is not defined
    window.Buffer = window.Buffer || require("buffer").Buffer;
    return { submit }
}

async function submit() {
    console.log("Debug code here")
}