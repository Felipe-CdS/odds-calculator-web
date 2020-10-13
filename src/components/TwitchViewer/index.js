import { calcsContainer } from '../CalcsContainer/index';

export function twitchViewer() {

  let divEl = document.createElement("div");
  divEl.id = "twitch-viewer";

  let iFrameElement = document.createElement("iframe");
  iFrameElement.setAttribute("src", "https://www.youtube.com/embed/ZlKoeJ3xlx4");

  let calcsElement = calcsContainer();

  divEl.appendChild(iFrameElement);
  divEl.appendChild(calcsElement);
  return divEl;

}