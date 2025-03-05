
// DECLARE NAV BAR
let navBar = document.getElementsByClassName('mainNav');
let pageBody = document.getElementById('pageBodyCont');
let searchButton = document.getElementById('searchButton');
let searchBarCont = document.getElementById('searchBarCont');
let searchBar = document.getElementById('searchBar');

console.log(searchButton);
console.log(navBar);
console.log(searchBarCont);
console.log(pageBody);

// SEARCHBAR FUNCTIONS
for(let i = 0; i<navBar.length; i++){
    navBar[i].onclick = function(){
        console.log('ive been clicked');
    }
    searchButton.onclick = function(){
        if(searchBarCont.style.display!=="flex"){
        searchBarCont.style.display="flex";
        searchBar.focus();
        navBar[i].style.backdropFilter="blur(2.5em)";
        /*pageBody.style.filter="grayscale(90%)";*/
        }
        else {
            searchBarCont.style.display="none";
            navBar[i].style.backdropFilter="none"
            /*pageBody.style.filter="none)";*/
        }
    }
    searchBarCont.onmouseout = function(){
        console.log('this is working');
        searchBarCont.style.display="none";
        navBar[i].style.backdropFilter="none";
     }
}
// RESET NAVBAR FUNCTION
function resetNavBar(){
    Array.from(navBar).forEach((nav) => {
        nav.style.color = '#808782';
        nav.querySelectorAll('*').forEach((descendant) => {
            descendant.style.color = '#808782';
        });
    });
}

// INDEX CONTROLS AND ANIMATIONS 
let index = document.getElementById('indexLanding');
let splash = document.getElementById('splashText');
let statement = document.getElementById('practiceStatement');

const indexObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            console.log('index is here');
            index.style.backgroundImage = 'url(assests/images/index/tvGlitch.gif)';
            setTimeout(() => {
                splash.classList.add('fadeIn');
            },1000);
            setTimeout(()=>{
                index.style.backgroundImage = 'none';
            },5000);
            /*setTimeout(()=>{
                splash.classList.add('fadeIn');
            }, 4000);*/
            setTimeout(()=>{
                    setTimeout(()=>{
                        statement.style.display='flex';
                        statement.style.width = '0%';
                    },500)
                    setTimeout(()=>{
                        statement.style.width = '40%';
                        statement.classList.add('fadeIn');
                    },600)

            }, 6000);
        } else {
            splash.classList.remove('fadeIn');
            statement.classList.remove('fadeIn');
            splash.classList.add('fadeOut');
            statement.classList.add('fadeOut');
            setTimeout(()=>{
                index.innerHTML = '<h1 style="align-self: center; font-size: 3em;">hire me. please.</h1>';
            }, 2000);
        }
    })
},{
    threshold: 1,
    rootMargin: '0px 0px 1px 0px'
});

indexObserver.observe(index);







//GRAPHIC CONTROLS AND ANIMATIONS
// DECLARE SECTIONS AND CONTENTS
    let graphic = document.getElementById('graphic');
    let graphicIntersecting = false;
    let sectionTitlesCont = document.getElementsByClassName("sectionTitles"); 
    const firstCont = Array.from(sectionTitlesCont)[0];
    const secondCont = Array.from(sectionTitlesCont)[1];

    let sectionHeader = document.getElementsByClassName('sectionTitle');
    let firstHeader = Array.from(sectionHeader)[0];

    let projectTitlesCont = document.getElementsByClassName('projectTitlesCont');
    let firstProjectCont = Array.from(projectTitlesCont)[0];

    let projectTitle = document.getElementsByClassName('projectTitle');
    console.log(sectionHeader, sectionTitlesCont, projectTitle);

    //DECLARE SECTION TITLES
    let instrument = document.getElementById('instrument');
    let instruCarosel = document.getElementById('instruCarosel'); 

    let silence = document.getElementById('silence');
    let silenceCarosel = document.getElementById('silenceCarosel');

    let industry = document.getElementById('industry');
    let industryCarosel = document.getElementById('industryCarosel');

    let postcards = document.getElementById('postcards');
    let postcardsCarosel = document.getElementById('postcardsCarosel');

    let sentiment = document.getElementById('sentiment');
    let sentimentCarosel = document.getElementById('sentimentCarosel');


