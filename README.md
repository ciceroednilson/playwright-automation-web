# Playwright

Playwright Test was created specifically to accommodate the needs of end-to-end testing. Playwright supports all modern rendering engines including Chromium, WebKit, and Firefox. Test on Windows, Linux, and macOS, locally or on CI, headless or headed with native mobile emulation of Google Chrome for Android and Mobile Safari.

![img.png](image/logo.png)

[playwright](https://playwright.dev/)

## ⚙️ Introduction.

This lab has the objective of testing Playwright end-to-end.

## 🛠 Stack.

<ol>
  <li>Cursor</li>
  <li>Playwright</li>
  <li>Html</li>
  <li>Javascript</li>
  <li>Node</li>
  <li>Npm</li>
</ol>

## ⚙️ Install Playwright.

https://playwright.dev/docs/intro#installing-playwright

```shell
npm init playwright@latest
```

## ⚙️ Running the Example Test

https://playwright.dev/docs/intro#running-the-example-test

```shell
npx playwright test
```

![run_test.png](image/run_test.png)

## ⚙️  HTML Test Reports

```shell
npx playwright show-report
```
https://playwright.dev/docs/intro#html-test-reports

link to access: http://localhost:9323/

![report.png](image/report.png)


## ⚙️ Running the Example Test in UI Mode

```shell
npx playwright test --ui
```

![test_ui.png](image/test_ui.png)

## ⚙️ Generating tests with Codegen

https://playwright.dev/docs/codegen-intro

> [!TIP]
> Using the sample server http of the python.
>```shell
>python3 -m http.server 8000
>```

```shell
npx playwright codegen http://127.0.0.1:8000/index.html
```
It will open two windows, a browser window where you interact with the website you wish to test and the Playwright Inspector window where you can record your tests

![test_login.png](image/test_login.png)

After this, copy the code and paste it into the new file.

![img.png](image/after_codegen.png)

## ⚙️ Generate complete tests with Codegen

```shell
npx playwright codegen http://127.0.0.1:8000/index.html
```
![full_tests.png](image/full_tests.png)

After this, copy the code and paste it into the new file.

![complete_code.png](image/complete_code.png)

Execute the command below to see UI with tests.
```shell
npx playwright test --ui
```
![after_complete_test.png](image/after_complete_test.png)


## ⚙️ Front-End.

Login:

![login.png](image/login.png)

Register:

![register.png](image/register.png)

Search:

![search.png](image/search.png)

## 📌 Version.

1.0

## ✒️ Author.

Cícero Ednilson - ciceroednilson@gmail.com

