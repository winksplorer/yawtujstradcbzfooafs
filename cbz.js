window.cbz = window.cbz || {}

cbz.entries = null;
cbz.currentPage = 0;

// misc functions
cbz.showPage = async () => {
    // get data and element
    const blob = await cbz.entries[cbz.currentPage].getData(new zip.BlobWriter());
    const imgEl = document.getElementById('cbz-image');

    // set image to entry
    imgEl.src = URL.createObjectURL(blob);
    imgEl.alt = cbz.entries[cbz.currentPage].filename;
    imgEl.title = cbz.entries[cbz.currentPage].filename;

    // update progress
    document.getElementById('cbz-progress').value = document.getElementById('cbz-current-page').textContent = cbz.currentPage;
};

// button functions
cbz.previousPage = () => {
    cbz.currentPage--;
    if (!cbz.currentPage) document.getElementById('cbz-prev-btn').disabled = true;
    if (cbz.currentPage < cbz.entries.length) document.getElementById('cbz-next-btn').disabled = false;

    cbz.showPage()
};

cbz.nextPage = () => {
    cbz.currentPage++;
    if (cbz.currentPage >= cbz.entries.length-1) document.getElementById('cbz-next-btn').disabled = true;
    if (cbz.currentPage) document.getElementById('cbz-prev-btn').disabled = false;

    cbz.showPage()
};

cbz.start = async () => {
    // extract file
    const reader = new zip.ZipReader(new zip.BlobReader(document.getElementById('cbz-file-dialog').files[0]));

    // get entries and sort them
    cbz.entries = await reader.getEntries();
    cbz.entries.sort((a, b) => a.filename.localeCompare(b.filename));

    // set page count, and display first entry
    document.getElementById('cbz-progress').max = document.getElementById('cbz-page-count').textContent = cbz.entries.length-1;
    cbz.showPage();
};