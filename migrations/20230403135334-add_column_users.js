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

    queryInterface.addColumn('users', 'tags' , Sequelize.ENUM('esporte', 'moda', 'carro', 'restaurante'));
    queryInterface.addColumn('users', 'instagram' , Sequelize.STRING);
    queryInterface.addColumn('users', 'data_de_nascimento' , Sequelize.DATE);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('users');
  }
};
