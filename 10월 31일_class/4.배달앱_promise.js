// 1. 주문 번호 생성하기
function placeOrder(menu) {
  // 1. goCook 함수 호출
  // 2. 실패가 없다
  return new Promise((resolve) => {
    setTimeout(() => {
      const orderId = Math.floor(Math.random() * 1000) + 1;
      // 성공했을 때 다음 동작은 goCook 이다 라는 것을
      // 머리속에 알고있는 상태로 코딩을 해야함
      resolve({ orderId, menu }) // 해당 함수에서의 작업은 랜덤 주문번호 생성, 성공 결과를 resolve()로 반환
    }, Math.random() * 2000);
  })
}


// 2. 실제로 주문하기
function cook(order) {
  // 1. 성공, 실패가 정해져있고
  // 2. 성공 시 goDelivery 로 넘어감
  // 3. 실패 시에는 console 출력
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isCookingSuccessful = Math.random() < 0.8;
      if (isCookingSuccessful) {
        // 요리를 성공했다는 의미
        // 다음에 할 일: 배달
        resolve(order) // 해당 함수에서 하는 작업은 주문의 성공여부 결정, 성공이면 인자로 받은 데이터를 그대로 반환
      } else {
        reject(`주문 실패: ${order.menu} 요리 실패, 다시 주문해주세요.`);
      }
    }, Math.random() * 2000);
  })
  
}

function deliver(order) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isDeliverySuccessful = Math.random() < 0.9;
      if (isDeliverySuccessful) {
        resolve(`주문 성공: ${order.menu} 배달 완료!`)
      } else {
        reject(`주문 실패: ${order.menu} 배달 실패, 다시 주문해주세요.`);
      }
    }, Math.random() * 2000);
  })
  
}

// 배달 시작
function processOrder(orderDetails) {
  // console.log(order) // order = resolve({ orderId, menu }) = { orderId: 597, menu: '피자' }
  placeOrder(orderDetails.menu).then((order) => {
    console.log(`주문이 생성되었습니다. ${order.menu} 요리 주문 ID: ${order.orderId}`)
    return cook(order)
  }).then((order) => { 
    console.log(`${order.menu} 요리 완료!`) 
    return deliver(order)
  }).then((result) => {
    console.log(result)
  }).catch((error) => {
    console.log(error)
  })
}

const orderDetailsList = [
  { menu: "치킨" },
  { menu: "피자" },
  { menu: "샐러드" },
];

orderDetailsList.forEach((element) => {
  processOrder(element);
});
