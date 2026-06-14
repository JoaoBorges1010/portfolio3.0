import { test, expect } from "@playwright/test";

test.describe("Portfolio smoke tests", () => {
  test("home page loads", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { name: /Hi ! I'm/i })).toBeVisible();
  });

  test("navigates to all main routes", async ({ page }) => {
    await page.goto("/");
    const nav = page.locator("nav");

    await page.getByLabel("Open menu").click();
    await nav.getByRole("link", { name: "about" }).click();
    await expect(page.getByRole("heading", { name: /About me/i })).toBeVisible();

    await page.getByLabel("Open menu").click();
    await nav.getByRole("link", { name: "portfolio" }).click();
    await expect(page.getByRole("heading", { name: /My projects/i })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Spotify Clone" })).toBeVisible();
    await page.getByRole("button", { name: "Details" }).first().click();
    await expect(page.getByRole("heading", { level: 1, name: "Spotify Clone" })).toBeVisible();

    await page.getByLabel("Open menu").click();
    await nav.getByRole("link", { name: "contact" }).click();
    await expect(page.getByRole("heading", { name: /Get in touch/i })).toBeVisible();
  });

  test("contact form shows validation error", async ({ page }) => {
    await page.goto("/contact");
    await page.getByRole("button", { name: "Send Message" }).click();
    await expect(page.getByRole("alert")).toBeVisible();
  });
});