// DECLARE SECTION FUNCTIONS
    //PROJECT FUNCTIONS
        function instrumentControlla(){
            graphic.style.backgroundImage = 'url(assests/images/instru/titlePage.png)';
            graphic.style.backgroundPosition = 'center';
            graphic.style.backgroundSize = 'cover';
            graphic.style.backgroundRepeat = 'no-repeat';
            graphic.style.color = 'white';
            Array.from(sectionTitlesCont).forEach((cont)=>{
                cont.style.backdropFilter = 'blur(1px)';
            });
            Array.from(navBar).forEach((nav) => {
                nav.style.color = '#808782';
                nav.querySelectorAll('*').forEach((descendant) => {
                    descendant.style.color = '#808782';
                });
            }); //

            /*//controls for carousel display
            silenceCarosel.style.display='none';
            industryCarosel.style.display='none'; 
            postcardsCarosel.style.display='none'; 
            sentimentCarosel.style.display='none';
            // Then show and fade in the instruCarosel
            instruCarosel.style.display = 'flex';
            setTimeout(() => {
                instruCarosel.classList.add('fadeIn');
            }, 10);*/
        };

        function silenceControlla(){
            graphic.style.backgroundImage = 'url(assests/images/slience/background.png)';
            graphic.style.backgroundPosition = 'center';
            graphic.style.backgroundSize = 'cover';
            graphic.style.backgroundRepeat = 'no-repeat';

            /*//controls for carousel display
            instruCarosel.style.display='none';
            industryCarosel.style.display='none';
            postcardsCarosel.style.display='none'; 
            sentimentCarosel.style.display='none';
            // Then show and fade in the silenceCarosel
            silenceCarosel.style.display='flex';
            setTimeout(() => {
                silenceCarosel.classList.add('fadeIn');
            }, 10);*/
        };

        function industryControlla(){
            graphic.style.backgroundImage = 'url(assests/images/industry/background.png)';
            graphic.style.backgroundPosition = 'center';
            graphic.style.backgroundSize = 'cover';
            graphic.style.backgroundRepeat = 'no-repeat';
            Array.from(navBar).forEach((nav) => {
                nav.style.color = 'aliceblue';
                nav.querySelectorAll('*').forEach((descendant) => {
                    descendant.style.color = 'aliceblue';
                });
            }); //

            /*//controls for carousel display
            instruCarosel.style.display='none';
            postcardsCarosel.style.display='none'; 
            sentimentCarosel.style.display='none';
            silenceCarosel.style.display='none';
            // Then show and fade in the silenceCarosel
            industryCarosel.style.display='flex';
            setTimeout(() => {
                industryCarosel.classList.add('fadeIn');
            }, 10);*/
            
        }

        function postcardsControlla(){
            graphic.style.backgroundImage = 'url(assests/images/postcards/backgrpund.png)';
            graphic.style.backgroundPosition = 'center';
            graphic.style.backgroundSize = 'cover';
            graphic.style.backgroundRepeat = 'no-repeat';
            Array.from(sectionTitlesCont).forEach((cont)=>{
                cont.style.backdropFilter = 'blur(0px)';
            });

            /*//controls for carousel display
            instruCarosel.style.display='none';
            industryCarosel.style.display='none'; 
            sentimentCarosel.style.display='none';
            silenceCarosel.style.display='none';
            // Then show and fade in the silenceCarosel
            postcardsCarosel.style.display='flex';
            setTimeout(() => {
                postcardsCarosel.classList.add('fadeIn');
            }, 10);*/
        }

        function sentimentControlla(){
            graphic.style.backgroundImage = 'url(assests/images/sentiment/background.png)';
            graphic.style.backgroundPosition = 'center';
            graphic.style.backgroundSize = 'cover';
            graphic.style.backgroundRepeat = 'no-repeat';

            /*//controls for carousel display
            instruCarosel.style.display='none';
            industryCarosel.style.display='none'; 
            postcardsCarosel.style.display='none';
            silenceCarosel.style.display='none';
            // Then show and fade in the silenceCarosel
            sentimentCarosel.style.display='flex';
            setTimeout(() => {
                sentimentCarosel.classList.add('fadeIn');
            }, 10);*/
        };

        /*function smoothFade(){
            graphic.style.backgroundImage = 'none';
            graphic.style.backdropFilter = 'blur(1em)';
            console.log('applied blur');
            setTimeout(function(){
                console.log('removing blur');
                graphic.style.backdropFilter = 'none';
            }, 2000);
        };*/

    //CHECK UNDERLINE FUNCTION
    function checkUnderlineGraphic(){
        Array.from(projectTitle).forEach((title) => {
        if (title.classList.contains('underlined')) {

            //hide carosel 
            [instruCarosel, silenceCarosel, industryCarosel, postcardsCarosel, sentimentCarosel].forEach((carosel) => {
                carosel.style.display = 'none';
                carosel.classList.remove('fadeIn');
                carosel.style.opacity = '0';
            });
            let targetCarosel;

            switch(title.id){
                case 'instrument':
                    console.log("instrument is underlined");
                    instrumentControlla();
                    targetCarosel = instruCarosel;
                    break;
                case 'silence':
                    console.log("silence is underlined");
                    silenceControlla();
                    targetCarosel = silenceCarosel;
                    break;
                case 'industry':
                    console.log("industry is underlined");
                    industryControlla();
                    targetCarosel = industryCarosel;
                    break;
                case 'postcards':
                    console.log("postcards is underlined");
                    postcardsControlla();
                    targetCarosel = postcardsCarosel; 
                    break;
                case 'sentiment':
                    console.log('sentiment is underlined');
                    sentimentControlla();
                    targetCarosel = sentimentCarosel;
                    break;
                };

                if (targetCarosel) {
                    setTimeout(() => {
                        targetCarosel.style.display = 'flex';
                        setTimeout(() => {
                            targetCarosel.classList.add('fadeIn');
                        }, 50);
                    }, 100);
                } else {
                    // Reset styles for non-underlined titles
                    switch(title.id){
                        case 'instrument':
                            instruCarosel.style.display = 'none';
                            instruCarosel.classList.remove('fadeIn');
                            instruCarosel.style.opacity = '0';
                            break;
                        case 'silence':
                            silenceCarosel.style.display = 'none';
                            silenceCarosel.classList.remove('fadeIn');
                            silenceCarosel.style.opacity = '0';
                            break;
                        case 'industry':
                            industryCarosel.style.display = 'none';
                            industryCarosel.classList.remove('fadeIn');
                            industryCarosel.style.opacity = '0';
                            break;
                        case 'postcards':
                            postcardsCarosel.style.display = 'none';
                            postcardsCarosel.classList.remove('fadeIn');
                            postcardsCarosel.style.opacity = '0';
                            break;
                        case 'sentiment':
                            sentimentCarosel.style.display = 'none';
                            sentimentCarosel.classList.remove('fadeIn');
                            sentimentCarosel.style.opacity = '0';
                            break;
                    }
                }
            }
        });
    }

    function addUnderlineGraphic(){
        Array.from(projectTitle).forEach((title)=>{
            title.addEventListener('mouseover', () => {
                title.classList.add("underlined");
                checkUnderlineGraphic();
            });
            title.addEventListener('mouseout', () => {
                title.classList.remove("underlined");
            });
        });
    }

    //UNDERLINE AND REVOLVE PROJECT FUNCTION
            let shouldContinueAnimation = false;

            function underlineRevolve(){
                if(!graphicIntersecting || !shouldContinueAnimation) {
                    console.log('the animation should not continue.')
                    stopUnderlineAnimation()
                    return};
        
                Array.from(projectTitle).forEach((title) => {
                    title.classList.remove('underlined');
                });
                Array.from(projectTitle).forEach((title, index) => {
                    setTimeout(()=> {
                        title.classList.add('underlined');
                        title.classList.add('mated');
                        checkUnderlineGraphic();
                        if (title.classList.contains('mated')){
                            setTimeout(()=> {
                                title.classList.remove('underlined');
                                title.classList.remove('mated');
                            }, 4750);
                        }
                        }, index * 5000);
                    });
                }

            
