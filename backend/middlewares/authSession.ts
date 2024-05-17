import { getSession } from "@auth/express";
import { Request, Response, NextFunction } from "express";
import { authConfig } from "../config/authExpressConfig";

export async function authSession(req: Request, res: Response, next: NextFunction) {
    try {
        res.locals.session = await getSession(req, authConfig);
        next();
    } catch (error) {
        console.error("Error getting session", error);
        next(error);
    }
}

export async function authenticatedUser(req: Request, res: Response, next: NextFunction) {
    const session = res.locals.session ?? (await getSession(req, authConfig))
    if (!session?.user) {
        res.redirect("/login")
    } else {
        next()
    }
}