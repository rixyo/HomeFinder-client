import jwt from "jsonwebtoken"
export interface userType {
    id: string;
    name: string;
    role: UserRole;
    iat: number;
    exp: number;
  }
  enum UserRole {
    ADMIN = "ADMIN",
    BUYER = "BUYER",
    REALTOR = "REALTOR",
  }
const  userRole =() => {
    const token = localStorage.getItem('token');
    if(!token) return null;
    const decoded = jwt.decode(token) as userType;
    if(!decoded) return null;
    const role = decoded.role;
    return role;


};
export default userRole;