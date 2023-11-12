import { NextResponse } from "next/server";
import {
  HOME_PATH,
  LOGIN_PATH,
  REGISTER_PATH,
  USERID_NAME,
} from "./utils/constants";

// Esta función puede marcarse como `async` si se usa `await` en su interior
export function middleware(request) {
  const userid = request.cookies.get(USERID_NAME);
  const { pathname } = request.nextUrl;

  if (userid) {
    // Si el usuario ya tiene una sesión
    if (pathname.startsWith(LOGIN_PATH) || pathname.startsWith(REGISTER_PATH)) {
      return NextResponse.redirect(new URL(HOME_PATH, request.url));
    }
  } else {
    // Si el usuario no tiene una sesión
    if (pathname.startsWith(LOGIN_PATH) || pathname.startsWith(REGISTER_PATH)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL(LOGIN_PATH, request.url));
    }
  }

  // Esta parte no es necesaria porque las condiciones anteriores ya cubren todos los casos
}

// Ver "Matching Paths" más abajo para obtener más información
export const config = {
  matcher: ["/login", "/register"],
};
