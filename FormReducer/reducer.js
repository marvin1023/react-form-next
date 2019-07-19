export const initialState = {
  values: {},
  checkMsg: {},
};

export function formState(state, action) {
  // console.log(action, 'action');
  const { type, name, value, data } = action;
  // 提交的 checkMsg 全部更新
  if (data) {
    return Object.assign({}, state, {
      [type]: data,
    });
  }

  // 单个更新
  Object.assign(state[type], {
    [name]: value,
  });
  return { ...state };
}
