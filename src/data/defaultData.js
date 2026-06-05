export const defaultUsers = [
  {
    dni: '99999999',
    name: 'Admin Principal',
    email: 'admin@loscumpas.com',
    password: 'admin',
    role: 'admin',
    ticketsCount: 0
  },
  {
    dni: '77777777',
    name: 'Juan Perez',
    email: 'juan@perez.com',
    password: '123',
    role: 'user',
    ticketsCount: 2
  },
  {
    dni: '88888888',
    name: 'Maria Gomez',
    email: 'maria@gmail.com',
    password: '123',
    role: 'user',
    ticketsCount: 5
  }
];

export const defaultTickets = [
  { serial: '#LC-8247-2026', dni: '77777777', name: 'Juan Perez', date: '2026-06-01', price: 50 },
  { serial: '#LC-8248-2026', dni: '77777777', name: 'Juan Perez', date: '2026-06-02', price: 50 },
  { serial: '#LC-8249-2026', dni: '88888888', name: 'Maria Gomez', date: '2026-05-30', price: 50 },
  { serial: '#LC-8250-2026', dni: '88888888', name: 'Maria Gomez', date: '2026-05-31', price: 50 },
  { serial: '#LC-8251-2026', dni: '88888888', name: 'Maria Gomez', date: '2026-06-01', price: 50 },
  { serial: '#LC-8252-2026', dni: '88888888', name: 'Maria Gomez', date: '2026-06-02', price: 50 },
  { serial: '#LC-8253-2026', dni: '88888888', name: 'Maria Gomez', date: '2026-06-03', price: 50 }
];
