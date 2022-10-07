export default {
    Query: {
        clients: async (parent, args, { models }) => {
            return await models.Client.findAll();
        },

        client: async (parent, { ID }, { models }) => {
            return await models.Client.findByPk(ID);
        }
    },
    Mutation: {
        createNewClient: async (parent, { Name }, { models }) => {
            return await models.Client.create({
                Name
            });
        }, deleteNote: async (parent, { id }, { models }) => {
            return await models.Note.destroy({
                where: {
                    id
                }
            });
        },
        updateClient: async (parent, { ID, Name }, { models }) => {
            await models.Client.update(
                {
                    Name
                },
                {
                    where: {
                        ID: ID
                    }
                }
            );
            const updatedClient = await models.Client.findByPk(ID, {
                include
            });
            return updatedClient;
        }
    }
};