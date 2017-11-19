export default {
  selector: '#particles-js',
  maxParticles: 200,
  speed: .7,
  sizeVariations: 15,
  color: '#f0f0f0',
  connectParticles: true,
  minDistance: 50,
  responsive: [{
    breakpoint: 990,
    options: {
      maxParticles: 0
    }
  }
  ]
};