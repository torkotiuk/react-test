// static object (literals are ok)
export const myAction = {
  type: 'MY_UNIQUE_TYPE_ACTION',
  payload: 'super payload',
};

export const myAction111 = {
  type: 'MY_UNIQUE_TYPE_ACTION_111',
  payload: 'super payload 1',
};

// dinamic object (creators are better)
// syntax 1
export const myAction222 = value => {
  return { type: 'MY_UNIQUE_TYPE_ACTION_222', payload: value };
};

// syntax 2
export const myAction333 = value => ({
  type: 'MY_UNIQUE_TYPE_ACTION_222',
  payload: value,
});
