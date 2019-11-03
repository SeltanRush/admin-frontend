import * as React from 'react';

type OnChangeState = (event: React.FormEvent<HTMLInputElement>) => void;

type UseFormState<T> = [T, OnChangeState];

type SetState = (name: string, value: string) => void;

export const useFormState = <T>(initial: T): UseFormState<T> => {
  const [state, changeState] = React.useState(initial);

  const setState: SetState = (name, value) => changeState({ ...state, [name]: value });

  const onChangeState: OnChangeState = ({ currentTarget: { name, value } }) => {
    if (name in state) {
      setState(name, value);
    } else {
      throw new Error(`Field "${name}" is not key of state`);
    }
  };

  return [state, onChangeState];
};