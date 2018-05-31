// @flow
type FooAction = { type: "FOO", foo: number };

type Action =
  | FooAction;

export const foo = (value: number): FooAction => {
  return { type: "FOO", foo: value };
}
