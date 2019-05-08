# [HOUSTEP] Pre-Interview Test

## 문제1

1. 아래 코드의 의미를 설명하고 ES6의 functional programming을 활용해서 변경하세요.

```js
let incomes = [1000, 2000, 3000, 4000];

let vats = [];
for (i = 0; i < incomes.length; i++) {
  // 부가세 계산
  vats[i] = incomes[i] / 11;
}

let price = 0;
for (let i in incomes) {
  price += incomes[i];
}
```

### 답변

```js
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

```js
```

## 문제3

1. 아래 코드를 `class`를 이용한 문법으로 변환해보세요. 둘을 비교해보고 어떤 것이 더 나은지 의견을 내보세요.

```js
const inherits = require("util").inherits;

function Queue(contents = []) {
  this.queue = [...contents];
}
Queue.prototype.pop = function() {
  const value = this.queue[0];
  this.queue.splice(0, 1);
  return value;
};

function PeekableQueue(contents) {
  Queue.apply(this, contents);
}
inherits(PeekableQueue, Queue);
PeekableQueue.prototype.peek = function() {
  return this.queue[0];
};
```

### 답변

```js
```

## ReactJS
