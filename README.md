# yawtujstradcbzfooafs

Yet Another Website That Uses JavaScript To Read And Display CBZ Files Off Of A File System

(This is actually a JavaScript library)

# Usage

Include all JS files found in this repo. All of it. `zip.min.js` is required too. Have both it and `cbz.js` in some kind of `<script>` tag.

## A working example

Look at `index.html`.

## Interface

yawtujstradcbzfooafs expects the following:

- A file dialog. Just use this and don't think about it.

```html
<input type="file" id="cbz-file-dialog" accept="application/vnd.comicbook+zip" />
```

- A load button. Basically, just call `cbz.start()` eventually. You can make it a separate button like this.

```html
<button onclick="cbz.start()">Start CBZ viewer</button>`
```

- An image element to use. When changing the size, only ever change EITHER the width or height, never both. Some pages in comics are "dual-page" and can look horrible if you do that.

```html
<img id="cbz-image" height="1000">
```

- Previous and next page buttons. These also call CBZ functions.

```html
<button id="cbz-prev-btn" onclick="cbz.previousPage()" disabled>prev</button>
<button id="cbz-next-btn" onclick="cbz.nextPage()">next</button>
```

- Progress bar and text indicators.

```html
<progress id="cbz-progress" value="0" max="0"></progress>
<p>page <span id="cbz-current-page">0</span> / <span id="cbz-page-count">0</span></p>
```