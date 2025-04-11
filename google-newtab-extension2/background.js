browser.tabs.onCreated.addListener(async (tab) => {
  if (tab.url === "about:newtab") {
    await browser.tabs.update(tab.id, { url: "https://www.google.com/" });
  }
});
