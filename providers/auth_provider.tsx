import { getCookie } from "cookies-next";
import { redirect } from "next/navigation";

const AuthProvider = ({ children } : { children : React.ReactNode }) => {

  // const token = getCookie('token');

  // if (!token) {
  //   return redirect('/login');
  // }

  return (
      <html>
        <body>
        <div>
        {children}
      </div>
        </body>
      </html>
  )
}

export default AuthProvider;