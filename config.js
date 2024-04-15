const daypass = ['space', 'comet', 'pluto', 'earth', 'solar', 'stars', 'orbit', 'satyr', 'galax', 'nebul', 'astro', 'aster', 'cosmo', 'venus', 'mars' ];// Define daypass array first
const rdaypass = daypass[Math.floor(Math.random() * daypass.length)];

const config = {
  daypass: daypass, // Or just daypass if you want to reference the variable directly
  challenge: true,
  users: {
    theindian: 'ROckMAkEN',
    daypass: rdaypass,
  },
  routes: true,
  local: true,
};

export default config;
