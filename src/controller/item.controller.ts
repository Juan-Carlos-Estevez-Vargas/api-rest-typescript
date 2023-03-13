import { Request, Response } from "express"
import { deleteCar, getCar, getCars, insertCar, updateCar } from "../services/item.service";
import { handleHttp } from "../utils/error.handle"

const getItem = async ({ params }: Request, response: Response) => {
  try {
    const { id } = params;
    const responseGet = await getCar(id);
    const data = responseGet ? responseGet : "NOT FOUND";
    response.send(data);
  } catch (e) {
    handleHttp(response, "ERROR_GET_ITEM");
  }
}
const getItems = async (request: Request, response: Response) => {
  try {
    const responseGet = await getCars();
    response.send(responseGet);
  } catch (e) {
    handleHttp(response, "ERROR_GET_ITEMS");
  }
}
const updateItem = async (request: Request, response: Response) => {
  try {
    const responseUpdate = await updateCar(request.params.id, request.body);
    response.send(responseUpdate);
  } catch (e) {
    handleHttp(response, "ERROR_UPDATE_ITEM");
  }
}
const postItem = async ({ body }: Request, response: Response) => {
  try {
    const responseInsert = await insertCar(body);
    response.send(responseInsert);
  } catch (e) {
    handleHttp(response, "ERROR_POST_ITEM");
  }
}
const deleteItem = async ({ params }: Request, response: Response) => {
  try {
    const { id } = params
    const responseDelete = await deleteCar(id);
    response.send(responseDelete);
  } catch (e) {
    handleHttp(response, "ERROR_DELETE_ITEM");
  }
}

export { getItem, getItems, updateItem, postItem, deleteItem }