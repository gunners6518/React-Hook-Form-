# React-Hook-Form

## register

` <input {...register("")} />`で form の値を保持できる。

## watct

`watch()`で常に register の値を監視出来る

## handleSubmit

register に入っている値を保持して submit 時の処理を行う。

## validation

- required を使う
  例：　`<input {...register("exampleRequired", { required: true })} />`
  例：valueAsNumber で number 型でのみ扱う　`<input {...register("age", { valueAsName: true })} />`

-
