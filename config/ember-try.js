module.exports = {
  scenarios: [
    {
      name: 'Ember 1.11',
      dependencies: {
        'ember': '1.11.0'
      }
    },
    {
      name: "Ember Beta",
      dependencies: {
        'ember': 'components/ember#beta'
      },
      resolutions: {
        'ember': 'beta'
      }
    }
  ]
};
