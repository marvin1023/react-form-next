### 特性说明

- 四种类型：alert、info、question、ok
- 四种大小可配：s、m、l、xl、xxl（默认为 s 大小）
- 特定大小可通过自定义 class 改变 svg 的 size 即可

### 常规使用

```jsx
<div>
  <IconTips type="alert" />
  <IconTips type="info" />
  <IconTips type="question" />
  <IconTips type="ok" />
</div>
```

s、m、l、xl、xxl 大小对应的为 16px、20px、24px、32px、48px

```jsx
<div>
  <IconTips type="info" />
  <IconTips size="m" type="alert" />
  <IconTips size="l" type="info" />
  <IconTips size="xl" type="question" />
  <IconTips size="xxl" type="ok" />
</div>
```
