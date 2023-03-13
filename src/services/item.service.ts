import { Car } from "../interfaces/car.interface";
import { ItemModel } from "../models/item.model";

const insertCar = async (item: Car) => {
  const responseIns = await ItemModel.create(item);
  return responseIns;
}

const getCars = async () => {
  const response = await ItemModel.find({});
  return response;
}

const getCar = async (id: string) => {
  const response = await ItemModel.findOne({ _id: id });
  return response;
}

const updateCar = async (id: string, data: Car) => {
  const response = await ItemModel.findOneAndUpdate({ _id: id }, data, { new: true });
  return response;
}

const deleteCar = async (id: string) => {
  const response = await ItemModel.findOneAndDelete({ _id: id });
  return response;
}

export { insertCar, getCars, getCar, updateCar, deleteCar };