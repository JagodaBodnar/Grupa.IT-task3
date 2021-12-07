export const generateRandom =(min,max)=>{
    if(min > max){
        throw new Error("Wrong range")
    }
    return Math.ceil(Math.random() * (max - min)) + min;
}