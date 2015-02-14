tsth
===============

桐昇通惠

##目录

- [本地调试](#%e6%9c%ac%e5%9c%b0%e8%b0%83%e8%af%95)
    - [Clone代码到本地](#clone%e4%bb%a3%e7%a0%81%e5%88%b0%e6%9c%ac%e5%9c%b0)
    - [安装第三方依赖](#%e5%ae%89%e8%a3%85%e7%ac%ac%e4%b8%89%e6%96%b9%e4%be%9d%e8%b5%96)
    - [启动本地调试服务器](#%e5%90%af%e5%8a%a8%e6%9c%ac%e5%9c%b0%e8%b0%83%e8%af%95%e6%9c%8d%e5%8a%a1%e5%99%a8)
    - [启动模拟后端服务器](#%e5%90%af%e5%8a%a8%e6%a8%a1%e6%8b%9f%e5%90%8e%e7%ab%af%e6%9c%8d%e5%8a%a1%e5%99%a8)
    - [浏览器访问](#%e6%b5%8f%e8%a7%88%e5%99%a8%e8%ae%bf%e9%97%ae)
- [发布](#%e5%8f%91%e5%b8%83)
    - [压缩代码](#%e5%8e%8b%e7%bc%a9%e4%bb%a3%e7%a0%81)


## 本地调试 ##

### clone代码到本地 ###

```powershell
cd <workspace>
git clone ssh://hao.zuo@svn02-dev.datayes.com:22/Achilles/tsth.git
```

> `workspace`即为你想要放置代码的位置

### 安装第三方依赖 ###

```powershell
cd <workspace>/tsth/js
bower install
```

> 因为`js/bower_components/sweetalert/lib/sweet-alert.css`引用了谷歌API的字体，由于“墙”的缘故，有时候页面加载会因为这个css而加载失败，所以当安装好依赖之后，记住删除掉该文件的第一行内容关于谷歌自提的引用。


### 启动本地调试服务器 ###

```powershell
cd <workspace>/tsth
heel dev
```

### 启动模拟后端服务器 ###

另开一个`Terminal`

```powershell
cd <workspace>/tsth
heel mock
```

### 浏览器访问 ###

打开`Chrome`，输入：[http://localhost:9000](http://localhost:9000)，回车即可

## 发布 ##

### 压缩代码 ###

```powershell
cd <workspace>/tsth
heel release --production
```

> 压缩后的代码生成在`<workspace>/biz.tar.gz`包里



## 相关阅读 ##

- [heel-前端开发工具链](http://confluence.datayes.com/pages/viewpage.action?pageId=8029526)
- [bower-web package manager](http://bower.io/)
- [requirejs](http://www.requirejs.org/)
- [angularjs](http://angularjs.org/)

