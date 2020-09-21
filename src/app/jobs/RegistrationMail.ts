import Mail from '../lib/Mail';

export default {
    key: 'RegistrationMail',
    async handle({data}:any){
        const { user } = data;

        await Mail.sendMail({
            from: 'Marlon Castro <msc@ecomp.poli.br>',
            to: `${user.name} <${user.email}>`,
            subject: 'Cadastro no sistema',
            html: `Olá ${user.name}, Bem vindo ao sistema`
        });        
    }
};