import { Request, RequestHandler, Response } from "express";
import * as yup from 'yup';
import { StatusCodes } from "http-status-codes";

interface ICities {
    name: string,
    state: string
}

const bodyValidation: yup.ObjectSchema<ICities> = yup.object().shape({
    name: yup.string().required().min(3),
    state: yup.string().required().min(3)
});

export const createBodyValidator: RequestHandler = async (req, res, next) => {
    const errors: Record<string, string> = {};
    
    try {
        await bodyValidation.validate(req.body, { abortEarly: false });
        res.status(StatusCodes.ACCEPTED).send("Cidade cadastrada!");
        return next();
    } catch(err) {
        const yupError = err as yup.ValidationError;

        yupError.inner.forEach(error => {
            if(!error.path) return;
            errors[error.path] = error.message;
            console.log(errors);
        });
        
        return res.status(StatusCodes.BAD_REQUEST).json(errors)
    }
}

export const create: RequestHandler = async (req, res, next) => {
    console.log("Enviado ao banco! " + req.body.name + " " +req.body.state);
}