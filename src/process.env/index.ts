export const getProcessEnv = (key:string) => {
    try {
        return process?.env?.[key]
    } catch  {
        return null
    }
}