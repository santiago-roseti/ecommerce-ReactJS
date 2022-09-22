export const customFetch = (films) => {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            resolve(films)
        }, 2000)
    })
}