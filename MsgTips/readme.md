### 特性说明

- 依赖于 IconTips 组件，提示 icon 用的是 IconTips 组件。
- 提供三种大小：s、m、l
- 支持多行文字

### 常规使用

```jsx
<div>
  <MsgTips type="alert" text="保存失败" />
  <MsgTips type="ok" text="保存成功" />
  <MsgTips type="info" text="注意..." />
  <MsgTips type="question" text="有问题了" />
</div>
```

设置大小

```jsx
<MsgTips type="info" size="s" text="确认要删除该条记录" />
<MsgTips type="info" size="m" text="确认要删除该条记录" />
<MsgTips type="info" size="l" text="确认要删除该条记录" />
```

设置多行文字

```jsx
<MsgTips type="info" size="l" text="确认要删除该条记录" subText="删除后将无法恢复" />
```