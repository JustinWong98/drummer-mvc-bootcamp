module.exports = {
  up: async (queryInterface) => {
    // Define category data
    const drummerData = [
      {
        name: 'Kai',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Akira',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Justin',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'ChuanXin',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    // Bulk insert categories
    const drummers = await queryInterface.bulkInsert('drummers', drummerData, {
      returning: true,
    });

    // Define item data
    const reservationData = [
    ];
    for (let i = 0; i < drummers.length; i += 1) {
      reservationData.push({
        date: new Date(),
        drummer_id: i + 1,
        created_at: new Date(),
        updated_at: new Date(),
      });
    }

    // Bulk insert items
    await queryInterface.bulkInsert(
      'reservations',
      reservationData,
      { returning: true },
    );
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('reservations', null, {});
    await queryInterface.bulkDelete('drummers', null, {});
  },
};
