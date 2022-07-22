import { loginRequired } from "../middlewares";
import { siteController } from "../controller";
import { Router } from "express";
const siteRouter = Router();

siteRouter.post("/", loginRequired, siteController.addsite);

siteRouter.get("/:siteId", siteController.getSiteInfo);

siteRouter.get("/user/:userId", loginRequired, siteController.getUserSites);

siteRouter.get("/domain/:domain", siteController.getSiteInfoByDomain);

siteRouter.patch("/:siteId", loginRequired, siteController.updateSite);

siteRouter.delete("/:siteId", loginRequired, siteController.deleteSite);

siteRouter.post("/:siteId/image", loginRequired, siteController.uploadImage);

export { siteRouter };
