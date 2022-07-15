"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "houses",
      [
        {
          name: "Stark",
          sigil: "Grey Wolf",
          head: "Lord Eddard Stark",
          extinct: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lannister",
          sigil: "A golden lion rampant on a crimson field",
          head: "Tywin Lannister",
          extinct: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tully",
          sigil: "A silver trout leaping on a red and blue background.",
          head: "Edmure Tully",
          extinct: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Baratheon",
          sigil: "A crowned black stag salient on a gold field",
          head: "Robert Baratheon",
          extinct: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Targaryen",
          sigil: "A red three-headed dragon on a black field",
          head: "Daenerys Targaryen",
          extinct: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tyrell",
          sigil: "A golden rose on a green field",
          head: "Mace Tyrell",
          extinct: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("houses", null, {});
  },
};
