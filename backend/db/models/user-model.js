import { model } from "mongoose";
import { UserSchema } from "../schemas/user-schema";

const User = model("users", UserSchema);

export class UserModel {
  async findByEmail(email) {
    const user = await User.findOne({ email });
    return user;
  }
  async findById(_id) {
    const user = await User.findOne({ _id: _id });
    return user;
  }
  async create(userInfo) {
    const createdNewUser = await User.create(userInfo);
    return createdNewUser;
  }
  async findAll() {
    const users = await User.find({});
    return users;
  }
  // 삭제 예정
  // async countTotalUsers() {
  //   const totalCount = await User.countDocuments({});
  //   return totalCount;
  // }
  // async pagenation(page, perPage) {
  //   const users = await User.find({})
  //     .sort({ createdAt: -1 })
  //     .skip(perPage * (page - 1))
  //     .limit(perPage);
  //   return users;
  // }
  async update(_id, update) {
    const filter = { _id };
    const option = { returnOriginal: false };
    const updatedUser = await User.findOneAndUpdate(filter, update, option);
    return updatedUser;
  }
  async delete(_id) {
    const filter = { _id };
    const deletedUser = await User.findOneAndDelete(filter);
    return deletedUser;
  }
}

const userModel = new UserModel();

export { userModel };