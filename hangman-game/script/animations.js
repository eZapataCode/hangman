const showPopup = popup => {
    showPopupTl = gsap.timeline();
    showPopupTl.fromTo(popup,
        {y: -20,
         visibility: 'hidden',
         pointerEvents: 'none'},
        {y: 0,
        visibility: 'visible',
        pointerEvents: 'all',
        stagger: 0.5}
    );
}

const hidePopup = popup => {
    gsap.to(popup,
        {y: -20,
        visibility: 'hidden',
        pointerEvents: 'none'}
    );
}

const startGameAnimation = () => {
    const startTl = gsap.timeline();
    
    startTl.fromTo(".word-container__block",
        { y: 40, opacity: 0 },
        { y: 0, opacity:1, stagger:0.2 }
    );
    startTl.fromTo(".form",
        {y: 60, opacity: 0},
        {y: 0, opacity: 1}
    ); 
    startTl.to(".wrapper__hint",
        {y: 0}
    );   
};

const firstAnimation = () => {
    gsap.fromTo(".pop-box__letter",
        {color: 'transparent'}, 
        {color: 'black', stagger:{each: 0.3, from: 'random'}}
    )
    gsap.fromTo("#start-btn",
        {scale: 1},
        {scale: 1.1, repeat: -1, duration: 2, yoyo: true}
    )
}

const winAnimation = () => {
    gsap.to('.word-container__block',
        {background: 'linear-gradient(to bottom, transparent 50%, green 115%',
         stagger:{each: 0.1}}
    );
}

const loseAnimation = () => {
    gsap.to('.word-container__block',
        {background: 'linear-gradient(to bottom, transparent 50%, red 115%',
         stagger:{each: 0.1}}
    );
}