export default {
  particles: {
    number: {
      value: 99,
      density: {
        enable: !0,
        value_area: 900
      }
    },
    color: {
      value: '#f0f0f0'
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#000000'
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: '',
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: .7,
      random: !0,
      anim: {
        enable: !0,
        speed: 1,
        opacity_min: .1,
        sync: !1
      }
    },
    size: {
      value: 5,
      random: !0,
      anim: {
        enable: !0,
        speed: 40,
        size_min: .1,
        sync: !1
      }
    },
    line_linked: {
      enable: !1,
      distance: 500,
      color: '#f0f0f0',
      opacity: .4,
      width: 2
    },
    move: {
      enable: !0,
      speed: 6,
      direction: 'bottom',
      random: !1,
      straight: !1,
      out_mode: 'out',
      bounce: !1,
      attract: {
        enable: !1,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: !0,
        mode: 'bubble'
      },
      onclick: {
        enable: !0,
        mode: 'repulse'
      },
      resize: !0
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: .1
        }
      },
      bubble: {
        distance: 400,
        size: 4,
        duration: .3,
        opacity: 1,
        speed: 3
      },
      repulse: {
        distance: 350,
        duration: .4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: !0
};