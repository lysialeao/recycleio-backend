const Empresa = (sequelize, DataTypes) =>{
    return sequelize.define('Empresa', {
        cnpj: DataTypes.STRING,
        razao_social: DataTypes.STRING,
        nome_fantasia: DataTypes.STRING,
        telefone: DataTypes.STRING,
        texto: DataTypes.STRING,
        email: DataTypes.STRING,
        dias_coleta: DataTypes.STRING,
        nome_responsavel_coletas: DataTypes.STRING,
        email_responsavel_coletas: DataTypes.STRING,
        id_endereco: DataTypes.INTEGER
    });
}

module.exports = Empresa