// DECLARE OBSERVERS and SCROLL ANIMATIONS
    

//SCROLL ANIMATION FOR SECTION TITLES
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry =>{
                if(entry.target.id === 'graphic'){
                    console.log('graphic is intersecting');
                    console.log(`Element ${entry.target.className || 'unknown'} - isIntersecting: ${entry.isIntersecting}, ratio: ${entry.intersectionRatio}`);
                    if(entry.isIntersecting){
                        graphicIntersecting = true;
                        shouldContinueAnimation = true; 
                        console.log(graphicIntersecting);
                        console.log('graphic is intersecting');
                        // FADE IN SECTION TITLES CONTAINER
                        console.log('container is on screen and about to change state');
                        firstCont.style.opacity = '1';
                        

                        //FADE IN SECTION TITLE
                            console.log('fast scroll animation is enabled');
                            firstHeader.classList.add('scrollInFast');
                            firstHeader.style.opacity = '1';

                        // ANIMATE PROJECT TITLES
                        setTimeout(() => {
                            // FADE IN PROJECT TITLES CONTAINER
                                console.log('project is on screen and about to change state');
                                firstProjectCont.classList.add('fadeIn');
                            
                            // FADE SLIDE IN PROJECT TITLES INDIVIDUALLY
                            Array.from(projectTitle).forEach((title, index) => {
                                console.log('project title is on screen and about to change state');
                                title.classList.remove('fadeSlideIn');
                                setTimeout(() => {
                                title.classList.add('fadeSlideIn');
                            }, index * 200 + 300);
                        });
                        }, 350);

                    //INITIATE REVOLVE ANIMATION
                   
                    if(graphicIntersecting && shouldContinueAnimation) {
                        //startUnderlineAnimation();  
                        underlineRevolve();
                    };
                    
                    addUnderlineGraphic();
                }
                else{
                    graphicIntersecting = false;
                    shouldContinueAnimation = false;
                    console.log('state of grahic and contine:', graphicIntersecting, shouldContinueAnimation);
                    console.log('graphic is no longer intersecting');


                    Array.from(projectTitle).forEach(title => {
                        title.classList.remove('underlined');
                        title.classList.remove('mated');
                    });

                    graphic.style.backgroundImage ='none';
                    graphic.style.backdropFilter = 'none';
                    //REMOVE ANIMATIONS WHEN ELEMENTS ARE OFF-SCREEN
                        firstHeader.classList.remove('scrollInFast');
                        firstHeader.style.opacity = '0';
                    
                        console.log('project titles are off screen and animation has been removed');
                        firstProjectCont.classList.remove('fadeIn');
                        firstCont.style.opacity = '0';

                        Array.from(projectTitle).forEach(title => {
                            title.classList.remove('underlined', 'mated')
                        });

                    //RESET NAV BAR STYLE
                    resetNavBar();
                }
            }
            });
        }, {
            threshold: 0.4,
            rootMargin: '-10% 0%'
        });

     observer.observe(graphic);
