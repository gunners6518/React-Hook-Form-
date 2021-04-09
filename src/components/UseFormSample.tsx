import React from "react";
import { useForm } from "react-hook-form";

type FormInput = {
  firstName: string;
  lastName: string;
  test: string;
};
export const UseFormSample = () => {
  const { register, handleSubmit } = useForm<FormInput>({
    mode: "onSubmit", //registerをいつ検証するか。defaultはonSubmit
    reValidateMode: "onChange", //エラーが出ている入力値の再検証のタイミング。onChangeだと変更がある毎に再チェックが入る
    defaultValues: {}, //初期値
    //resolver: 外部の認証ライブラリを使える
  });
  console.log(register);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="test">test</label>
        <input type="hidden" {...register("test")} />
      </form>
    </>
  );
};

//onblurイベント：フォーカスを失った時に発生
