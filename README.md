# @mac-apps/core

**用于获取 MAC 软件的偏好设置信息**

- 支持偏好类型的范性
- 使用 ESModule和CommonJS 模块方式

## 安装

```shell
npm i @mac-apps/core -S
```

## 使用方法

以 Iterm 软件为例 传入软件偏好的配置文件路径(`${os.homedir()}/Library/Preferences/com.googlecode.iterm2.plist`)

```typescript
import App from '@mac-apps/core';

export interface ItermPreferences {
    'New Bookmarks': {
        Name: string;
        Tags: any[];
    }[];
}

const iterm = new App<ItermPreferences>(`${os.homedir()}/Library/Preferences/com.googlecode.iterm2.plist`);
const preferences = await iterm.getPreferences();
console.log(preferences);
```

`ItermPreferences` 定义类型可以由如下工具生成

详情请看

[@liangshen/plist-cli](https://www.npmjs.com/package/@liangshen/plist-cli?activeTab=readme)