import React from 'react';

interface IEventType<T> {
  currentTarget: {
    name: keyof T | never;
  };
}

type OnChangeState<T> = (event: React.FormEvent<HTMLInputElement> & IEventType<T>) => void;

type UseFormState<T> = [T, OnChangeState<T>];

type SetState<T> = (name: keyof T | never, value: string) => void;

export const useFormState = <T>(initial: T): UseFormState<T> => {
  const [state, changeState] = React.useState(initial);

  const setState: SetState<T> = (name, value) => changeState({ ...state, [name]: value });

  const onChangeState: OnChangeState<T> = ({ currentTarget: { name, value } }) => {
    if (name in state) {
      setState(name, value);
    } else {
      throw new Error(`Field "${name}" is not key of state`);
    }
  };

  return [state, onChangeState];
};