/*
Parámetros rest
Los parámetros rest nos permiten enviar la cantidad que queramos de parámetros a una función, casi sin limite.
*/

import { ROLES, User } from "./01-enum";

const currentUser: User = {
  username: 'goku',
  role: ROLES.CUSTOMER
}

export const checkAdminRole = () => {
  if(currentUser.role === 'admin') {
    return true;
  } else {
    return false;
  }
}

const rta = checkAdminRole();
console.log('checkAdminRole',rta);

export const checkRole = (role1: string, role2:string) => {
  if(currentUser.role === role1) {
    return true;
  }

  if(currentUser.role === role2) {
    return true;
  }

  return false;
}

const rta2 = checkRole(ROLES.ADMIN, ROLES.SELLER);
console.log('checkRole',rta2);

export const checkRoleV2 = (roles: string[]) => {
  if(roles.includes(currentUser.role)) {
    return true;
  }else {
    return false;
  }
}

const rta3 = checkRoleV2([ROLES.ADMIN, ROLES.CUSTOMER]);
console.log('checkRoleV2', rta3);

export const checkRoleV3 = (...roles: string[]) => {
  if(roles.includes(currentUser.role)) {
    return true;
  }else {
    return false;
  }
}

const rta4 = checkRoleV3(ROLES.ADMIN, ROLES.CUSTOMER, ROLES.SELLER);
console.log('checkRoleV3', rta4);
