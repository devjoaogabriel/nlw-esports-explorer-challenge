const Animation = ScrollReveal ({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 300,
    // reset: true
})

Animation.reveal('header')
Animation.reveal('section', {origin: 'left', interval: 300})