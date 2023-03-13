import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"

const getItem = (request: Request, response: Response) => {
  try {

  } catch (e) {
    handleHttp(response, "ERROR_GET_ITEM");
  }
}
const getItems = (request: Request, response: Response) => {
  try {

  } catch (e) {
    handleHttp(response, "ERROR_GET_ITEMS");
  }
}
const updateItem = (request: Request, response: Response) => {
  try {

  } catch (e) {
    handleHttp(response, "ERROR_UPDATE_ITEM");
  }
}
const postItem = ({ body }: Request, response: Response) => {
  try {
    response.send(body);
  } catch (e) {
    handleHttp(response, "ERROR_POST_ITEM");
  }
}
const deleteItem = (request: Request, response: Response) => {
  try {

  } catch (e) {
    handleHttp(response, "ERROR_DELETE_ITEM");
  }
}

export { getItem, getItems, updateItem, postItem, deleteItem }