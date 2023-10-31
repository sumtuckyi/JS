// create promise object
// 
const myPromise = new Promise((resolve, reject) => {
    console.log('Promise created.')
    
    // reject('fail') : opt1
    // resolve('success') : opt2
    // pending 상태가 아니라면 위의 둘 중 한 가지 상태
    
    // 비동기 작업이 성공했는지 실패했는지에 따라 다른 메서드를 호출한다. 
    let num = 0
    if (num === 0) {
        resolve('success')
    } else {
        reject('fail')
    }
}) // for reusing the promise object 

// then()이 인자로 받는 callback의 인자가 resolve() or reject() => 이 인자가 작업의 성공 여부를 알려줌
myPromise.then((res) => {
    console.log(res) // success
}).catch((error) => {
    console.log(`error = ${error}`) // error = fail
})