// END OF GRAPHIC CONTROLS AND ANIMATIONS

//PHYSICAL CONTROLS AND ANIMATIONS
    let physical = document.getElementById('physical');
    let physicalSection = document.getElementById('physicalSection');
    let physicalTitle = document.getElementById('physicalTitle');
    let physicalProjectTitles = document.getElementById('physicalProjectTitles');
    let physicalProjectTitle = document.getElementsByClassName('physicalProjectTitle');

    //DECLARE PROJECT TITLES
    const printingPiano = document.getElementById('printingPiano');
    const pianoContent = document.getElementById('pianoContent');

    const handDrum = document.getElementById('handDrum');
    const handDrumContent = document.getElementById('handDrumContent');

    //const tableDrum = document.getElementById('tableDrum');

    const synthSub = document.getElementById('synthSub');
    const synthContent = document.getElementById('synthContent');

    const sampSilence = document.getElementById('sampSilence');
    const sampleContent = document.getElementById('sampleContent');


    //FUNCTIONS FOR ANIMATIONS
        function pianoControlla(){
            physical.style.backgroundImage = 'url(assests/images/PRINTpiano/PIANOPLANS.png)';
            physical.style.backgroundPosition = 'center';
            physical.style.backgroundSize = 'cover';
            physical.style.backgroundRepeat = 'no-repeat';
        }

        function handDrumControlla(){
            physical.style.backgroundImage = 'url(assests/images/HNDdrm/webPortBackgroundCOLOR.png)';
            physical.style.backgroundPosition = 'center';
            physical.style.backgroundSize = 'cover';
            physical.style.backgroundRepeat = 'no-repeat';
        }

        /*function tableControlla(){
            physical.style.backgroundImage = 'url()';
        }*/

        function synthControlla(){
            physical.style.backgroundImage = 'url(assests/images/synthSUB/background.jpg)';
            physical.style.backgroundPosition = 'center';
            physical.style.backgroundSize = 'cover';
            physical.style.backgroundRepeat = 'no-repeat';
        }

        function sampleSilenceControlla(){
            physical.style.backgroundImage = 'url(assests/images/slience/PHYSICALbackground.png)';
            physical.style.backgroundPosition = 'center';
            physical.style.backgroundSize = 'cover';
            physical.style.backgroundRepeat = 'no-repeat';
        }

        function checkUnderlinePhysical(){
            Array.from(physicalProjectTitle).forEach((title) => {
                if (title.classList.contains('underlined')){
                console.log(`Checking underline for: ${title.id}`);

                [pianoContent, handDrumContent, synthContent, sampleContent].forEach((content) => {
                    content.style.display = 'none';
                });

                let targetContent;

                switch (title.id){
                    case 'printingPiano':
                        console.log('printing piano is underlined');
                        pianoControlla();
                        targetContent = pianoContent;
                        break;
                    case 'handDrum':
                        console.log('handDrum is underlined');
                        handDrumControlla();
                        targetContent = handDrumContent;
                        break;
                    case 'tableDrum':
                        console.log('table drum is underlined');
                        break;
                    case 'synthSub':
                        console.log('synth sub is underlined');
                        targetContent = synthContent;
                        synthControlla();
                        break;
                    case 'sampSilence':
                        console.log('samp silence is underlined');
                        sampleSilenceControlla();
                        targetContent = sampleContent;
                        break;
                    default:
                        console.log('no underline detected');
                        break;
                }

                if (targetContent){
                    setTimeout(() => {
                        targetContent.classList.add('fadeIn');
                        targetContent.style.display = 'flex';
                    }, 500);
                } else {
                    switch (title.id){
                        case 'printingPiano':
                            pianoContent.style.display = 'none';
                            pianoContent.classList.remove('fadeIn');
                            break;
                        case 'handDrum':
                            handDrumContent.style.display = 'none';
                            handDrumContent.classList.remove('fadeIn');
                            break;
                        case 'tableDrum':
                            break;
                        case 'synthSub':
                            synthContent.style.display = 'none';
                            synthContent.classList.remove('fadeIn');
                            break;
                        case 'sampSilence':
                            sampleContent.style.display = 'none';
                            sampleContent.classList.remove('fadeIn');
                            break;
                        default:
                    }
                }
            }
            });
        };
        let physicalIsIntersecting = false;
        let shouldContinuePhysicalAnimation = false;

        function startPhysicalUnderlineAnimation() {
            underlinePhysical();
        }
        function underlinePhysical() {
            Array.from(physicalProjectTitle).forEach((title,index) => {
                title.classList.remove('underline', 'mated');
                setTimeout(()=>{
                    checkUnderlinePhysical();
                    console.log(`Adding underlined to: ${title.id}`);
                    title.classList.add('underlined', 'mated');
                    setTimeout(()=>{
                        if(title.classList.contains('mated')){
                            title.classList.remove('underlined', 'mated');
                        }
                    },4750);
                }, index * 5000)                
            })
        }

        function addUnderlinePhysical(){
            Array.from(physicalProjectTitle).forEach((title)=>{
                title.addEventListener('mouseover', () => {
                    title.classList.add("underlined");
                    checkUnderlinePhysical();
                });
                title.addEventListener('mouseout', () => {
                    title.classList.remove("underlined");
                });
            });
        }
    //observer behaviour
    const observerPhysical = new IntersectionObserver(entries => {
        entries.forEach(entry =>{
            if(entry.target.id==='physical'){
                if(entry.isIntersecting){
                    console.log('physical is intersecting');
                    console.log('PHYSICAL IS HERE');
                    physicalSection.style.opacity = '1';
                    physicalTitle.style.opacity = '1';
                    physicalTitle.classList.add('fadeSlideInSlow');
                    console.log(physicalProjectTitles);
                    console.log(physicalProjectTitle);

                    setTimeout(() => {
                        // FADE IN PROJECT TITLES CONTAINER
                            console.log('project is on screen and about to change state');
                            physicalProjectTitles.classList.add('fadeIn');
                        
                        // FADE SLIDE IN PROJECT TITLES INDIVIDUALLY
                        Array.from(physicalProjectTitle).forEach((title, index) => {
                            console.log('project title is on screen and about to change state');
                            title.classList.remove('fadeSlideIn');
                            underlinePhysical();
                            setTimeout(() => {
                                title.classList.add('fadeSlideIn');
                            }, index * 200 + 300);
                    });
                    }, 450);

                    addUnderlinePhysical();
                }
                else{
                    console.log('physical is not intersecting');
                    physicalTitle.classList.remove('fadeSlideInSlow');
                    console.log('animation has been removed from physical title');
                    physicalProjectTitles.classList.remove('fadeIn');
                    physicalProjectTitles.style.opacity = '0';
                    console.log('animation has been removed from physical project titles container');
                    Array.from(physicalProjectTitle).forEach((title) => {
                        title.classList.remove('fadeSlideIn');
                        title.style.opacity = "0";
                    });
                    console.log('animation has been removed from physical project titles');
                    resetNavBar();
                }
            }
        });
    },{
        threshold: 0.4,
        rootMargin: "-10% 0%"  
    });
    observerPhysical.observe(physical)
    console.log(physical);

    //END OF PHYSICAL CONTROLS AND ANIMATIONS  //  START OF DIGITAL CONTROLS AND ANIMATIONS
    let digital = document.getElementById('digital');
    let digitalSection = document.getElementById('digitalSection');
    let digitalTitle = document.getElementById('digitalTitle');
    let digitalProjectTitles = document.getElementById('digitalProjectTitles');
    let digitalProjectTitle = document.getElementsByClassName('digitalProjectTitle');

    function underlineDigital (){
        Array.from(digitalProjectTitle).forEach((title, index) => {
            title.classList.remove('underlined', 'mated');
            setTimeout(() => {
                title.classList.add('underlined', 'mated');
                setTimeout(() => {
                    if(title.classList.contains('mated')){
                        title.classList.remove('underlined', 'mated');
                    }
                }, 4750);
            }, index * 5000);
        });
    }

    const digitalObserver = new IntersectionObserver(entries => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                console.log('didital is here');
                digitalSection.classList.add('fadeIn');
                digitalTitle.classList.add('scrollInFast');

                setTimeout(() => {
                    digitalProjectTitles.classList.add('fadeIn');
                    Array.from(digitalProjectTitle).forEach((title, index) => {
                        title.classList.remove('fadeSlideIn');
                        setTimeout(() => {
                            title.classList.add('fadeSlideIn');
                        }, index * 200 + 300);
                    });
                    underlineDigital();
                }, 350);
            } else {
                digitalSection.classList.remove('fadeIn');
                digitalTitle.classList.remove('scrollInFast');
                digitalProjectTitles.classList.remove('fadeIn');
                Array.from(digitalProjectTitle).forEach((title) => {
                    title.classList.remove('fadeSlideIn');
                });
                resetNavBar();
            }
        })
    }, {
        threshold: 0.4,
        rootMargin: "-10% 0%"
    });

    digitalObserver.observe(digital);
