<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A.{}

<i>Here, first declare a variable which name is 'greeting'.in 2nd line greetign assign a value which is an empty object. greeting and greetign are not same. thats why when we console 'greetign' we found an empty object which is assign.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: c."12"

<i>Here, value of a=1,which type is number and value of b="2" which is string.in js when number and string are added both are created string.two string can not added.they just sit together.thats why we can show "12" which type is string. </i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A.

<i>Here, food is an array and info is an object.in Info, favouritefood is a property and its value is food[0],means pizza.3rd line the value of favouriteFood is changed.that means,previous value was pizza and new value is orange(suppose).Food array still unchanged.thats why the result is A.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B.

<i>Here, sayHi is a function which is called under the function we return a text and a parameter which is not decleared. thats why we see the return text such "Hi there" and then Undefined.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C.

<i>Here, nums is an array. and initial count value is 0. create a loop over the nums array and set a condition if each of array which is caught by num,if num is a truthy value,then increase 1 the count value.1st take 0,in js 0 is a falsy.thats why count not increase but nexe 3 times num are truthy, so the count value first,0+1=1 when num=1, then 1+1=2,when num=2 and final 2+1 =3,when num=3</i>

</p>
</details>
