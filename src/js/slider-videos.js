const videos = [
  {
    id: "PyMlV5_HRWk",
  },
  {
    id: "Fmdb-KmlzD8",
  },
  {
    id: "rFh2i4AlPD4",
  },
  {
    id: "3EBSh_zkPHo",
  },
];

const sliderContainer = document.querySelector("#slider");
const currentContainer = document.querySelector("#current");
const videosContainer = document.querySelector("#videos-container");
const bNext = document.querySelector(".next");
const bPrev = document.querySelector(".prev");

let current = 0;

bNext.addEventListener("click", (e) => {
  current = current + 1 < videos.length ? current + 1 : 0;
  renderCurrentVideo(videos[current].id);
});

bPrev.addEventListener("click", (e) => {
  current = current - 1 >= 0 ? current - 1 : videos.length - 1;
  renderCurrentVideo(videos[current].id);
});

renderCurrentVideo(videos[current].id);
renderVideos();

function renderCurrentVideo(id) {
  currentContainer.innerHTML = `<iframe src="https://www.youtube.com/embed/${id}" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
}

function renderVideos() {
  const html = videos.map((video, i) => {
    return `<div class = "item">
                    <a href='#' data-id="${i}">
                        <img src="https://i3.ytimg.com/vi/${video.id}/maxresdefault.jpg" width = "100%">
                    </a>
                </div>`;
  });

  videosContainer.innerHTML = html.join("");

  document.querySelectorAll(".item a").forEach((item) => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        const id = +item.getAttribute('data-id');
        current = id;
        renderCurrentVideo(videos[current].id);
    });
  });
}
