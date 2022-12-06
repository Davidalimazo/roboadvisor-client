export const isErrorString=(value:string)=>{
    return value.length > 0 ? true : false
}
export const isErrorNumber=(value:number)=>{
    return value > 0 ? false : true
}