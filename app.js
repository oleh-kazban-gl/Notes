const chalk = require('chalk');
const yargs = require('yargs');

const notes = require('./notes');

yargs.command({
  command: 'add',
  describe: 'Add a record',
  builder: {
    title: {
      describe: 'Record title',
      type: 'string',
      demandOption: true
    },
    body: {
      describe: 'Record body',
      type: 'string',
      demandOption: true
    },
  },
  handler: function (argv) {
    console.log('Adding a record:');
    console.log(`Title: ${argv.title}`);
    console.log(`Body: ${argv.body}`);
  }
});
yargs.command({
  command: 'remove',
  describe: 'Remove a record',
  handler: function () {
    console.log('Removing a record:');
  }
});
yargs.command({
  command: 'read',
  describe: 'Read a record',
  handler: function () {
    console.log('Reading a record:');
  }
});
yargs.command({
  command: 'list',
  describe: 'Show all records',
  handler: function () {
    console.log('Showing all records:');
  }
});

// console.log('process args: ', process.argv);
// console.log('yargs args: ', yargs.argv);

yargs.parse();

