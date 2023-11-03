let btn = document.querySelector('.btn')
let inputUser = document.querySelector('.input')
let list = document.querySelector('.list-container')
let img = document.querySelector('.sorting')
let bin = document.querySelector('.bin')
let clearClose = document.querySelector('.close')

let ben = true
let sortType = true
let sortHover = true


function addList() {
    let li = document.createElement("li");

    if (inputUser.value === '') {
        alert('you must write something!')
    }
    else {
        li.innerHTML = inputUser.value;
        list.appendChild(li);
        inputUser.value = '';
    }
    li.addEventListener('mouseover', () => {
        if (ben) {
            li.style.color = 'SpringGreen'
            li.style.transition = '0.5s'
        }
        else {
            li.style.color = 'Crimson'
            li.style.transition = '0.5s'
        }
    })
    li.addEventListener('mouseout', () => {
        if (!ben) {
            li.style.color = 'white'
            li.style.transition = '0.5s'
        }
        else {
            li.style.color = 'white'
            li.style.transition = '0.5s'
        }
    })
    li.addEventListener("click", remove)

}


img.addEventListener('mouseover', () => {
    if (sortType) {
        img.src = 'images/acdown.svg'
        img.style.transition = '0.5s'

    }
    else {
        img.src = 'images/acup.svg'
        img.style.transition = '0.5s'

    }
})
img.addEventListener('mouseout', () => {
    if (sortType) {
        img.src = 'images/pasdown.svg'
        img.style.transition = '0.5s'

    }
    else {
        img.src = 'images/pasup.svg'
        img.style.transition = '0.5s'

    }
})

function sortList() {
    if (sortHover) {
        if (!sortType) {
            img.src = '/images/acdown.svg'
        }
        else {
            img.src = '/images/acup.svg'
        }
    }
    else {
        if (sortType) {
            img.src = '/images/pasdown.svg'
        }
        else {
            img.src = '/images/pasup.svg'
        }
    }

    let items = list.childNodes;
    let itemsArr = [];
    for (let i in items) {
        if (items[i].nodeType == 1) {
            itemsArr.push(items[i]);
        }
    }

    if (sortType) {
        itemsArr.sort(function (a, b) {
            return a.innerHTML == b.innerHTML ? 0 : (a.innerHTML > b.innerHTML ? 1 : -1);
        });
    }
    else {
        itemsArr.sort(function (a, b) {
            return a.innerHTML == b.innerHTML ? 0 : (a.innerHTML < b.innerHTML ? 1 : -1);
        });
    }

    for (i = 0; i < itemsArr.length; ++i) {
        list.appendChild(itemsArr[i]);
    }
    sortType = !sortType
}

function remove(e) {
    if (ben) {
        e.target.classList.toggle("green")

    }
    else {
        e.target.remove();
    }

}

bin.addEventListener('mouseover', () => {
    if (ben) {
        bin.src = '/images/bin acc.png'


    }
    else {
        bin.src = '/images/bin.png'

    }
})
bin.addEventListener('mouseout', () => {
    if (ben) {
        bin.src = '/images/bin.png'


    }
    else {
        bin.src = 'images/bin acc.png'
    }
})

bin.addEventListener("click", () => {
    if (ben) {
        bin.src = '/images/bin acc.png'
    }
    else {
        bin.src = 'images/bin.png'
    }
    ben = !ben
});

clearClose.addEventListener('mouseover', () => {
    clearClose.src = '/images/acclose.png'
})

clearClose.addEventListener('mouseout', () => {
    clearClose.src = '/images/pasclose.png'
})

clearClose.addEventListener('click', () => {
    inputUser.value = '';
})

img.addEventListener("click", sortList)
btn.addEventListener("click", addList);