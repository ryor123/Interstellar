const daypass = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape'];// Define daypass array first
const rdaypass = daypass[Math.floor(Math.random() * daypass.length)];

const config = {
  daypass: daypass, // Or just daypass if you want to reference the variable directly
  challenge: true,
  users: {
    interstellar: 'password',
    theindian: rdaypass, // Reference the daypass variable here
  },
  routes: true,
  local: true,
};

export default config;
