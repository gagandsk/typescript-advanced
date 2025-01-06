enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer',
};

type User = {
  username: string;
  role: ROLES;
}

const goku: User = {
  username: 'goku',
  role: ROLES.ADMIN
}
