# [HOUSTEP] Pre-Interview Test

## 문제1

1. 아래 코드의 의미를 설명하고 ES6의 functional programming을 활용해서 변경하세요.

```js
// 수입 배열
let incomes = [1000, 2000, 3000, 4000];
//  부가세 빈배열
let vats = [];
// 가격별 부가세 for문으로 계산하여 부가세 빈배열에 넣음
for (i = 0; i < incomes.length; i++) {
  // 부가세 계산
  vats[i] = incomes[i] / 11;
}

let price = 0;
// 수입 총 가격
for (let i in incomes) {
  price += incomes[i];
}
```

### 답변

수입별 부가세를 계산하고 수입의 총합계의 코드인거 같습니다.

```js
// 부가세 함수
// vats에 []이 기본값입니다.
function vats() {
  let vats = [];
  for (i = 0; i < incomes.length; i++) {
    // 부가세 계산
    vats[i] = incomes[i] / 11;
  }
  return vats;
}
vats(incomes);

// map 메소드 사용
incomes.map(item => item / 11);

// 총 수입 함수
function totalPrice() {
  let price = 0;
  // 수입 총 가격
  for (let i in incomes) {
    price += incomes[i];
  }
  return price;
}
totalPrice(incomes);

// reduce 메소드 사용
incomes.reduce((acc, item) => acc + item, 0);
```

## 문제2

1. 아래 코드의 의미를 파악해서 설명하고 잠재적으로 발생할 수 있는 문제를 파악해서 설명하고 그 문제가 발생하지 않도록 코드를 수정하세요.

```js
const Moment = require("moment");

const convertParam = params => {
  for (const key in params) {
    if (params[key] == undefined) {
      delete params[key];
    }
    if (params[key] instanceof moment) {
      params[key] = params[key].toISOString();
    }
  }
};

const p = { a: "test", b: moment("2019-05-07"), c: undefined };
convertParam(p);
```

### 답변

1. const Moment = require("moment"); 에 변수의 이름이 대문자 이여서 에러가 납니다.
1. 화살표함수로 한줄 구문이 아니기 때문에 return 키워드를 작성해야합니다.

```js
// 시간관련 라이브러리 moment
const moment = require("moment");

const convertParam = params => {
  // 객체를 for..in으로 순회
  for (let key in params) {
    if (params[key] == undefined) {
      delete params[key];
    }
    if (params[key] instanceof moment) {
      params[key] = params[key].toISOString();
    }
  }
  return params;
};

const p = { a: "test", b: moment("2019-05-07"), c: undefined };
convertParam(p); // { a: 'test', b: '2019-05-07T00:00:00.000Z' }
```

## 문제3

1. 아래 코드를 `class`를 이용한 문법으로 변환해보세요. 둘을 비교해보고 어떤 것이 더 나은지 의견을 내보세요.

```js
// inherits 상속 라이브러리
const inherits = require("util").inherits;

function Queue(contents = []) {
  this.queue = [...contents];
}
// pop: 데이터 추출
Queue.prototype.pop = function() {
  // this.queue에 첫번째 인덱스만 value 변수에 담음
  const value = this.queue[0];
  // this.queue에 배열에 인덱스 0부터 1개
  this.queue.splice(0, 1);
  return value;
};

function PeekableQueue(contents) {
  // this값 바꾸기
  Queue.apply(this, contents);
}
inherits(PeekableQueue, Queue);
// peek: 맨 나중에 집어넣은 데이터 확인
PeekableQueue.prototype.peek = function() {
  return this.queue[0];
};

const queue = new Queue(["bye", "hello", "good"]);
const peekableQueue = new PeekableQueue(queue.queue);
queue.pop();
peekableQueue.peek();
```

### 답변

저는 class가 더 좋다고 생각합니다. 일단 코드문법적으로 간결하며 깔끔합니다.
inherits 라이브러리를 사용하지 않아도 됩니다.

```js
class Queue {
  constructor(contents = []) {
    this.queue = [...contents];
  }
  pop() {
    // this.queue에 첫번째 인덱스만 value 변수에 담음
    const value = this.queue[0];
    // this.queue에 배열에 인덱스 0부터1까지 제거
    this.queue.splice(0, 1);
    return value;
  }
}

class PeekableQueue extends Queue {
  constructor(contents) {
    super(contents);
    this.contents = this.contents;
  }
  peek() {
    return this.queue[0];
  }
}

const queue = new Queue(["bye", "hello", "good"]);
const peekableQueue = new PeekableQueue(queue.queue);
queue.pop();
peekableQueue.peek();
```

## ReactJS
