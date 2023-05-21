const yargs = require("yargs");

const notes = require("./notes");

yargs.command({
  command: "add",
  describe: "Add a record",
  builder: {
    title: {
      describe: "Record title",
      type: "string",
      demandOption: true,
    },
    body: {
      describe: "Record body",
      type: "string",
      demandOption: true,
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});
yargs.command({
  command: "remove",
  describe: "Remove a record",
  builder: {
    title: {
      describe: "Record title",
      type: "string",
      demandOption: true,
    },
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
  },
});
yargs.command({
  command: "read",
  describe: "Read a record",
  builder: {
    title: {
      describe: "Record title",
      type: "string",
      demandOption: true,
    },
  },
  handler: function (argv) {
    notes.getNote(argv.title);
  },
});
yargs.command({
  command: "list",
  describe: "Show all records",
  handler: function () {
    notes.listNotes();
  },
});

yargs.parse();
