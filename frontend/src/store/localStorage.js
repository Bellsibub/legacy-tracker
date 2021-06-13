export const save = (state, opts) => {
  const serialisedState = JSON.stringify(state);
  localStorage.setItem(`${opts.namespace || 'persistantState'}`, serialisedState);
};

export const load = (opts) => {
  const serialisedState = localStorage.getItem(`${opts.namespace || 'persistantState'}`);
  if (serialisedState === null) return undefined;
  return JSON.parse(serialisedState);
};
