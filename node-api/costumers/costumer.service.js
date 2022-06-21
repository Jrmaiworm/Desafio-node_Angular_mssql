const bcrypt = require('bcryptjs');

const db = require('_helpers/db');

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function getAll() {
    return await db.Costumer.findAll();
}

async function getById(id) {
    return await getCostumer(id);
}

async function create(params) {
    // validate
    if (await db.Costumer.findOne({ where: { email: params.email } })) {
        throw 'Email "' + params.email + '" is already registered';
    }

    const costumer = new db.Costumer(params);
    
  
    

    // save costumer
    await costumer.save();
}

async function update(id, params) {
    const costumer = await getCostumer(id);

    // validate
    const emailChanged = params.email && costumer.email !== params.email;
    if (emailChanged && await db.Costumer.findOne({ where: { email: params.email } })) {
        throw 'Email "' + params.email + '" is already registered';
    }

    
    

    // copy params to costumer and save
    Object.assign(costumer, params);
    await costumer.save();
}

async function _delete(id) {
    const costumer = await getCostumer(id);
    await costumer.destroy();
}

// helper functions

async function getCostumer(id) {
    const costumer = await db.Costumer.findByPk(id);
    if (!costumer) throw 'Costumer not found';
    return costumer;
}
