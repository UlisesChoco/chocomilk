const on_click_scroll = (section_id) => {
    const section = document.getElementById(section_id);
    section.scrollIntoView({ behavior: 'smooth' });
}

const about_me_btn = document.getElementById('btn-about-me');
about_me_btn.addEventListener('click', on_click_scroll.bind(null, 'title-about-me'));

const projects_btn = document.getElementById('btn-projects');
projects_btn.addEventListener('click', on_click_scroll.bind(null, 'title-projects'));

const socials_btn = document.getElementById('btn-socials');
socials_btn.addEventListener('click', on_click_scroll.bind(null, 'title-socials'));