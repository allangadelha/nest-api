import { InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

@InputType()
export class CreateuserInput {
    @IsString()
    @IsNotEmpty({ message: "Este campo não pode ser vazio" })
    name: string;

    @IsEmail()
    @IsNotEmpty({ message: "Este campo não pode ser vazio" })
    email: string;

    @IsString()
    @IsNotEmpty({ message: "Este campo não pode ser vazio" })
    password: string;
}