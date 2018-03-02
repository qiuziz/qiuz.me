
# 使用antd搭建的web框架

### 目录结构


```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    actions/
    container/
    reducers/
    service/
    index.scss
    index.js
```

这两个文件是必须要有而且不能rename的:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

其他文件可以任意更改.

所有`JS` `CSS`需要创建在 `src`下，只有这个目录下的文件才会被webpack编译打包.

`public/index.html`只能引用`public`目录下的文件.


### 环境要求

NodeJS 6.0+

对node有多个版本需求的，可以使用[nvm](https://github.com/creationix/nvm)管理node版本

### 开发
```
$ npm install
$ npm start
```

国内npm install速度慢，可以安装[nrm](https://github.com/Pana/nrm)，修改npm源

### 编译
```
$ npm run build
```

### 项目使用

```
service/
    fetchapi.js
    history.js
    LocalStorage.js
    resource.js
    router.js
```


##### 本地代理

在`package.json`中配置

```
"proxy": "http://47.93.228.207"
```
[更多配置](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#proxying-api-requests-in-development)


##### 接口请求

在resource.js中配置接口


```
getUsers: fetchResource(`${API_HOST}${SERVICE_NAME}/getUsers`)
```


然后在业务中去获取数据

```
import { Resource } from '../../service/resource';

// GET
Resource.getUsers.get({id: 1}).then(res => {
      // todo
    }).catch(err => {
      // 错误处理
    })
    
// POST
Resource.getUsers.post({id: 1}, bodyParams).then(res => {
      // todo
    }).catch(err => {
      // 错误处理
    })
```

##### 路由跳转
```
import BrowserUtils from '../../service/history';

BrowserUtils.push({pathname: '/userinfo', state: {info: user }});

BrowserUtils.goBack();

BrowserUtils.replace({pathname: '/login'});
```

##### 本地存储
```
import LocalStorage from '../service/LocalStorage';

LocalStorage.setItem('user', {id: 1, age: 18, sex: 1});
const user = LocalStorage.getItem('user');
```

##### 路由配置

这里路由是[react-router 2.x](https://github.com/ReactTraining/react-router/tree/v2.8.1/docs)

```
import Login from '../container/login';
```


```
<Route path="/login" component={Login} />
```



##### 使用antd

```
import { Select } from 'antd';
```


