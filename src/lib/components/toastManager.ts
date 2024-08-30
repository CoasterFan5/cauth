import toast from "svelte-french-toast";

export const createPromiseToast = (loadingMessage: string) => {
    let toastPromiseResolve!: (reason: string | undefined) => void;
    let toastPromiseReject!: (reason: string | undefined) => void;

    const toastPromise = new Promise((resolve, reject) => {
        toastPromiseResolve = resolve;
        toastPromiseReject = reject;
    });

    console.log("toasting");
    toast.promise(toastPromise, {
        loading: loadingMessage,
        success: (message) => message ? `${message}` : "Success!",
        error: (message) => message ? `${message}` : "Uh Oh! Error occured."
    })

    return {
        resolve: toastPromiseResolve,
        reject: toastPromiseReject
    }
}