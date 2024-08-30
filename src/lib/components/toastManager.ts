import type { ActionResult } from "@sveltejs/kit";
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

type CustomFormActionData = ActionResult<Record<string, unknown> | undefined, Record<string, unknown> | undefined>
type PromiseToastActions = ReturnType<typeof createPromiseToast>
export const handleToastPromiseWithFormAction = (formActionData: CustomFormActionData, toastActions: PromiseToastActions) => {
    switch (formActionData.type) {
        case "success":
            toastActions.resolve(`${formActionData.data?.message}`);
            break;
        case "failure":
            toastActions.reject(`${formActionData.data?.message}`);
            break;
        case "error":
            toastActions.reject(`${formActionData.error?.message}`);
            break;
        default:
            break;
    }
}