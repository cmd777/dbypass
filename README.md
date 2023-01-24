# DBypass
Remove deviantart's annoying mature content warning without creating an account

## ❔ Why? How does it work?
Simple. Deviantart has an annoying "Sensitive content" filter, that if you don't create an account, you will not be able to see said image.

I didn't like that, so I decided to create a little script that will do the following:

- Check if jQuery is initialized (and if not, initialize it.)
- Select *all* HTML tags, and check if they have a [blur](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/blur) effect on them
- If they do, remove the parent element's parent's last child (the mature warning content itself)
- Then, remove the filtering element itself, and replace it's parent with the image from the deviantart oembed api

## ℹ️ How to use
Again, it's really simple to use.

- Go to any image that is considered to be "Sensitive content"
- Choose either `deviant.js` or `deviant-min.js`
- Copy the script to the clipboard
- Press F12 (open the developer console)
- Paste the script, then press enter. (on Firefox, you may need to type `allow pasting` before)

**What is the difference between `deviant.js` and `deviant-min.js`?**

`deviant-min.js` is 575 bytes because it's minimized, but is really difficult to read, while `deviant.js` is 941 bytes, but is way more readable.
## ‼️ Important Notice

### While this script is entirely open source, and you can modify it if you wish to, you should always inspect scripts before pasting them into the developer console, as they may be malicious.
