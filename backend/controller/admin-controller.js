import { adminService, userService, siteService } from "../services";
import { asyncHandler, s3Uploadv2 } from "../utils";

const adminController = {
  getUsersInfoByPagenation: asyncHandler(async (req, res) => {
    const page = Number(req.query.page || 1);
    const perPage = Number(req.query.perPage || 10);
    const { serachKey, serachValue } = req.query;
    const searchQuery = { [serachKey]: serachValue };
    const [totalCount, users] = await adminService.getUsersInfoByPagenation(
      page,
      perPage,
      searchQuery
    );
    const totalPage = Math.ceil(totalCount / perPage);
    res.status(200).json({ page, perPage, totalPage, totalCount, users });
  }),

  getUserInfo: asyncHandler(async (req, res) => {
    const userId = req.params.userId;
    const user = await userService.getUserInfo(userId);
    res.status(200).json(user);
  }),

  getSitesByPagenation: asyncHandler(async (req, res) => {
    const page = Number(req.query.page || 1);
    const perPage = Number(req.query.perPage || 10);
    const { serachKey, serachValue } = req.query;
    const searchQuery = { [serachKey]: serachValue };
    const [totalCount, sites] = await adminService.getSitesByPagenation(
      page,
      perPage,
      searchQuery
    );
    const totalPage = Math.ceil(totalCount / perPage);
    res.status(200).json({ page, perPage, totalPage, totalCount, sites });
  }),

  getSiteInfo: asyncHandler(async (req, res) => {
    const siteId = req.params.siteId;
    const site = await siteService.getSites(siteId);
    res.status(200).json(site);
  }),

  editUserInfo: asyncHandler(async (req, res) => {
    const userId = req.params.userId;
    let toUpdateUser = {
      ...req.body,
    };
    if (req.file) {
      const results = await s3Uploadv2(req.file);
      const profileImage = results.Location;
      toUpdateUser = {
        ...toUpdateUser,
        profileImage,
      };
    }
    if (req.body.profileImage === "") {
      toUpdateUser = {
        ...toUpdateUser,
        profileImage: null,
      };
    }
    const updatedUser = await adminService.editUserInfo(userId, toUpdateUser);
    res.status(201).json(updatedUser);
  }),

  deleteUser: asyncHandler(async (req, res) => {
    const userId = req.params.userId;
    const deletedUser = await userService.deleteUser(userId);
    res.status(204).json(deletedUser);
  }),
};

export { adminController };
