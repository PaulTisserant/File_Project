import '../Components_Style/Folder.css'
import anime from 'animejs/lib/anime.es.js';
import {useEffect, useState} from "react";

const Folder = () => {

    const [portfolioContent, setPortfolioContent] = useState({
        "count" : "3",
        "test1" : {
            "title" : "test.png",
            "date" : "2022.8.5",
            "weight" : "16.7 MB"
        },
        "test2" : {
            "title" : "test2.jpeg",
            "date" : "2022.8.5",
            "weight" : "216.5 MB"
        },
        "test3" : {
            "title" : "test3.jpeg",
            "date" : "2022.8.5",
            "weight" : "25.8 MB"
        }
    });

    function FolderContent() {
        let html = "";
        for (let i = 1; i < parseInt(portfolioContent.count) + 1; i++) {
            let name = "test"+i;
            html = html + `
             <li class="folder-item js_folder-item">
              <div class="folder-item__icon">
                <svg width="50" height="70" viewBox="0 0 50 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M33 0H5a5 5 0 00-5 5v60a5 5 0 005 5h40a5 5 0 005-5V17L33 0z" fill="#5085E8"/>
                  <path d="M50 29L35 16l15 .867V29z" fill="url(#paint0_linear)" opacity=".1"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M33 0l17 17H38a5 5 0 01-5-5V0z" fill="#A4BEF6"/>
                  <path fill="#fff" fill-Opacity=".75" d="M13 39h24v3H13zM13 57h17v3H13zM13 51h24v3H13zM13 45h24v3H13z"/>
                  <defs>
                    <linearGradient id="paint0_linear" x1="42.5" y1="16" x2="42.5" y2="29" gradientUnits="userSpaceOnUse">
                      <stop offset="1"/>
                      <stop offset="1" stop-opacity="0"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div class="folder-item__details">
                <div class="folder-item__details__name">
                  ${portfolioContent["test"+i].title}
                </div>
                <div class="folder-item__details__date">${portfolioContent["test"+i].date}</div>
              </div>
              <div class="folder-item__size">${portfolioContent["test"+i].weight}</div>
            </li>
      `
        }
        return {__html: html};
    }

    useEffect(() => {
        const toggleFolder = document.getElementsByClassName("folder-summary");

        console.log(toggleFolder)

        const showFolderContentAnimation = anime.timeline({
            easing: "easeOutCubic",
            autoplay: false
        });


        showFolderContentAnimation
            .add({
                targets: "#js_folder-content",
                height: [0, 80 * parseInt(portfolioContent.count)],

                duration: 400
            })
            .add(
                {
                    targets: "#js_folder-summary-amount",
                    opacity: [1, 0],
                    duration: 400
                },
                "-=350"
            )
            .add(
                {
                    targets: "#js_folder-collapse-button",
                    opacity: [0, 1],
                    duration: 400
                },
                "-=300"
            )
            .add(
                {
                    targets: "#js_folder-collapse-button-icon",
                    duration: 300,
                    translateX: ["-50%", "-50%"],
                    translateY: ["-50%", "-50%"],
                    rotate: ["0deg", "180deg"]
                },
                "-=400"
            )
            .add(
                {
                    targets: ".js_folder-item",
                    translateY: [20, 0],
                    opacity: [0, 1],
                    duration: 300,
                    delay: (el, i, l) => i * 120
                },
                "-=275"
            );

// --------- TRIGGER
        for (let i = 0; i < toggleFolder.length; i++) {
            toggleFolder[i].addEventListener("click", () => {
                if (showFolderContentAnimation.began) {
                    showFolderContentAnimation.reverse();
                    if (
                        showFolderContentAnimation.progress === 100 &&
                        showFolderContentAnimation.direction === "reverse"
                    ) {
                        showFolderContentAnimation.completed = false;
                    }
                }

                if (showFolderContentAnimation.paused) {
                    showFolderContentAnimation.play();
                }
            });
        }

    },[])




    return (
        <div className="folderContainer">
            <div className="folder" id="js_folder">
                <div className="folder-summary" id="js_toggle-folder">
                    <div className="folder-summary__start">
                        <button className="folder-collapse-button" id="js_folder-collapse-button">
                            <svg id="js_folder-collapse-button-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round" className="feather feather-chevron-up">
                                <polyline points="18 15 12 9 6 15"/>
                            </svg>
                        </button>
                        <div className="folder-summary__file-count" id="js_folder-summary-amount">
                            <span className="folder-summary__file-count__amount">3</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                                 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                 className="feather feather-folder">
                                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                            </svg>
                        </div>
                    </div>
                    <div className="folder-summary__details">
                        <div className="folder-summary__details__name">
                            Portfolio
                        </div>
                    </div>
                    <div className="folder-summary__end">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path
                                d="M6 12c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zm9 0c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zm9 0c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z"/>
                        </svg>
                    </div>
                </div>

                <ul className="folder-content" id="js_folder-content" dangerouslySetInnerHTML={FolderContent()}>

                </ul>

            </div>

        </div>
    );
};

export default Folder;
