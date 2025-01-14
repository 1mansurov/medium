const url = location.search;
const blogs = new URLSearchParams(url).get('blog-id');
const blog = JSON.parse(atob(blogs));


const img = document.querySelector('.content__img');
const description = document.querySelector('.content-description');
const title = document.querySelector('.content-heading__title');
const tag = document.querySelector('.content-heading__tag');


img.src = blog.image;
description.textContent = blog.description;
title.textContent = blog.title;
tag.textContent = "#" + blog.tags;