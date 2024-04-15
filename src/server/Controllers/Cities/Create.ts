import { Request, Response } from "express";
import * as yup from 'yup';
import { StatusCodes } from "http-status-codes";

interface ICities {
    name: string,
}

const bodyValidation: yup.Schema<ICities> = yup.object().shape({
    name: yup.string().required().min(3)
});

export const create = async (req: Request<{}, {}, ICities>, res: Response) => {
    try {
        let validationData: ICities | undefined = await bodyValidation.validate(req.body, { abortEarly: false });
        return res.status(StatusCodes.BAD_REQUEST).send(validationData);
    } catch(err) {
        const yupError = err as yup.ValidationError;
        const validationErrors: Record<string, string> = {

        }

        yupError.inner.forEach(error => {
            if(!error.path) return;
            validationErrors[error.path] = error.message;
        })

        return res.status(StatusCodes.BAD_REQUEST).json({
            errors: {
                default: yupError.message
            }
        })
    }
}