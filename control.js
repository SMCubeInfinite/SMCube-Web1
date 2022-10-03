const categorySection = document.getElementsByClassName('navbar-items');
const allContentTxt = document.getElementsByClassName('not-category');
const Section2 = document.getElementsByClassName('section2');
const ArticleSection = document.getElementsByClassName('section');
const Section4 = document.getElementsByClassName('section-4')

categorySection[0].addEventListener('click', () => {
        for (let i = 0; i < ArticleSection.length; i++) {
                ArticleSection[i].style.display = "";
        }
        for (let i = 0; i < Section2.length; i++) {
                Section2[i].style.display = "";
        }
        for (let i = 0; i < Section4.length; i++) {
                Section4[i].style.display = "";
        }
        allContentTxt[0].innerText = "All Content";
});

categorySection[1].addEventListener('click', () => {
        for (let i = 0; i < ArticleSection.length; i++) {
                ArticleSection[i].style.display = "";
        }
        for (let i = 0; i < Section2.length; i++) {
                Section2[i].style.display = "none";
        }
        for (let i = 0; i < Section4.length; i++) {
                Section4[i].style.display = "none";
        }
        allContentTxt[0].innerText = "Shopping";
});

categorySection[2].addEventListener('click', () => {
        let Article = document.getElementById('article');
        for (let i = 0; i < ArticleSection.length; i++) {
                ArticleSection[i].style.display = "none";
                for (let i = 0; i < Section2.length; i++) {
                        Section2[i].style.display = "";
                }
                for (let i = 0; i < Section4.length; i++) {
                        Section4[i].style.display = "none";
                }
        }
        allContentTxt[0].innerText = "Grow";
});

categorySection[3].addEventListener('click', () => {
        let Article = document.getElementById('article');
        for (let i = 0; i < ArticleSection.length; i++) {
                ArticleSection[i].style.display = "none";
                for (let i = 0; i < Section2.length; i++) {
                        Section2[i].style.display = "none";
                }
                for (let i = 0; i < Section4.length; i++) {
                        Section4[i].style.display = "";
                }

        }
        allContentTxt[0].innerText = "Text Editor & Downloader";
});

let Section2All = document.getElementsByClassName('section2');

Section2All[0].addEventListener('click', () => {
        alert('Coming Soon')
});

let editor = document.getElementById('editor');
editor.addEventListener('click', () => {
        window.location = "/html/codeditordownloader.html";
});
