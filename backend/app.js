import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { userRouter, adminRouter, authRouter, siteRouter } from "./routers";
import { errorHandler, adminRequired, loginRequired } from "./middlewares";
import { setUserToken } from "./utils";
import { NotFoundError } from "./errors";
import passport from "passport";
import { passportStrategies } from "./passport";
import cookieParser from "cookie-parser";

dotenv.config();
const PORT = process.env.SERVER_PORT || 8000;
const app = express();

const DB_URL = process.env.MONGODB_URL;
mongoose.connect(DB_URL);
mongoose.connection.on("connected", () => {
  console.log("MongoDB connected");
});

mongoose.connection.on("error", () => {
  console.log("MongoDB error");
});

app.use(cors());

app.use(cookieParser());

passportStrategies();

app.use(express.json());

// 테스팅용 라우터, 제거예정
app.get("/", function (req, res) {
  res.send("<h1>welcome page</h1>");
});

app.use(passport.initialize());

app.use((req, res, next) => {
  res.ok = (statusCode, json = {}) => {
    return res.status(statusCode).json(json);
  };
  res.okWithSetToken = (statusCode, json = {}) => {
    setUserToken(res, req.user);
    return res.status(statusCode).json(json);
  };
  res.okWithDeleteCookie = (statusCode, cookieName, json = {}) => {
    return res.status(statusCode).clearCookie(cookieName).json(json);
  };
  next();
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/admin", loginRequired, adminRequired, adminRouter);
app.use("/api/site", siteRouter);

app.listen(PORT, function () {
  console.log(`listening on http://localhost:${PORT}`);
});

app.use("*", (req, res) => {
  throw new NotFoundError("404 Not Found");
});

app.use(errorHandler);

export { app };
