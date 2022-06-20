/**
 * quick sort
 * @param a 
 */
function quickSort(a: number[], p,r): void{
    if(p<r){
        const q = partition(a,p,r)
        quickSort(a, p,q)
        quickSort(a, q,r)
    }
}

function partition(a: number[], p: number, r: number): number{
    if(p===r)
        return p
    const x=a[r]
    let i=p-1
    for(let j=p; j<r;j++){
        if(a[j]<=x){
            i=i+1
            const k = a[i]
            a[i] = a[j]
            a[j] = k
        }
    }
    const b = a[i+1]
    a[i+1] = a[r]
    a[r] = b
    return i+1
}
