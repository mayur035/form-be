import { Request, Response } from "express";
import { RESPONSE_MESSAGE, STATUS_CODE } from "../../constants/constants";
import { DataSources } from "../data-source";
import { FormEntity } from "../entities/form.entity";

export const formPost = async (req: Request, res: Response) => {
  const { fname, lname, email, phone, address } = req.body;
  try {
    const formRepository = DataSources.getRepository(FormEntity);

    const form = new FormEntity();
    form.first_name = fname;
    form.last_name = lname;
    form.address = address;
    form.email = email;
    form.phone = phone;
    form.address = address;

    await formRepository.save(form);

    res
      .status(STATUS_CODE.__SUCCESS)
      .send({ message: RESPONSE_MESSAGE.__SUCCESS("form filled") });
  } catch (error) {
    console.log(error);
    res
      .status(STATUS_CODE.__FAIL)
      .send({ message: RESPONSE_MESSAGE.__FAIL("form filled") });
  }
};

export const formGet = async (req: Request, res: Response) => {
  try {
    const formRepository = DataSources.getRepository<FormEntity>(FormEntity);
    const userData = await formRepository.find();

    res.status(STATUS_CODE.__SUCCESS).send({
      message: RESPONSE_MESSAGE.__SUCCESS("User data"),
      data: userData,
    });
  } catch (error) {
    console.log("error", error);
    res
      .status(STATUS_CODE.__FAIL)
      .send({ message: RESPONSE_MESSAGE.__FAIL("form get") });
  }
};
