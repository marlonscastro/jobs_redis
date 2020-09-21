import Queue from '../lib/Queue';

export default {
    async store(req: any, res: any) {
        const { name, email, password } = req.body;

        const user = {
            name,
            email,
            password
        };

        // Adicionar jobs RegistrationMail na fila aqui
        await Queue.add('RegistrationMail',{ user });

        return res.json(user);
    }
}