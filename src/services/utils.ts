export const objectToArray = (obj: any): any[] => {
    const temp: any[] = [];

    Object.keys(obj).forEach(key => temp.push(obj[key]))

    return temp
}