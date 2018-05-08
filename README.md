# learn gulp

## 为什么要用gulp
自动化处理任务。
- 创建开发用的服务器，监视文件变化，自动刷新浏览器
- sass编译成css、jade编译成html
- 把某个类型文件移动到指定文件夹
- 减小文件大小

## 准备
### 安装gulp命令行工具
- `npm install -g gulp` 全局安装gulp

### 项目初始化
- `npm init` 创建package.json
- `npm install gulp --save` 在这个项目中安装gulp，在package.json中写入gulp，作为开发依赖。

### 创建gulpfiles.js

```javascript
//引入gulp模块
var gulp = require('gulp');
//创建名称为hello1的任务
gulp.task('hello1', function () {
    console.log('hello world1');
});

gulp.task('hello2', function () {
    console.log('hello world2');
});
```
在命令行中执行`gulp hello1`，输出hello world1
在命令行中执行`gulp hello2`，则输出hello world2

```javascript
//创建默认执行的任务
···
gulp.task('default', ['hello1','hello2'])
```
在命令行中执行`gulp`，执行任务hello1、hello2，输出hello world1、hello world2

## 基础功能
- `gulp.src()`读取想要处理的文件
- `pipe()`处理文件
- `.pipe(gulp.dest())`处理好的文件放到指定的文件

### 复制单个文件
```javascript
···
//把目标文件`index.html`移动到`dest`文件夹
gulp.task('copy_index',function () {
    return gulp.src('index.html').pipe(gulp.dest('dest'))
})
```
命令行中执行`gulp copy_index`，创建dest文件，把index.html复制到dest文件夹中。

### 复制多个文件
```javascript
gulp.task('images', function () {
    return gulp.src('images/*.jpg').pipe(gulp.dest('dest/images'))
})
```

### globs

> Glob类似于regular expression，但是仅用来匹配档案路径名称。名称由来是UNIX一个负责解析匹配档案、叫做global command的模组。
> [glob wiki](https://en.wikipedia.org/wiki/Glob_(programming))
- `images/*.jpg`
- `images/*.{png,jpg}`
- `images/*` 包含images目录下文件以及二级子目录，不包含子目录里的文件。
- `images/*/*` 包含images目录下的文件以及二级子目录里的文件。
- `images/**` 包含images目录下的所有文件和子目录下的文件。

>多个globs可以用数组表示。
- `['xml/*.xml', 'json/*.json']`
