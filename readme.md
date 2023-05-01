## Motivation

The 'clipboard-copy' and 'clipboard-paste' permissions are not working on Chrome Extension pages.
However, the programmatic manipulation of the clipboard works fine after manual granting of the
permissions in the browser settings.
This is an example that reproduces the issue
for [Puppeteer](https://github.com/puppeteer/puppeteer/issues) project.

## How to run

1. Clone this repository
2. Install dependencies

```shell
npm install
```

3. Run test

```shell
npm test
```

The expected result should be "Hello world!" copied to the clipboard, but the actual result is the
last copied text.

## How to test the extension manually
1. Open `chrome://extensions/` in the browser
2. Enable developer mode
3. Click "Load unpacked" and select the `extension` folder
4. Open `chrome-extension://jogkhjncafkfjjiphpllkhdpedkkmfba/index.html` in the browser
