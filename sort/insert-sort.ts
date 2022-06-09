import {suitableLocation} from './binary-search'

/**
 * TODO
 */
export function insertSort1(a: number[]): void{
    for(let j=1;j<a.length;j++){
        const key = a[j]
        let i=j-1
        while(i>=0 && a[i]>key){
            a[i+1] = a[i]
            i=i-1
        }
        a[i+1]=key
    }
}

/**
 * 
 * @param a 
 */
export function insertSort2(a: number[]): void{
    for(let j=1;j<a.length;j++){
        const key = a[j]
        const i = suitableLocation(a, key , 0, j-1)
        a[i]=key
    }
}
