/**
 * binary search set
 */



/**
 * TODO
 */
export function accurate(a: number[], x: number, l: number, r: number): number{
    while(l<=r){
        const mid = l + (r-l) / 2
        if(a[mid] === x){
            return mid
        }
        else if (a[mid] < x){
            l = mid + 1
        }
        else {
            r = mid + 1
        }
    }
    return -1
}
export function accurate1(a: number[], x: number, l: number, r: number): number{

    return 1
}

/**
 * 
 * asc
 * 
 * @param a array
 * @param x 
 * @param l start index of the sorted part of the array
 * @param r end index of the sorted part of the array
 * @returns 
 */
export function suitableLocation(a: number[], x: number, l: number, r: number): number{
    while(l<r){
        const mid = l + (r-l) / 2
        if(a[mid] <= x){
            l = mid
        }else{
            r = mid
        }
    }
    return l
}
