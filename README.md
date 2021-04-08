# React-Hook-Form

## register

` <input {...register("")} />`で form の値を保持できる。

## watct

`watch()`で常に register の値を監視出来る

## handleSubmit

register に入っている値を保持して submit 時の処理を行う。

## validation

- required を使う
  `<input {...register("exampleRequired", { required: true })} />`
  valueAsNumber で number 型で入力値を返す　`<input {...register("age", { valueAsName: true })} />`
  maxLength で 4 文字以下は OK ` <input {...register("lastName", { required: true, maxLength: 4 })} />`

- error ハンドル

```ts
<input {...register("firstName", { required: "This is required" })} />;
{
  errors.firstName && <p>{errors.firstName.message}</p>;
}
```

[![Image from Gyazo](https://i.gyazo.com/22407b814c959c52b7ee20ba987820f3.png)](https://gyazo.com/22407b814c959c52b7ee20ba987820f3)
