import { test, devices, expect } from '@playwright/test';

test.use({
    browserName: 'chromium',
    ...devices['iPad Air'],
    viewport: { width: 820, height: 1180 },
})

test.describe('Testing for fishes page on tablet', () => {
    test("Testing for filter container height on tablet", async ({ page }) => {
        await page.goto('http://localhost:3000/fishes/');

        const filterCont = page.locator('#filterCont');

        const checkingHeight = await filterCont.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue('height');
        });

        console.log(checkingHeight);
        expect(checkingHeight).toBe('689px');
    })
})