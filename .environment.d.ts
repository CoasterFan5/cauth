declare global {
    namespace NodeJS {
        interface ProcessEnv {
            DBURL: string;
        }
    }
}

export { }