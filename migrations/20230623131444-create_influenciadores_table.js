'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.createTable('Influenciador', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: true
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false
    },
    instagram: {
        type: Sequelize.STRING,
        allowNull: false
    },

    tags: {
        type: Sequelize.ENUM("esporte", "moda", "carro"),
        allowNull: false
    },
    data_nascimento: {
        type: Sequelize.DATE,
        allowNull: false,

    },
    createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
  })

    await queryInterface.createTable('Proposta', {


    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
  },
  mensagem_proposta: {
      type: Sequelize.STRING,
      allowNull: false
  },
  veiculo_midiatico: {
      type: Sequelize.ENUM("instagram", "tiktok"),
      allowNull: false
  },
  valor_divulgacao: {
      type: Sequelize.STRING,
      allowNull: true,
  },
  status_proposta: {
      type: Sequelize.ENUM("aceita", "pendente", "declinada"),
      defaultValue: "pendente",
      allowNull: false
  },
  tipo_remetente: {
      type: Sequelize.ENUM("marca", "influenciador"),
      allowNull: false
  },
  updated: {
      type: Sequelize.ENUM("true", "false"),
      allowNull: false
  },
  id_remetente: {
      type: Sequelize.STRING,
      allowNull: false
  },
  id_destinatario: {
      type: Sequelize.STRING,
      allowNull: false
  },
  data_envio:{
      type: Sequelize.DATE,
      allowNull: false
  },
  id_influenciador: {
    allowNull: false,
    type: Sequelize.INTEGER,
    references: {
      model: 'Influenciador',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  }
  
})
  },
  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('Influenciador');
    await queryInterface.dropTable('Proposta');
  }
};
