const daypass = ['space', 'comet', 'pluto', 'earth', 'solar'];// Define daypass array first
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
