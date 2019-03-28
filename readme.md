# long string of webview dialog will be cut

This is a example to show this issue.

0.24.4-sdk does not have this proble.

0.37.1-sdk has this proble.

## about this example

I create a nw app.

The nw app's main page has a webview.

The webview load a local index.html file in folder `./static/html/`

and a local index.js file in `./static/js/`.

The webview will prompt a long strig and the main page

will catch this dialog event.

I found the long string will be cut in some vesions of sdk.

## 0.24.4-sdk

### run the example:

1. install nw and use 0.24.4-sdk

```
npm install -g nwjs

nw install 0.24.4-sdk

nw use 0.24.4-sdk
```

2. clone this project

```
git clone https://github.com/caijw/nwjsApp.git
```

3. run the static files server

```
cd nwjsApp

node ./server.js
```

4. run nw app

```
cd nwjsApp

nw .
```

### assert result:

The assert result goes well.

Dialog messageText is unbroken.

```javascript
		webview.addEventListener('dialog', function (event) {

			var messageText = event.messageText;
			assert.strictEqual(messageText, getLongText());
			
		});
```

## 0.37.1-sdk

### run the example:

1. install nw and use 0.37.1-sdk

```
npm install -g nwjs

nw install 0.37.1-sdk

nw use 0.37.1-sdk
```

2. clone this project

```
git clone https://github.com/caijw/nwjsApp.git
```

3. run the static files server

```
cd nwjsApp

node ./server.js
```

4. run nw app

```
cd nwjsApp

nw .
```

### assert result:

The asserttion throws a error.

Dialog messageText is cut.

```javascript
		webview.addEventListener('dialog', function (event) {

			var messageText = event.messageText;
			assert.strictEqual(messageText, getLongText());
			
		});
```

## other version sdks

0.34.5-sdk also has this problem.

Other version sdks may have this proble.