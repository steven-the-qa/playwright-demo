// @ts-check
import { test, expect } from '@playwright/test';

test('SBHS homepage has Daily Announcements link', async ({ page }) => {
  await page.goto('https://www.sturbay.k12.wi.us/schools/high/');
  const dailyAnnouncementsLink = page.getByRole('link', { name: 'SBHS Daily Announcements' });

  await expect(dailyAnnouncementsLink).toBeVisible();
});

test('Daily Announcements page has a date input', async ({ page, context }) => {
  // SETUP
  await page.goto('https://www.sturbay.k12.wi.us/schools/high/');
  const dailyAnnouncementsLink = page.getByRole('link', { name: 'SBHS Daily Announcements' });
  // await page.pause();

  // OPEN DAILY ANNOUNCEMENTS IN A NEW TAB
  // Start waiting for new tab before clicking.
  const pagePromise = context.waitForEvent('page');
  await dailyAnnouncementsLink.click();
  // Catch the new tab when it opens
  const newPage = await pagePromise;
  // Check the new tab's URL
  const dailyAnnouncementsURL = 'https://sturbay.powerschool.com/bulletin/10'
  await expect(newPage).toHaveURL(dailyAnnouncementsURL);
  // await newPage.pause();

  const dateInput = newPage.getByRole('heading', { name: 'Sturgeon Bay High School' }).getByPlaceholder('MM/DD/YYYY');
  await expect(dateInput).toBeVisible();
  await expect(dateInput).toBeEditable();
});

test('May 6 announcements include a birthday', async ({ page, context }) => {
  // GO TO THE HOMEPAGE
  await page.goto('https://www.sturbay.k12.wi.us/schools/high/');
  const dailyAnnouncementsLink = page.getByRole('link', { name: 'SBHS Daily Announcements' });
  // await page.pause();

  // OPEN DAILY ANNOUNCEMENTS IN A NEW TAB
  // Start waiting for new tab before clicking.
  const pagePromise = context.waitForEvent('page');
  await dailyAnnouncementsLink.click();
  // Catch the new tab when it opens
  const newPage = await pagePromise;
  // New Tab -- Daily Announcements Page
  const dailyAnnouncementsURL = 'https://sturbay.powerschool.com/bulletin/10'
  await expect(newPage).toHaveURL(dailyAnnouncementsURL);
  // await newPage.pause();

  const dateInput = newPage.getByRole('heading', { name: 'Sturgeon Bay High School' }).getByPlaceholder('MM/DD/YYYY');
  await dateInput.clear();
  await dateInput.fill('05/06/2026');
  await newPage.keyboard.press('Tab');
  await newPage.keyboard.press('Enter');
  // await newPage.pause();
  const birthdayWishes = newPage.getByText('Birthday wishes go out to');
  await expect(birthdayWishes).toBeVisible();
});