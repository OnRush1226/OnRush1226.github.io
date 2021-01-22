---
title: '内置组件'
toc: menu
---

## **Alert**
> 提示框 <br/>
> `type`可选`warning`、`info`、`success`、`error`，默认是 `warning`<br/>
> *内部只能写 HTML*
``` html
<!-- 语法 -->
<Alert>默认样式</Alert>
<Alert type="info">`info`</Alert>
```
<Alert>默认样式：`warning`</Alert>
<Alert type="info">`info`</Alert>
<Alert type="success">`success`</Alert>
<Alert type="error">`error`</Alert>

## **Badge**
> 标签 <br/>
``` html
<Badge>标签内容</Badge>
```
<Badge>标签内容</Badge>

## **embed**
> 在一个md文档中嵌入另一个md文档中的内容，可以是整个文档内容，也可以是部分 <br/>
> `src` 路径是相对路径....<br/>

注意：
- 部分内容时：url最后加 `#` 后面加`L1-L10`：表示引入第1到第10行内容
- md文档行数不精确，大概1行占2行...

``` html
<!-- 全部内容 -->
<embed src="/dumi/dumi_router"></embed>
<!-- 部分内容：下面展示的是部分内容 -->
<embed src="./to/exp.md#L2-L5"></embed>
```
<embed src="./to/exp.md#L2-L5"></embed>