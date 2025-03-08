let currentCategory = 'allGame';

function filterGame(category) {
    currentCategory = category;
    searchGame();


    const buttons = document.querySelectorAll('.category-btn');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    const activeButton = Array.from(buttons).find(button => button.textContent.toLowerCase() === category);
    if (activeButton) {
        activeButton.classList.add('active');
    }
}


function searchGame() {
    const searchTerm = document.getElementById('search-bar').value.toLowerCase();
    const items = document.querySelectorAll('.item');

    items.forEach(item => {
        const itemName = item.textContent.toLowerCase();
        const matchesCategory = currentCategory === 'allGame' || item.classList.contains(currentCategory);
        const matchesSearch = itemName.includes(searchTerm);

        if (matchesCategory && matchesSearch) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

const imgEl = document.getElementById('img');
const btnEl = document.getElementById('buttonCopy');

btnEl.addEventListener('click', () => {
    copyToClipboard(imgEl.src);
});

async function copyToClipboard(src) {
    const data = await fetch(src);
    const blob = await data.blob();

    try {
        await navigator.clipboard.write([
            new ClipboardItem({
                [blob.type]: blob,
            })
        ])
        console.log("oke");
    } catch (e) {
        console.log(e);
    }
}
