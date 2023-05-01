import path from 'node:path'
import assert from 'node:assert'
import { fileURLToPath } from 'node:url'
import puppeteer from 'puppeteer'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const pathToExtension = path.join(__dirname, 'extension')
test()

async function test() {
  // Given a page in Chrome extension with "Copy text" button.
  // When "Copy text" button is clicked.
  // Then the text is copied to clipboard.

  // Arrange
  const extensionUrl = 'chrome-extension://jogkhjncafkfjjiphpllkhdpedkkmfba/index.html'
  const browser = await puppeteer.launch({
    headless: false,
    args: [
      `--disable-extensions-except=${pathToExtension}`,
      `--load-extension=${pathToExtension}`,
    ],
  })
  const page = await browser.newPage()
  await page.goto(extensionUrl)
  await page.waitForSelector('#copy-button')
  const context = browser.defaultBrowserContext()
  await context.overridePermissions(page.url(), ['clipboard-read', 'clipboard-write'])

  // Act
  await page.click('#copy-button')

  // Assert
  const text = await page.evaluate(() => navigator.clipboard.readText())
  assert.strictEqual(text, 'Hello world!')
}
